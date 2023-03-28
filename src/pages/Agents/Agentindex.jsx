import React, {useState} from 'react'
import { FaDotCircle, FaHeart, FaPercentage, FaPhone, FaStar, FaTrophy, FaUserAstronaut, FaUserFriends } from 'react-icons/fa'
import { Badge } from 'antd'
import {Tag, Avatar }from 'antd'
import { motion } from 'framer-motion'
import {client} from '../../../lib/client'
import { useQuery } from '@tanstack/react-query'

const Agentindex = ({phrase, bio, followers, profit, specialties, contact,likes, online, rank, avatar, id}) => {
 const [liko, setlikes] = useState(likes)
 const [lock, setlock] = useState(false)
 let email = localStorage.getItem('email')
 let query = `*[email == "${email}"]` 
 const {isloading, refetch, data: user } = useQuery(['like'], () => client.fetch(query) )
 let userid = user && user[0]._id 

 const likesup = ()=> {
  return(
    client.patch(id)
    .inc({likes: 1})
    .commit({autoGenerateArrayKeys: true,}).then((res)=>{
    console.log(res)
   })
   )
}

 const like = ()=> {
  return(
    client.patch(userid)
    .append('liked', [{_ref: id, _type: 'reference' } ])
    .commit({autoGenerateArrayKeys: true,}).then((res)=>{
    console.log(res)
   res && likesup()})
   )
}
 
 let liked = localStorage.getItem('liked')
 console.log(liked)

 function handeliked() {
   if(!liked){
    !lock && setlikes(liko + 1)
    like()
    setlock(true )
   }
 }

let color = (specialty)=>{
  if(specialty == 'CBD'){
    return(
        'lime'
    )
  }
  else if(specialty == 'Forex'){
    return(
        'geekblue'
    )
  }
  else if(specialty == 'STOCKS'){
    return(
        'cyan'
    )
  }
  else if(specialty == 'CRYPTO'){
    return(
        'volcano'
    )
  }
}

if(isloading){
  return (
    <span>...loading</span>
  )
}
 
 
    return (
    <div>
       <section class="bg-inherit text-black">
  <div class="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
        <div className='flex justify-center'>
            <Avatar src={`${avatar}`} size={120}/>
        </div>
      <h2 class="text-3xl font-bold sm:text-4xl">
        {phrase}
      </h2>
      <div className='my-3 flex justify-center items-center'>
      
       <span className='flex items-center gap-x-2 uppercase'>{online? 'Online' : 'Offline'}<span className={online? 'text-green-400' : 'text-red-300'}><FaDotCircle/></span></span>
        
      </div>
      
      <p class="mt-4  text-black text-xl">
       {bio}
      </p>
      <div class="mt-3 text-center">
      <a
        href="#"
        class="mt-8 inline-flex items-center rounded border  bg-green-300 px-8 py-3 text-black hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
      >
        <span class="text-sm font-medium"> Follow</span>
      </a>
    </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block bg-white rounded-xl border border-green-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      
      >
     <span className='text-4xl text-yellow-200'><FaTrophy/></span>

        <h2 class="mt-4 text-xl font-bold text-black">Rank</h2>

        <p class="mt-1 text-2xl  text-black">
       { `#${rank}`}
        </p>
      </a>

      <a
        class="block bg-white rounded-xl border border-green-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
      <span className='text-4xl text-blue-400'><FaUserFriends/></span>

        <h2 class="mt-4 text-xl font-bold text-black">Followers</h2>

        <p class="mt-1 text-2xl  text-black">
          {followers}
        </p>
      </a>

      <motion.a initial={{scale: 1}} whileTap={{ scale: 1.5 }}
        class="block bg-white rounded-xl border border-green-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      
      >
    <motion.span initial={{scale: 1}} animate={{ scale: 4.5 }}
    onClick={handeliked} 
    className={!lock ?'text-4xl text-red-300' :'text-4xl text-rose-600'}><FaHeart/>
    </motion.span>

        <h2 class="mt-4 text-xl font-bold text-black">Likes</h2>

        <p class="mt-1 text-2xl  text-black">
       {liko}
        </p>
      </motion.a>

      <a
        class="block bg-white rounded-xl border border-green-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
 
      >
    <span className='text-4xl text-green-400'><FaPercentage/></span>

        <h2 class="mt-4 text-xl font-bold text-black">Win Rate</h2>

        <p class="mt-1 text-2xl  text-black">
         {`${profit}%`}
        </p>
      </a>

      <a
        class="block bg-white rounded-xl border border-green-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

      >
     <span className='text-4xl text-yellow-400'><FaStar/></span>

        <h2 class="mt-4 text-xl font-bold text-black">Specialties</h2>

        <p class="my-3 text-sm  text-black">
         {specialties && specialties.map((specialty)=>{
            return(
                <span className=''>
                     <Tag 
                     color={color(specialty)} 
                    >
                    <span className='text-xl'>{specialty}</span>
                    </Tag>
                </span>
            )
         })}
        </p>
      </a>

      <a
        class="block bg-gray-300 rounded-xl border  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

      >
   <span className='text-4xl text-blue-400'><FaPhone/></span>

        <h2 class="mt-4 text-xl font-bold text-black">Contact</h2>

        <p class="mt-1 text-sm  text-black">
           {contact}
        </p>
      </a>
    </div>

  
  </div>
</section>


    </div>
  )
}

export default Agentindex