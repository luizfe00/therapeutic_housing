import { createContext, useState, useContext } from 'react'

export interface IAuthContext {
    auth: {
        token: string
        user: any
    };
    setAuth: (token: string) => void
}

const AuthContext = createContext<IAuthContext>({
    auth: {
        token: '',
        user: null
    },
    setAuth: () => undefined
});

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState({
        token: '',
        user: null
    })

    const setAuthToken = (token: string) => setAuth((prev) => ({ ...prev, token }))

    return (
        <AuthContext.Provider value={{ auth, setAuth: setAuthToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
export default AuthContext;