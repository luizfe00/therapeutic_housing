import { createContext, useState, useContext } from 'react';

export interface IAuthContext {
  auth: {
    token: string;
    user: any;
  };
  setAuth: (token: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  auth: {
    token: '',
    user: null,
  },
  setAuth: () => undefined,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('H_token') || '',
    user: null,
  });

  const setAuthToken = (token: string) =>
    setAuth((prev) => ({ ...prev, token }));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const setAuthUser = (user: any) => setAuth((prev) => ({ ...prev, user }));

  return (
    <AuthContext.Provider value={{ auth, setAuth: setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export const useAuthContext = () => useContext(AuthContext);
