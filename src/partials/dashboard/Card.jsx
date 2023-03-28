import { Tag } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { client } from "../../../lib/client";
import { useQuery } from "@tanstack/react-query";

const agentList = ({bio,name,description,avatar,to, specialties, phrase,  id, it }) => {
  const [mounted, setmounted] = useState(null)
  let email = localStorage.getItem('email')
  let query = `*[email == "${email}"]` 
  const {isloading, refetch, data: user } = useQuery(['like'], () => client.fetch(query) )
  let userid = user && user[0]._id 


  
let likes = it
const [liked, setLiked] = useState(likes)
  
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
    //  res && likesup()
    })
     )
  }

  return ( 
    <>

 <motion.div  initial={{ opacity: 0, scale: 0.1 }}  animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
 <div className='shadow-3xl font-poppins relative max-w-sm'>
  <article class="rounded-xl border border-gray-700 bg-gray-800 p-4 ">
<div class="flex items-center">
<Link to={to}>
<img
alt="Developer"
src={avatar}
class="h-16 w-16 rounded-full object-cover"
/>
</Link>


<div class="ml-3"><h5 class="text-lg font-medium text-white">{name}</h5>


<div class="flow-root">
  {/* <ul class="-m-1 flex flex-wrap">
    
  {specialties && specialties.map((specialty)=>{
    return(
      <>
      <li class="p-1 leading-none">
      <Tag></Tag><a href="#" class="text-xs font-medium text-gray-300"> {specialty} </a>
    </li>
      </>
    )
  })  }

 
  </ul> */}
<span className="text-white text-sm">{phrase}</span>
</div>
</div>
</div>

<ul class="mt-4 space-y-2">
{/* <li>
<a
  href="#"
  class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
>
  <h5 class="font-medium text-white">Weekly Recommendation</h5>

  <p class="mt-1 text-xs font-medium text-gray-300">
   {description}
  </p>
</a>
</li> */}

<li>
<a
  href="#"
  class="block rounded-lg border border-gray-700 p-4 hover:border-pink-600 h-40 w-full"
>
  <h5  class="font-medium text-white">{name}</h5>

  <p class="mt-1 text-xs font-medium text-gray-300">
   {bio}
  </p>
</a>
</li>
</ul>
<div className='w-full flex justify-center mt-2'>
<div className='flex  w-[80%] justify-between items-center '>
<Link to={to}>
<span className='text-white font-poppins font-medium'>View Profile</span>
</Link>

<motion.span whileTap={{ scale: 4.0 }} onClick={()=>{
  liked == true? setLiked(false) : setLiked(true)
  !liked && like()
 }} 
className={liked? 'text-2xl text-red-600 ': 'text-red-300 text-xl'}><FaHeart/>
</motion.span>
</div>
</div>

</article>

</div>
</motion.div>


   
  
    </>
   );
}
 
export default agentList;