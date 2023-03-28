import {Avatar, Tag} from 'antd'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { urlFor, client } from '../../../../lib/client'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import AgentList from '../../../partials/dashboard/Card'
import { useQuery } from '@tanstack/react-query'

const AgentGrid = ({list,headline }) => {
    
    let email = localStorage.getItem('email')
    let query = `*[email == "${email}"]` 
    const {isloading, data: user } = useQuery(['like'], () => client.fetch(query) ) 
    let userid = user && user[0]._id
    let likedagents = user && user[0].liked?.map((item)=>{
      return {
        _ref: item._ref
      }
    })
    console.log(likedagents)

    const sort = (id)=>{
      likedagents.map((item)=>{
        let sorter;
       return  item.ref == id ? true : false
        
      })
    }

   
    // const like =(id)=> {

    //  return(
    //   client.patch(userid)
    //   .append('liked', [{id}])
    //   .commit().then((res)=>{console.log(res)})
    //  )
    //   }

    
      
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

      if (!user){
        return(
          <p>...loading</p>
        )
      }
       
  return (
    <div>
        <section>
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8   font-poppins">
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-center lg:self-start lg:py-20 lg:space-y-10 ">
        <h2 class="text-3xl font-bold sm:text-4xl">{headline}</h2>

        <p class="mt-4 text-gray-600 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          class="mt-8 inline-flex items-center rounded border border-white bg-green-300 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/get-started"
        >
          <span class="text-sm font-medium"> Follow All </span>
        </a>

      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:grid-flow-row ">
        
   { list?.map((agent)=>{
     let liked
     likedagents?.map((item)=> {
   
      switch (item._ref) {
        case agent._id:
        liked = true
          break;
      
        default:
          false;
      }
      return liked
     })
   
    return(
<>
{ <AgentList avatar={urlFor(agent.avatar)} name={agent.name} bio={agent.bio} to={`/agentprofile/${agent._id}`} specialties={agent.specialties} phrase={agent.phrase} id={agent._id} it={liked}  />}

</>

    )
    
   })  }
 
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AgentGrid


{/* <Link
          class="block rounded-xl border bg-gray-800 relative border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
           key={item._id}
           to={`/agentprofile/${item._id}`}
        >
          <span class="inline-block rounded-lg">
          <Avatar src={`${urlFor(item.avatar)}`} size='large' />
          </span>

          <h2 class="my-2 font-bold text-white uppercase">{item.name}</h2>

          <p class=" flex flex-wrap gap-y-2  sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            {item.specialties.map((item)=>{
                
                return(
                    <>
                    <span className=''><Tag color={color(item)}>{item}</Tag></span>
                    </>
                )
            })}
          </p>
   
          <div className='absolute bottom-0 right-5'>
          <motion.span whileTap={{ scale: 4.0 }} onClick={()=>{liked == true? setLiked(false) : setLiked(true)}} className={liked? 'text-2xl text-red-600 ': 'text-red-300 text-xl'}><FaHeart/></motion.span>
          </div>
          
          
    </Link> */}