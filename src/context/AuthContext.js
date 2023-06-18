import React, { createContext, useContext, useState } from 'react'
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import { auth } from '../config/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   
    const [user, setUser] = useState({});
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };


    return (
        <AuthContext.Provider value={{ googleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext)  
}

