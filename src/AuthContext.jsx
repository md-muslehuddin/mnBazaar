import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
    };

    useEffect(() => {
        const storedAuthState = JSON.parse(localStorage.getItem('isAuthenticated'));
        if (storedAuthState !== null) {
            setIsAuthenticated(storedAuthState);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
