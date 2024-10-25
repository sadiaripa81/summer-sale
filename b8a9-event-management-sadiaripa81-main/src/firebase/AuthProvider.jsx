import React, { createContext } from 'react';
import app from './firebaseConfig'
import { useEffect } from 'react';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext(null);

const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };

    const signUp = (userName,email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,userName,email,password);
    };
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        });
        return(()=>{
            return unsubscribe();
        })
    });
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;