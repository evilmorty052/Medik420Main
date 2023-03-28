import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button, message, Steps } from 'antd';
import styles from '../../style';

const AgentEnlist = () => {
const path = useLocation().pathname

let view

switch (path) {
    case '/enlist':
     view = <DefaultPage/>    
        break;

    default:
        <DefaultPage/>;
}

  return (
    <div>
     {view}
    </div>
  )
}

export default AgentEnlist


function DefaultPage(params) {
    


    return(
        <>
        <div className='container flex flex-col  mx-auto py-10'>
        <div className='px-4'>
            <h3 className={`${styles.heading2} text-black`}>Welcome</h3>
            <p className={`${styles.paragraph} uppercase`}>Thanks for choosing  Medik 420 please complete each step to continue</p>
        </div>
         <div className={`${styles.boxWidth} my-5 p-4`}>
         </div>
      <div className={`${styles.boxWidth}container mx-auto border border-rose-300 flex `}>
        <div className={``}>
        <First/>
        </div>
      </div>
        </div>
      
        </>
    )
}


function First(params) {
    return(
        <>


<div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Qualifications</h1>

    <p class="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
      eaque error neque ipsa culpa autem, at itaque nostrum!
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
    

    <div class="flex items-center justify-between">
      

      <button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </div>
  </form>
</div>

        </>
    )
}