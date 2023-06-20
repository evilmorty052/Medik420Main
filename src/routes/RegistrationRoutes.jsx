import { Route, Routes, useNavigate } from "react-router-dom"
import { RegisterInputs, AgeInputs, AddressInputs, PhoneInputs, Questions, Agreements, RiskCalculator, RegisterEmail, RegisterPassword, CreatingAccount,} from "../pages"
import { useState} from "react"
import { message } from "antd"
import { client } from "../../lib/client"


const RegistrationRoutes = () => {
  const navigate = useNavigate()

  class survey {
    constructor({interest,income, withdrawalFrequency,risk, location }){
      this.interests = interest,
      this.income = income,
      this.withdrawalFrequency = withdrawalFrequency,
      this.risk = risk
      this.location = location
    }
    saylocation(){
      console.log(this.risk)
    }
  }

  const custormerSurvey = new survey({interest: "could work", risk: "go getter"})
  custormerSurvey.saylocation()

  return (
    <>
    <Routes>  
       <Route path='/' element={<RegisterEmailPage/>} />
       <Route path='registerpassword' element={<RegisterPasswordPage/>} />
       <Route path='registername' element={<RegisterName/>} />
       <Route path='registerage' element={<RegisterAge/>} />
       <Route path='registeraddress' element={<RegisterAddress/>} />
       <Route path='registerphone' element={<RegisterPhone/>} />
       <Route path='registerinterests' element={<RegisterInterests/>} />  
       <Route path='registerexperience' element={<RegisterExperience/>} />  
       <Route path='registergrowth' element={<RegisterGrowth/>} />  
       <Route path='registeremployment' element={<RegisterEmployment/>} />  
       <Route path='registerincome' element={<RegisterIncome/>} />  
       <Route path='registernetworth' element={<RegisterNetworth/>} />  
       <Route path='registerwithdrawalfrequency' element={<RegisterWithdrawalFrequency/>} />  
       <Route path='registeragreements' element={<RegisterAgreements/>} />     
       <Route path='registerrisk' element={<RegisterRisk/>} />     
       <Route path='registeraccount' element={<AccountSetup/>} />     
    </Routes>
    </>
  )
}

function RegisterEmailPage(params) {
  const navigate = useNavigate()
  const [email, setemail] = useState('')

  const showmessage = () => {
    message.error('Please enter a valid email address to continue')
  }

  const existingmessage = () => {
    message.error('Email already exists please login instead.')
  }


 async function handleComplete(params) {
    // register(email)
    const emails = `*[_type == "users" && email == "${email}"]`
  //  const existinguser = await client.fetch(emails).then((data) => data)
     
  //   if (existinguser.length > 0) {
  //     console.log(existinguser)
  //     existingmessage()
  //     return
  //   }

    if (email && email.includes('@')) {
      localStorage.setItem('email', email)
      window.location.replace('/register/registerpassword')
    }

    else{
      showmessage()
    }
    
  }

  return(
    <>
    <RegisterEmail email={email} setemail={setemail} handleComplete={handleComplete}/>
    </>
  )
}

function RegisterPasswordPage(params) {
  const navigate = useNavigate()
  const [password, setpassword] = useState('')
  const [confirmpasswordvalue, setconfirmpasswordvalue] = useState('')

  const showmessage = () => {
    message.error('Passwords must match ')
  }

  const nopasswords = () => {
    message.error('Complete both fields')
  }
  const shortpasswords = () => {
    message.error('Passwords must be at least 8 characters long')
  }

  function handleComplete(params) {
    
    if (!password || !confirmpasswordvalue) {
      nopasswords()
      return
     }


    else if (password.length < 8) {
      shortpasswords()
     }

    else if (password == confirmpasswordvalue && password.length >= 8) {
       localStorage.setItem('password', password )
       window.location.replace('/register/registername')
     }

     
     else{
      showmessage()
     }
  }

  return(
    <>
    <RegisterPassword passwordvalue={password}
     setpasswordvalue={setpassword} 
     confirmpasswordvalue={confirmpasswordvalue}
     setconfirmpasswordvalue={setconfirmpasswordvalue}
     handleComplete={handleComplete}
     to={'/register'}/>
    </>
  )
}

function RegisterName(params) {
  const navigate = useNavigate()
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')

  const showmessage = () => {
    message.error('complete both fields')
  }

  function handleComplete(params) {
    if (firstname && lastname) {   
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('lastname', lastname)
      window.location.replace('/register/registerage')
    }

    else{
      showmessage()
    }

  }

  return(
    <>
    <RegisterInputs firstname={firstname} lastname={lastname} setfirstname={setfirstname} setlastname={setlastname} handleComplete={handleComplete} to={"/register/registerpassword"}/>
    </>
  )
}

function RegisterAge(params) {
  const navigate = useNavigate()

  const [checked, setchecked] = useState(false)

  const showmessage = () => {
    message.error('You must be over 18 to invest')
  }

  function handleComplete(params) {
    if (!checked) {
      showmessage()
      return
    }
    window.location.replace('/register/registerinterests')
  }

  return(
    <>
    <AgeInputs check={checked} setcheck={setchecked} handleComplete={handleComplete}/>
    </>
  )
}

function RegisterAddress(params) {

  const navigate = useNavigate()

  function handleComplete(params) {
    window.location.replace('/register/registerphone')
  }
  return(
    <>
    <AddressInputs back={() => navigate(-1)} handleComplete={handleComplete}/>
    </>
  )
}

function RegisterPhone(params) {
  const navigate = useNavigate()

  function handleComplete(params) {
    window.location.replace('/register/registerinterests')
  }

  return(
    <>
    <PhoneInputs back={() => navigate(-1)} handleComplete={handleComplete} />
    </>
  )
}

function RegisterInterests(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'Banking'
    },
    {
      answer:'Investment'
    },
    {
      answer:'Social'
    },
    {
      answer:'Just exploring'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registerexperience')} question={'How can we help you'} answers={answers}/>
    </>
  )
}

function RegisterExperience(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'I have no experience'
    },
    {
      answer:'I know a little about investing'
    },
    {
      answer:"I have adequate experience"
    },
    {
      answer:'I have extensive experience'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registergrowth')} question={'Do you have experience investing?'} answers={answers}/>
    </>
  )
}

function RegisterGrowth(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'Build better budgeting habits'
    },
    {
      answer:'Earn stock rewards'
    },
    {
      answer:"Save for the unexpected"
    },
    {
      answer:'Save for retirement'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registeremployment')} question={'What areas do you want to grow'} answers={answers}/>
    </>
  )
}

function RegisterEmployment(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'Employed full-time'
    },
    {
      answer:'Employed part-time'
    },
    {
      answer:'Student'
    },
    {
      answer:'Freelancer'
    },
    {
      answer:'Unemployed'
    },
    {
      answer:'Retired'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registerincome')} question={'What is your employment status ?'} answers={answers}/>
    </>
  )
}

function RegisterIncome(params) {
  const navigate = useNavigate()

  const answers = [
    // {
    //   answer:'Over $218k'
    // },
    // {
    //   answer:'$138k to $218k'
    // },
    {
      answer:'Over $100k'
    },
    {
      answer:'$50k to $100k'
    },
    {
      answer:'$25k to $50k'
    },
    {
      answer:'$7.5k to $25k'
    },
    {
      answer:'Under $7.5k'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registernetworth')} question={'What is your estimated pre-tax household income ?'} answers={answers}/>
    </>
  )
}

function RegisterNetworth(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'Under $5k'
    },
    {
      answer:'$5k to $25k'
    },
    {
      answer:'$25k to $50k'
    },
    {
      answer:'$50k to $100k'
    },
    {
      answer:'Over $100k'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registerwithdrawalfrequency')} question={'What is your estimated net-worth ?'} answers={answers}/>
    </>
  )
}

function RegisterWithdrawalFrequency(params) {
  const navigate = useNavigate()

  const answers = [
    {
      answer:'Daily'
    },
    {
      answer:'Monthly'
    },
    {
      answer:'Annualy'
    },
    {
      answer:'Anytime'
    },
  ]

  return(
    <>
    <Questions back={()=> navigate(-1)} func={() => window.location.replace('/register/registerrisk')} question={'How often do you intend to take out money ?'} answers={answers}/>
    </>
  )
}

function RegisterAgreements(params) {
  return(
    <Agreements/>
  )
}

function RegisterRisk(params) {
const navigate = useNavigate();

  function handleComplete(params) {
    window.location.replace('/register/registeraccount')
  };

  return(
    <RiskCalculator handleComplete={handleComplete}/>
  )
}

function AccountSetup(params) {
  return(
      <>
      <CreatingAccount/>
      </>
  )
}





export default RegistrationRoutes