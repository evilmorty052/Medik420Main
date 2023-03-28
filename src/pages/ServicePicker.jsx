import {useState} from 'react'
import RadioGroups from '../components/radiogroup'
import { useNavigate } from 'react-router-dom'

const ServicePicker = () => {
const history = useNavigate()
    const plans = [
        {
          name: 'CUSTOMER'
        },
        {
          name: 'INVESTMENT AGENT',
        },
        // {
        //   name: 'SMALL BUSINESS ASSISTANCE'
        // },
      ]

     
     function func(selected) {
     console.log(selected)
     switch (selected.name) {
        case 'CUSTOMER':
        history('/register/registerpage2')
            break;
        case 'INVESTMENT AGENT':
        console.log('case 2') 
            break;
        default:
            break;
     }
        
      }

  return (
    <div className='flex min-h-screen font-poppins bg-plat  '>
         <div className='container mx-auto py-4 flex flex-col items-center '>
          <div className='my-10 px-4'>
            <h3 className='text-center font-bold uppercase text-2xl lg:text-4xl'>Pick A Sign Up Option</h3>
            <p className='text-center'>Please Pick your preffered Option To Continue Signing Up.</p>
          </div>
         <RadioGroups options={plans} func={func} show></RadioGroups>
         </div>
    </div>
  )
}

export default ServicePicker