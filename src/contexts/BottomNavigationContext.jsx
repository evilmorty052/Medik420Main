import {createContext, useState, useContext, useEffect} from "react"
import {BottomNavigation2} from "../partials/dashboard"
import {useLocation} from "react-router-dom"


export const BottomNavigationContext = createContext();

export const UseBottomNavigationContext = () => {
    return useContext(BottomNavigationContext)
}

const BottomNavigationProvider = ({ children }) => {
    const [invisible, setInvisible] = useState(false);
    const path = useLocation().pathname
  
    

    useEffect(()=>{
        setInvisible(false)
    },[path])


  
    return (
      <BottomNavigationContext.Provider value={{ invisible, setInvisible }}>
        {children}
        <BottomNavigation2 invisible={invisible} setinvisible={setInvisible}/>
      </BottomNavigationContext.Provider>
    );
  };

  export default BottomNavigationProvider