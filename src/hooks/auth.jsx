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
        <AuthContext.Provider value={{ userData, count, signIn, signOut, userRequests }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context
};

export { useAuth, AuthProvider };