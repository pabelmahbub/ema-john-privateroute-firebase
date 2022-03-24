
import { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';



initializeAuthentication();

const useFirebase =()=>{
    const [user,setUser] = useState({});

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle=()=>{
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                console.log(result.user);
            })
    }

    const logOut=()=>{
            signOut(auth)
            .then(() => {
                setUser({});
            });
            }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
          });
     
    }, [])
    

    return {user,signInUsingGoogle,logOut}
    
}
export default useFirebase;