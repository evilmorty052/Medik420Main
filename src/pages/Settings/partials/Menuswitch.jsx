// import { Switch  } from 'antd';
import { Switch } from '@headlessui/react'
import { useState } from 'react'
// const onChange = (checked) => {
//   console.log(`switch to ${checked}`);
// };
// const Menuswitch = ({checked, onClick}) => <Switch checked={checked} onClick={onClick}   onChange={onChange} />;


export const MenuCheckBox = ({disabled, checked, setChecked, defaultValue}) =>{
  return(
    <>
    <input checked={checked ? checked : ""} value={checked} onChange={()=> {setChecked(!checked)&console.log(checked)}} disabled={disabled} className={`${"disabled:border-gray-200 cursor-not-allowed"} rounded-md border-gray-400  focus:border-green-300`} type="checkbox" />
    </>
  )
}







export function Menuswitch({enabled, setEnabled}) {
  // const [enabled, setEnabled] = useState(false)

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-green-700' : 'bg-gray-700'}
          relative inline-flex h-[20px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default Menuswitch;