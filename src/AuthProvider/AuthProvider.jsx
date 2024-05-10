import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthProvider = {
        registerWithEmail,
    }

    return (
        <div>
            <AuthContext.Provider value={AuthProvider}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;