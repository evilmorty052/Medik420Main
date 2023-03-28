import React , {useState}from 'react'
import Dynamicnav from '../partials/Dynamicnav'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import {Select} from 'antd'
import Radiogroup from '../components/radiogroup'
import styles from '../style'


const Longform = () => {
const [choosing, setchoosing] = useState(true)
const history = useNavigate()
const [address, setaddress] = useState('')
const [address2, setaddress2] = useState('')
const [state, setstate] = useState('')
const [city, setcity] = useState('')
const [zip, setzip] = useState('')
const [fullmenu, setfullmenu] = useState(true)
const [autofill, setautofill] = useState(null)

function handleSubmit(e) {
     e.preventDefault()
    if(!address || !state || !city || !zip ){
     message.error('Please Fillout All Fields Marked As Required')
    }
    
    else{
        localStorage.setItem("address", address)
   address2  && localStorage.setItem("address2", address2)
        localStorage.setItem("state", state)
        localStorage.setItem("city", city)
        localStorage.setItem("zip", city)
        history('/setpin')

    }
}

function seek(params) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b53656c636msh7f1b82d33b1f3a2p129a1fjsn30c3e6c25735',
      'X-RapidAPI-Host': 'autocomplete-usa.p.rapidapi.com'
    }
  };
  
  fetch(`https://autocomplete-usa.p.rapidapi.com/marketplace/autocomplete/usa/addresses/${address}`, options)
    .then(response => response.json())
    .then((response) => {
      response.Result && setautofill(response.Result)
      console.log(autofill)
    })
    .catch(err => console.error(err));
}

// function handlechange(e) {
//   setaddress(e.target.value)
//   e.target.value.length > 5 && seek()
//   if(e.target.value.length >= 6){
//     seek()
//     return
//   }

//   else if(e.target.value.length >= 12){
//     seek()
//     return
//   }
// }

const Rest = ()=>{
  return(
    <>
     <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700">
              Address Line 2
            </label>

            <input
             value={address2}
             onChange={(e)=>setaddress2(e.target.value)}
              type="email"
              id="Email"
              name="email"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              class="block text-sm font-medium text-gray-700"
            >
              State
            </label>

            <input
             value={state}
             onChange={(e)=>setstate(e.target.value)}
              type="text"
              id="FirstName"
              name="first_name"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="LastName"
              class="block text-sm font-medium text-gray-700"
            >
              City
            </label>

            <input
             value={city}
             onChange={(e)=>setcity(e.target.value)}
              type="text"
              id="LastName"
              name="last_name"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          <div class="col-span-6 sm:col-span-3">
            <label
              for="Zip"
              class="block text-sm font-medium text-gray-700"
            >
              Zip
            </label>

            <input
             value={zip}
             onChange={(e)=>setzip(e.target.value)}
              type="text"
              id="Zip"
              name="Zip"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

    </>
  )
}

    const plans = [
        {
          name: 'UNITED STATES'
        },
        {
          name: 'OTHER REGIONS',
        },
        // {
        //   name: 'SMALL BUSINESS ASSISTANCE'
        // },
      ]

     
     function func(selected) {
     console.log(selected)
     switch (selected.name) {
        case 'UNITED STATES':
        setchoosing(false)&setfullmenu(false)
            break;
        case 'OTHER REGIONS':
          setchoosing(false)&setfullmenu(true)
            break;
        default:
            break;
     }
        
      }

if(choosing){
  return(
    <>
    <div className='flex bg-plat'>
    <div className='h-screen container mx-auto flex flex-col gap-y-10 justify-center items-center  pb-40'>
      <div className='px-5'>
      <h3 className={`${styles.heading2} text-blk sm:text-center`}>Do You Live In USA ?</h3>
       <p className={`${styles.paragraph} sm:text-center sm:px-20`}> Some Of Our Services Are Currently only Availaible Within The United States, We use This Information to set Up your account according to services avilable in your Region</p>
      </div>
    <Radiogroup show options={plans} func={func}/>
    </div>
    </div>
    
 
    </>
  )
}

  return (
    <div className='pb-10 lg:pb-0'>
<section class="bg-white">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <a class="block text-green-300" href="/">
          <span class="sr-only">Home</span>
          <svg
            class="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <h1
          class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl uppercase"
        >
          Welcome to Medik 420
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500">
         { !fullmenu ? "Please Enter A Valid United States Address" : 
         
         'Please Enter Your Full Address To Continue Signing Up'}
        </p>

        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
<>

</>
          <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>

          { !fullmenu ? 
          <>
         <div className='w-full'>
          
        </div> <Example/> 
          </>:
          <>
           <div class="col-span-6">
            
            <input
              type="text"
              value={address}
              onChange={(e)=>{
            setaddress(e.target.value)
            }}
              id="firstname"
              name="firstname"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          </>
          }
          
          </div>
        {fullmenu && <Rest/>}

        <div class="col-span-6">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span class="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div class="col-span-6">
            <p class="text-sm text-gray-500">
              By clicking confirm, you agree to our
              <a href="#" class="text-gray-700 underline mx-1">
                terms and conditions
              </a>
              and
              <a href="#" class="text-gray-700 underline mx-1">privacy policy</a>.
            </p>
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button onClick={handleSubmit}
              class="inline-block shrink-0 rounded-md border border-white bg-green-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

    </div>
  )
}

export default Longform


import { Fragment, } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [

]

export function Example() {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  const [autofill, setautofill] = useState(null)
  const [address, setaddress] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

        function seek(params) {
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b53656c636msh7f1b82d33b1f3a2p129a1fjsn30c3e6c25735',
              'X-RapidAPI-Host': 'autocomplete-usa.p.rapidapi.com'
            }
          };
          
          fetch(`https://autocomplete-usa.p.rapidapi.com/marketplace/autocomplete/usa/addresses/${address}`, options)
            .then(response => response.json())
            .then((response) => {
              response.Result && setautofill(response.Result)
              setTimeout(() => {
                console.log(response)
              }, 3000);
            })
            .catch(err => console.error(err));
        }
        
        function handlechange(e) {
         setaddress(e.target.value)
          if(address.length >= 6){
            seek()
            return
          }
        
          else if(address.length >= 12){
            seek()
            return
          }
        }

  return (
    <div className="w-72">
      <Combobox value={address} onChange={handlechange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(address) => address }
              onChange={handlechange}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                autofill?.map((address) => (
                  <Combobox.Option
                    onClick={()=>{setaddress(address)}}
                    key={address}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={address}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {address}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
