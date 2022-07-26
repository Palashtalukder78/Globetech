import React, { createContext } from 'react';
import useServices from '../hooks/useServices';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allServices = useServices();
    return (
        <AuthContext.Provider value={{ allServices }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;