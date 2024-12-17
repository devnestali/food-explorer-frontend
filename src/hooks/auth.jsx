import { useContext, createContext, useState, useEffect } from "react";

import { api } from '../services/api';
import { showToasts } from "../utils/toasts"; 

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);

    async function signIn(email, password) {
        try {
            const response = await api.post('/session', { email, password });
            const { token } = response.data;
            const { userInfo } = response.data;
     
            setUserData(userInfo);
    
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            localStorage.setItem('@foodexplorer:user', JSON.stringify(userInfo));
            localStorage.setItem('@foodexplorer:token', token);
            
        } catch (error) {
            showToasts.error(error.response.data.message);
        };
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@foodexplorer:user'));
        const token = localStorage.getItem('@foodexplorer:token');

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUserData(user);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ userData, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context
};

export { useAuth, AuthProvider };