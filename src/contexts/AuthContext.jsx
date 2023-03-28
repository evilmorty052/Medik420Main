import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'



import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendSignInLinkToEmail,
  confirmPasswordReset,
} from 'firebase/auth'



const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  sendSignInLink: () =>Promise,

})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
// const  check = localStorage.getItem('san')
// const state = JSON.parse(check)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])
// useEffect(() => {
//   if(state === null){
//     const token = localStorage.setItem('san', 0)
//     return
//   }
// if(state.authenticated)
// {setCurrentUser(state.authenticated)}
//   return () => {
//     console.log(state)
//   }
// }, [state])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function sendSignInLink (email, ) {
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {{
      console.log(error.message)
     
    }
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  }
  // sendSignInLinkToEmail(auth, email, actionCodeSettings)
  // .then(() => {
  //   The link was successfully sent. Inform the user.
  //   Save the email locally so you don't need to ask the user for it again
  //   if they open the link on the same device.
  //   window.localStorage.setItem('emailForSignIn', email);
  //   ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   ...
  // });
  
  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    sendSignInLink,
    resetPassword,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}