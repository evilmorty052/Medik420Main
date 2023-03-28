import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { signInWithPhoneNumber, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import {getFirestore, doc, collection, getDocs, addDoc, onSnapshot, query, where, setDoc} from 'firebase/firestore'
import React,{ useState} from 'react'
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   apiKey: 'AIzaSyAF4G7EWZ7iwj9PNfxYtIzo3P0zQ0G4CeQ',
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID,
// }

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APP_API_KEY,
  apiKey: 'AIzaSyBZZ5-u5Z9F-Ks_KsgqgW5LSvIihBwDFvo',
  authDomain: 'sideproject-50aa3.firebaseapp.com',
  projectId: 'sideproject-50aa3',
  storageBucket: 'sideproject-50aa3.appspot.com',
  messagingSenderId: '111602191243',
  appId: '1:111602191243:web:91c80631e08476e01cfd8e',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore()
const colRef = collection(db, 'users')
let users = []

export function fetch() {
// const [data, setdata] = useState(null)
  return(
    getDocs(q)
    .then((snapshot)=>{
    setdata(snapshot.docs)
    console.log(data)
    users = snapshot.docs.map((doc)=>{
        return{
          ...doc.data()
        }
    
      })
      // snapshot.docs.forEach((doc)=>{
      //   data.push({...doc.data(), id: doc.id})
        
      // })
      
    }).catch((err)=>console.log(err))
  )
}
let id = localStorage.getItem('id') 
let q = query(colRef, where('id', '==', `${id}`))
//real time collection

export async function getuser() {

  return(
    onSnapshot(q, (snapshot)=>{
      let list =[]
      snapshot.docs.forEach((doc)=>{
       list.push({...doc.data()})
          
          
         })
         console.log(list)  
       })
  )


 
}








// export const newuser = (id)=>{

//   return(
//     setDoc(colRef, {
//       name: 'added',
//       id: id
//     }).then((res)=>{
   
//     }, 'hhhhh')
    
//   )
// } 
export const newuser = async(id)=>{

  return(
    await setDoc(doc(db, "users", 'ikikikkkl'), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      id: id
    })
    
  )
} 

export const auth = getAuth(app)





