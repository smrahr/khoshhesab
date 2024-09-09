import { createContext, useContext, useState } from "react";
import {
    AuthContextType,
    ChildProps,
    UserDataType
} from "@src/types/generalTypes";


const AuthContext = createContext({} as AuthContextType);

const AuthProvider: React.FC<ChildProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userData, setUserData] = useState<null | UserDataType>(null);

    const userLogin = () => {

    }

    const logout = () => {

    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                userData,
                userLogin,
                logout,
                loginLoading: false,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
