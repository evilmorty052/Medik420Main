
import { client } from "../../lib/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const confirminfo = () => {
  const history = useNavigate()
  const sanityuser1 = localStorage.getItem('sanityuser1');
  const sanityuser2 = localStorage.getItem('sanityuser2');
  const sanityuser3 = localStorage.getItem('sanityuser3');
  const token = localStorage.getItem('pin');
  const person1 = JSON.parse(sanityuser1);
  const person2 = JSON.parse(sanityuser2);
  const person3 = JSON.parse(sanityuser3);
  const pin = JSON.parse(token);

  const person =  Object.assign({}, person1, person2, person3, token);
  const config = client.config()
  console.log(config)

  // const doc = {
  //   _type: "users",
  //   lastname:`"${person.lastname}"`,
  //   password :`"${person.password}"`,
  //   email :`"${person.email}"`,
  //   firstname :`"${person.firstname}"`,
  //   service :`"${person.service}"`,
  //   region :`"${person.region}"`,
  //   demo :`"${person.wantdemo}"`,
  //   investment: 0,
  //   earnings: 0,
  //   plan:"inactive"

  // }
  const doc = { 
                  _type: "users",
                  lastname:`${person.lastname}`,
                  password :`${person.password}`,
                  email :`${person.email}`,
                  firstname :`${person.firstname}`,
                  service :`${person.service}`,
                  region :`${person.region}`,
                  phone :`${person.phone}`,
                  demo :`${person.wantdemo}`,
                  pin :`${pin}`,
                  investment: 0,
                  earnings: 0,
                  plan:"Inactive"

  }

  const [user, setUser] = useState(null)

  const query = 
    ` *[email match "${person.email}"]
`;

  const handlesubmit = async () =>{
   
     await client.create(doc).then((res)=>{console.log(person)}).then(client.fetch(query)).then((res)=>{setUser(res)}).finally(()=>{localStorage.setItem('sanityuser', JSON.stringify(user));})
     history('/')
  }

    return ( 
    //     <Layout>
    //   <div className="bg-white h-full flex flex-col py-5 mt-20 justify-center">
    //     <div className=" space-y-5 flex flex-col bg-red-300 justify-center">
    //     <h4 className="text-center text-2xl ">Confirm your info</h4>
    //     <h4 className="text-center text-2xl">{person.firstname}</h4>
    //     <h4 className="text-center text-2xl">{person.lastname}</h4>
    //     <h4 className="text-center text-2xl">{person.age}</h4>
    //     <h4 className="text-center text-2xl">{person.plan}</h4>
    //     <h4 className="text-center text-2xl">{person.wantdemo}</h4>
    //     </div>
    //   </div>
    //     </Layout>
                <>
                <div className="">

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-plat py-6 sm:py-12 px-5  ">
  {/* <img src={beams} alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative rounded-3xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 justify-center flex flex-col text-gray-600">
          <p className="text-center text-2xl uppercase">{`looking good ${person.firstname}?`}</p>
          <ul class="space-y-4 justify-center">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`FIRSTNAME: `}<span className="text-base uppercase font bold">{`${person.firstname}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`LASTNAME: `}<span className="text-base uppercase font bold">{`${person.lastname}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`EMAIL: `}<span className="text-base uppercase font bold">{`${person.email}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`PIN: `}<span className="text-base uppercase font bold">{`${pin}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`PHONE: `}<span className="text-base uppercase font bold">{`${person.phone}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`SERVICE: `}<span className="text-base uppercase font bold">{`${person.service}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`PLAN: `}<span className="text-base uppercase font bold">{`${person.plan}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`REGION: `}<span className="text-base uppercase font bold">{`${person.region}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                    {`DEMO: `}<span className="text-base uppercase font bold">{`${person.wantdemo}`}</span>
                {/* <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file */}
              </p>
            </li>
          </ul>
        </div>
        <div class="pt-8 text-base  leading-7 flex space-x-10 ">
          <p class="text-sky-500 hover:text-sky-600" onClick={()=>{history('/register/registerpage3')}}>make adjustments</p>
          <p>
            <button href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600" onClick={()=>{handlesubmit()}}>Get Started &rarr;</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
                </>
       
     );
}
 
export default confirminfo;


