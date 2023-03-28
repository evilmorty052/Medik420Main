import { Slider, InputNumber} from 'antd';
import { useState } from 'react';

function MenuSlider ({}) {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue);
      };
    return(
        <>
        <div className='flex justify-between items-center'>
        <div className=' min-w-[70%]'>
       <Slider
          min={5}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
        </div>
        <div className='pb-4'>
        <div className='bg-blue-200  w-20 h-10 p-2 flex justify-center items-center rounded-2xl shadow-inner'>
         <span>{inputValue}</span>
        </div>
        </div>
        </div>
        
    
        </>
    )
}

export default MenuSlider