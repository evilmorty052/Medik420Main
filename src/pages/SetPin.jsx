
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt, FaPhone, FaArrowRight, FaArrowDown, FaClipboard } from 'react-icons/fa'
import { client } from '../../lib/client'
import RadioGroups from '../components/radiogroup'

// import OpenAccount from '../components/OpenAccount'

export default function Setpin(params) {
  const [openaccount, setopenaccount] = useState(true)
  if(!openaccount){
    return(
      <SetUserPin/>
    )
  }

  else{
    return(
      <OpenAccount/>
    )
  }
  function SetUserPin ()  {
  
    
    const [copied, setcopied] = useState(false)
    const history = useNavigate()
    const { signInWithGoogle, register } = useAuth()
    const [pin, setPin] = useState('')
    const [copy, setCopy] = useState(pin)
    const [isSubmitting, setIsSubmitting] = useState(false)
  
    const emailid = localStorage.getItem('email')
    let firstname = localStorage.getItem('firstname')
    let lastname = localStorage.getItem('lastname')
    let phone = localStorage.getItem('phone')
    let password = localStorage.getItem('password')
    const [err, seterr] = useState(false)
    const [errmsg, seterrmsg] = useState('')
  
  const touched = ()=>{
    if(pin.length > 3){
      seterr(true)
      seterrmsg('pin must not be more than 4 digits')
    }
  
    else{seterr(false)}
  }
  function getnumber(rando) {
    
    let number = `${rando + Date.now() }`
  
     return(
    number
     )
     
   }
    const person = {
      firstname: firstname,
      lastname: lastname,
      pin: Number(pin),
      password: password,
      phone: 0,
      email: emailid,
      service: 'investment',
      region :'north america',
    }
    let account = localStorage.getItem('account')
    const doc = { 
      _type: "users",
      _id:  person.firstname + person.lastname  , 
      lastname:`${person.lastname}`,
      password :person.password,
      email :`${person.email}`,
      witheld: 0,
      firstname :`${person.firstname}`,
      phone :0,
      demo: true,
      plan: 'INACTIVE',
      pin : person.pin,
      investment: 0.00,
      earnings: [0],
      transactions: [{sendername:'MEDIK 420', amount: 100, type: 'Received', status: 'Confirmed', _key: getnumber('879999999')}],
      notifications:[{title: 'Welcome To MEDIK420', message:'Your Bonus Has Been Credited to your Account', _key: getnumber('879999999')}],
      accounts:[{type: 'Personal', balance: '100', number: getnumber('1200000'), _key: getnumber('879999999')}, {type: 'Investment', balance: '0', number: getnumber('787777888'), _key: getnumber('89898989') }, {type: account, balance: '0', number: getnumber('787777888'), _key: getnumber('87766771243434') }]
  
  }
  
    useEffect(() => {
      setTimeout(()=>{
        if(copied){
        setcopied(false)
        }
      }, 1000)
     
    }, [copied])
  
    const handlesubmit = (e)=>{
      
      e.preventDefault()
      localStorage.setItem('id' , person.firstname + person.lastname)
      let id = localStorage.getItem('id')
      client.create(doc)
      .then(res=>{
        console.log(res)
        res && history('/welcome')
      })
    }
  
   
  
    if(openaccount){
      return(
        <OpenAccount />
      )
    }
  
  
    return (
      <div className=' container flex  min-h-screen mx-auto font-poppins '>
  
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  
      
      
    <div class="mx-auto max-w-lg text-center flex flex-col">
          <h1 class="text-2xl font-bold sm:text-3xl uppercase">Pick a 4 Digit Pin</h1>
  
          <p class="mt-4 text-gray-500 text-center">
          Your pin is used for withdrawals and Verification. You would have to verify manually with customer service to set a new one.
          </p>
          <div className='self-center flex flex-col gap-4'>
              {/* {pin && <p className='self-center text-xl'>click pin to copy</p>}
              {pin && <i className='self-center'><FaArrowDown/></i>} */}
              <p className={ copied ?'text-2xl copy text-black uppercase mt-5' : 'hidden'}>copied!</p>
          </div>
          
    </div>
  
    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" 
       onSubmit={handlesubmit}     >
  
      <div
       data-clipboard-action="copy" data-clipboard-target="#input" 
       className='w-full justify-center items-center flex copy  -300 rounded-3xl'
      onClick={()=>setcopied(true)}>
     
          <div className={pin ?'flex max-w-[100px] gap-4 items-center justify-center  py-2 px-5' : ''}>
              <h3 className='text-4xl tracking-widest' id='input'>{pin}</h3>
              {/* {pin &&<i className='text-2xl text-yellow-300'><FaClipboard/></i>} */}
          </div>
      </div>
              <div className=' my-4 py-4  flex flex-col items-center'>
                     <input type="number" className='rounded-full text-center lett tracking-widest outline-hidden focus:outline-hidden' minLength='4' maxLength='4' value={pin} 
                     onChange={(e)=>{
                      touched()
                      setPin(e.target.value)}}
                       required={'required'}
                        title='Pin must be at least 4 numbers from 0-9'
                        inputMode='numeric'  />
                        <div className='my-4'>
                        {err && <Alert message={errmsg} type={'error'}/>}   
                        </div>
                     
              </div>
  
      {/* <Input placeholder={'Pin'}  type={'password'} value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
      {/* <Input placeholder={'Confirm Password'} icon={<FaRegEye/>} type={'password'}/> */}
  
    
  
      
  
      <div class="flex items-center justify-between mt-4">
        {/* <p class="text-sm text-gray-500">
          No account?
          <a class="underline" href="">Sign up</a>
        </p> */}
  
  <button
          //  onClick={()=>{handlesubmit()}}
          type="submit"
          class="ml-3 inline-block rounded-lg bg-green-300 px-5 py-3 text-sm font-medium text-white"
        >
          Confirm
        </button>
  
       
      </div>
    </form>
  </div>
  
      </div>
    )
  }
  
 
  
  
  function OpenAccount (){
  
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
  let account = localStorage.getItem('account')
     
  function func(selected) {
        console.log(selected)
        switch (selected.name) {
           case 'CUSTODIAL ACCOUNT':
        localStorage.setItem('account', 'Custodial')&setopenaccount(false)
           
            
          
               break;
           case 'RETIREMENT ACCOUNT':
            localStorage.setItem('account', 'Retirement')&setopenaccount(false)
               break;
           default:
               break;
        }
           
         }
      
  return (
    <div className='flex min-h-screen bg-plat font-poppins max-w-7xl'>
         {/* <Dynamicnav/> */}
        <div className='w-full mt-20'>
                <div className='mb-10 px-4 sm:px-8'>
                    <h3 className='text-center text-xl  font-bold  uppercase'>Set Up Additional Accounts?</h3>
                    <p className='text-center text-sm'>You Can Always Set Up New  Accounts<br className='hidden sm:block'/> Anytime From The Profile Settings Page</p>
                </div>
                <div>
                     <RadioGroups options={plans} show show2 func={func}  />
                </div>
        </div>
    </div>
  )
  }
}


