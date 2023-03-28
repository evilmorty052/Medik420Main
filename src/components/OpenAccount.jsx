import React from 'react'
import Dynamicnav from '../partials/Dynamicnav'
import RadioGroups from './radiogroup'


const OpenAccount = ({account}) => {

    const plans = [
        {
          name: 'CUSTODIAL ACCOUNT'
        },
        {
          name: 'RETIREMENT ACCOUNT',
        },
        // {
        //   name: 'SMALL BUSINESS ASSISTANCE'
        // },
      ]
account = localStorage.getItem('account')
      function func(selected) {
        console.log(selected)
        switch (selected.name) {
           case 'CUSTODIAL ACCOUNT':
           localStorage.setItem('account', selected.name)
               break;
           case 'RETIREMENT ACCOUNT':
            localStorage.setItem('account', selected.name)
               break;
           default:
               break;
        }
           
         }
      
  return (
    <div className='flex min-h-screen bg-plat font-poppins max-w-7xl'>
         <Dynamicnav/>
        <div className='w-full mt-20'>
                <div className='mb-10 px-4 sm:px-8'>
                    <h3 className='text-center text-xl  font-bold  uppercase'>Set Up Additional Accounts?</h3>
                    <p className='text-center text-sm'>You Can Always Set Up New  Accounts<br className='hidden sm:block'/> Anytime From The Profile Settings Page</p>
                </div>
                <div>
                     <RadioGroups options={plans} show show2/>
                </div>
        </div>
    </div>
  )
}

export default OpenAccount