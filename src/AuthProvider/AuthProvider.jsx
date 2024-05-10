import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const AuthProvider = {
        registerWithEmail,
        signInWithEmail,
        user,
        setUser,
        signOutUser
    }

    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
            }
        })
        return(() => unsubscribe())
    }, [])

    return (
        <div>
            <AuthContext.Provider value={AuthProvider}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;