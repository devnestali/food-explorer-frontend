import { useContext, createContext, useState, useEffect, useCallback } from "react";

import { api } from '../services/api';
import { showToasts } from "../utils/toasts"; 

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);
    
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('@foodexplorer:request');
        return storedCount > 0 ? storedCount : 0;
    });

    const [dishImage, setDishImage] = useState([]);
    const [dessertImage, setDessertImage] = useState([]);
    const [drinkImage, setDrinkImage] = useState([]);

    
    async function signIn(email, password) {
        try {
            const response = await api.post('/session', { email, password });
            const { token } = response.data;
            const { userInfo } = response.data;
            
            setUserData(userInfo);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            localStorage.setItem('@foodexplorer:user', JSON.stringify(userInfo));
            localStorage.setItem('@foodexplorer:token', token);
            localStorage.setItem('@foodexplorer:request', count);
            
        } catch (error) {
            showToasts.error('Email e/ou senha incorreto.');
            console.error(error)
        };
    };
    
    function signOut() {
        localStorage.removeItem('@foodexplorer:token');
        localStorage.removeItem('@foodexplorer:user');
        localStorage.removeItem('@foodexplorer:request');
        setUserData(null);
    };
    
    function userRequests() {
        setCount(countValue => ++countValue);
    
        return count
    };

    function setImage({ data, fileUrl}) {
        switch (data.type) {
            case "dish":
                setDishImage(prevUrl => [fileUrl, ...prevUrl]);
                break;
            case "dessert":
                setDessertImage(prevUrl => [fileUrl, ...prevUrl]);
                break;
            case "drink":
                setDrinkImage(prevUrl => [fileUrl, ...prevUrl]);
                break;
        };
    };

    async function updateMeal({ category, mealData, file, url }) {
        try {
            const { data } = await api.post(`/${category}`, mealData);
    
            const mealId = data.mealId[0];
    
            const fileForm = new FormData();
            fileForm.append('file', file);
    
            await api.patch(`/${category}/file/${mealId}`, fileForm); 
            
            setImage({ data: mealData, fileUrl: url});
        } catch (error) {
            if(error.message) {
                showToasts.error(error.response.data.message);
            } else {
                showToasts.error("Não foi possível criar um prato");
                console.error(error);
            }
        };
        
    };
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@foodexplorer:user'));
        const token = localStorage.getItem('@foodexplorer:token');
        const request = localStorage.getItem('@foodexplorer:request');
                
        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUserData(user);
        };
        
        setCount(request);

    }, []);

    useEffect(() => {
        localStorage.setItem('@foodexplorer:request', count);
    }, [count]);

    return (
        <AuthContext.Provider value={{ 
            userData, 
            count,
            dishImage,
            dessertImage,
            drinkImage, 
            signIn, 
            signOut, 
            userRequests,
            updateMeal,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context
};

export { useAuth, AuthProvider };