import styles from "../../../style";
import { FaArrowLeft } from "react-icons/fa";
import {Menuswitch, } from '../index'



export function MenuItem({func, itemHeader, itemSubtext, list, buttonText, children, switcher, handleUpdate}) {
    return (
      <>
      <div className='sm:min-h-screen col-span-2'>
       <div onClick={func} className=' flex items-center gap-x-8 px-4  '>
           <a className={`${styles.SettingsIcon}  `} ><FaArrowLeft  /></a>
           <div className=''>
           <span className={styles.UiHeading}>{itemHeader}</span>
           </div>
       </div>
        <div className='py-2 px-2.5'>
        <p className={styles.UiSubHeading}>{itemSubtext}</p>
        </div>
        <>
        
        {
          list?.map((menuItem)=>{
            return(
              <a
          
          role="tab"
          aria-selected="false"
          data-testid="pivot"
          className="text-sm tap-transparent pointer-events-auto bg-transparent text-inherit font-inherit list-none  align-stretch border-0 box-border flex flex-col flex-shrink-0 mb-0 ml-0 mr-0 mt-0 min-w-0 relative z-0 pl-4 pr-4 pb-3 pt-3 transition duration-200 bg-none shadow-none outline-none cursor-pointer justify-between min-h-[48px]"
        >
          <div className="flex-shrink-0 flex-grow-1 flex min-w-0 min-h-0 p-0 m-0 relative z-0 align-center justify-between max-w-[500px]">
            <div class="select-none box-border flex flex-col items-stretch justify-start w-auto h-auto p-0 m-0 relative z-0 bg-transparent cursor-pointer text-inherit border-solid border-0 text-left whitespace-pre-wrap align-middle text-base font-normal leading-5 font-sans flex-grow flex-shrink" >
              <div
                dir="ltr"
                class="inline-block  font-normal text-base text-gray-900 leading-normal whitespace-pre-wrap break-words"
              >
                <span class={styles.SettingOption}>
                  {menuItem.itemHeader}
                </span>
              </div>
              <div
                dir="ltr"
                class="text-xs font-normal leading-4 text-blue-gray-600"
              >
                <span class={styles.SettingOptionSubtext}>
                  {menuItem.itemSubtext}
                </span>
              </div>
            </div>
            <a  class=" pt-4  pointer-events-auto font-inherit list-none text-align-inherit cursor-pointer -webkit-box-direction-normal inline-block fill-current h-5 max-w-full relative align-text-bottom select-none flex-shrink-0 text-blue-600 pl-3 sm:pl-8" >
            <>
            {menuItem.switch}
            </>
            </a>
          </div>
        </a>
            )
          })
        }
        </>
        <div className="px-4 sm:pr-12">{children}</div>
        {buttonText && 
        
        <div className='py-12 w-full flex justify-end px-4 max-w-md'>
          <button onClick={handleUpdate} className="btnAlt">
            {buttonText}
          </button>
        </div>
        }
        </div>
      </>
    );
  }