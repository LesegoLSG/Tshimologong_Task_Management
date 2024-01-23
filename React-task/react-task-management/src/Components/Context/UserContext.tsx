import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextProps {
    user: UserProps | undefined;
    setUser: (user: UserProps | undefined) => void;
    loading: boolean;
}

interface UserProps {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    tasks: [];
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProps | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
