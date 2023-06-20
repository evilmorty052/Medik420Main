import {createContext, useState, useContext, useLayoutEffect} from 'react'

const UserContext = createContext();

export const UseUserContext = () => useContext(UserContext)

const UserContextProvider = ({children}) => {
const [name, setname] = useState('')
const [loggedIn, setLoggedIn] = useState(false)

const handleUser = () => {
   const loggedinCookie = localStorage.getItem('logincookie')
   console.log(loggedinCookie)
   if(loggedinCookie){
     setLoggedIn(true)
   }

   else{
     setLoggedIn(false)
   }

   
}

useLayoutEffect(() => {
   return () => {
     handleUser()
   }
}, [])

 return(
    <UserContext.Provider value={{name, setname, loggedIn}}> 
     {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider