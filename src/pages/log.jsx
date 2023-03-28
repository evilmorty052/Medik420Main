import React from 'react'
import { getAuth } from '../contexts/mojocontext'
import { Spin } from 'antd'
import { useEffect } from 'react'
// import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import MojoAuth from "mojoauth-web-sdk"
import { useState } from 'react'
import { client } from '../../lib/client'
import {useQuery} from '@tanstack/react-query'
import { Button, Result } from 'antd'
import Loader from '../components/Loader'

export const mojoauth = new MojoAuth("test-872efdab-6b61-418c-a0a6-5bc689a06f4d",{
  source:[{type:'email', feature:'otp'}]
   });


function log () {
const history = useNavigate()
const getQuery = useQuery
const {login, fetchuser, handleredirect, userInfo,  } = getAuth()
const [payload, setPayload] = useState(null)
const [isAuth, setIsAuth] = useState(false)
const [currentuser, setcurrentuser] = useState(null)
const userId = payload?.user.identifier
const [test , setTest] =useState()



useEffect(() => {
	const mojoauth = new MojoAuth("test-872efdab-6b61-418c-a0a6-5bc689a06f4d",{
       source:[{type:'email', feature:'otp'}]
        });

	mojoauth.signIn().then(payload => {
	    setPayload(payload)
      setIsAuth(true)
	    // document.getElementById("mojoauth-passwordless-form").remove();
	})
}, [])





let query = isAuth? ` *[email == "${userId}" ]
    `:`*[email == "newman@icloud.com" ]`;




// const { data: user } = getQuery(['userlist'], () => setquery,{enabled: !!userId,})
// ;

const navigate = () =>{
  if (currentuser) {
    localStorage.setItem('firstname', currentuser.firstname)
    setTimeout(() => {
      window.location.replace('/dashboard')
    }, 4000)
  }
}

async function setuser (email) {
  const query = `*[_type == 'users' && email == "${email}"]`
  const user = await client.fetch(query).then(res => res[0])
  setcurrentuser(user)
}



useEffect(() => {

  if(isAuth){
 localStorage.setItem('email', userId)
 
//  setTimeout(() => {
//    history('/dashboard')
//  }, 3000);
  }


}, [isAuth])

useEffect(() => {
  if (isAuth) {
    setuser(userId)
  }
   
  
}, [isAuth])


useEffect(() => {
  if (currentuser) {
    localStorage.setItem('firstname', currentuser.firstname)
    navigate()
  }

  
}, [currentuser])



if(isAuth){
  
  return(
    <>
    <Result
    status="success"
    title="Logged In Successfully!"
    subTitle="You Will Be Redirected To Your Dashboard Shortly"
  />
    </>
  )
}



  return (
    <>
    {/* <div className={isAuth?'absolute inset-0 min-h-screen bg-plat items-center flex flex-col justify-center z-50' :'hidden'}>
        <div>
             <div className="flex items-center gap-3">

             <h1 
            onClick={()=>{user && user.length < 1 ? history('/newuser'):history('/dashboard') }}
            className='text-4xl font-poppins uppercase  jello-horizontal hover:cursor-pointer' >Continue 
           </h1>
       
           </div>
           
        </div>
        
    </div> */}
    <div id={ "mojoauth-passwordless-form" } />
    </>
  )
}

export default log