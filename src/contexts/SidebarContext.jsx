import { useState, createContext } from "react";

export const SidebarContext = createContext()


export default function SidebarProvider({children}) {
    const [expanded, setexpanded] = useState(false)

    const toggleSidebar = () => {
        setexpanded(!expanded)
    }

       
    return(
        <SidebarContext.Provider value={{expanded, toggleSidebar, setexpanded}}>
         {children}
        </SidebarContext.Provider>
    )
}