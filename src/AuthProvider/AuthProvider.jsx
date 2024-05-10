import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const registerWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (username, photoUrl) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: photoUrl
        })
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const githubSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const facebookProvider = new FacebookAuthProvider()

    const facebookSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const AuthProvider = {
        registerWithEmail,
        signInWithEmail,
        user,
        setUser,
        updateUser,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        signOutUser,
        setIsLoading,
        isLoading
    }

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