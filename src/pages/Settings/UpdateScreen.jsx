import {MenuButton,} from "./index"
import styles from "../../style"
import { FaArrowLeft } from "react-icons/fa"
import { SuccessMessage } from "./index"
import { useState, useEffect } from "react"

export default function UpdateScreen({func, succestext, header, updateText, placeholder, update, onChange, cleanupFunction}) {
 const [disabled, setdisabled] = useState(true)
  
 useEffect(() => {
 if(!update) return

 else if(update){
    setdisabled(false)
 }
   
 }, [update])
 

 function handleupdate() {
     if(!update) return
     SuccessMessage(`${succestext}`)
     cleanupFunction()
 }

    return(
        <>
        <div className='slide-in-right col-span-2'>
           <div>
           <div className=' flex items-center gap-x-8 px-4 '>
            <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
             <div>
             <span className={styles.UiHeading}>{header}</span>
             {/* <p>evilmorty052@proton.me</p> */}
             </div>
             </div>
               <div className='py-8 px-8 flex flex-col items-center'>
                  <input onChange={onChange} value={update} placeholder={placeholder} type="text" className={styles.Input}/> 
                  
                      
       <MenuButton disabled={disabled} onClick={handleupdate} buttonText={'Update'}/>
               </div>
           </div>
        </div>
        </>
      )
}
