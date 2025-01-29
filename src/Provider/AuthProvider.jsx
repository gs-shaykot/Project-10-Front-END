// what's the problem with the onAuthStateChanged it's not showing user even if i log in
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {    
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInGoogle=()=>{
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const LogOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoader(false)
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.log("No user signed in");
            }
        });

        return () => { unsubscribe() };
    }, []);

    const authInfo = {
        user,
        loader,
        setUser,
        setLoader,
        createUser,
        logInUser,
        LogOut,
        logInGoogle,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;