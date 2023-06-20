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

    return (
      <>
        <div className=" col-span-2">
          <div>
            <div className=" flex items-center gap-x-8 px-4 ">
              <a className={styles.SettingsIcon}>
                <FaArrowLeft onClick={func} />
              </a>
              <div>
                <span className={"text-xl font-semibold text-blk"}>
                  {header}
                </span>
                {/* <p>evilmorty052@proton.me</p> */}
              </div>
            </div>
            <div className="py-8 px-8 flex flex-col items-center">
              <input
                onChange={onChange}
                value={update}
                placeholder={placeholder}
                type="text"
                className={'border-l-0 border-r-0 border-b border-t-0 border-slate-700  focus:ring-0 w-full placeholder:text-xl placeholder:font-semibold '}
              />

              {/* <MenuButton disabled={disabled} onClick={handleupdate} buttonText={'Update'}/> */}
              <div className="py-8 w-full">
                <button onClick={handleupdate} className="btnAlt">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
