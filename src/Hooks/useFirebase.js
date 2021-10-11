import {useState, useEffect} from 'react'
import { getAuth, signInWithPopup,onAuthStateChanged,signOut, GoogleAuthProvider } from "firebase/auth";
import initialAuthrentication from './../firebase/firebaseInit';



initialAuthrentication();
const useFirebase =()=>{
  const [user, setUser]=   useState({});
  const [error, setError]=   useState('');

  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = ()=>{
      signInWithPopup(auth, googleProvider).then(result=> {
          const user =result.user;
          console.log(user);
            setUser(user)
      }).catch(error =>{
        const  errorMessage = error.message
        setError(errorMessage)
      })
 
    }
    const logOut =()=>{
      signOut(auth).then(()=>{
        setUser({})
      })

    }
    useEffect(() => {
      onAuthStateChanged(auth, user =>{
        if(user){
          console.log( "Inside State Change",user);
          setUser(user)
        }
      })
    }, [])
  return {
     user, error,
      signInUsingGoogle,
      logOut,
  }
}

export default useFirebase;