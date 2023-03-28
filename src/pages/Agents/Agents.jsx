import React from 'react'
import { client, urlFor } from '../../../lib/client'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../components/Loader'
import AgentList from '../../partials/dashboard/Card'
import Dynamicnav from '../../partials/Dynamicnav'
import Agenthero from './components/Agenthero'
import AgentGrid from './components/AgentGrid'
import {Avatar} from 'antd'
import { Route, Routes } from 'react-router-dom'
const Agents = () => {
const trend = `*[_type == 'agents' && trending]`
const topagents = `*[_type == 'agents' && top]`
const spotlightagents = `*[_type == 'agents' && spotlight]`
const {data: trending} = useQuery(['trending'], () => client.fetch(trend))
const {data: top} = useQuery(['top'], () => client.fetch(topagents))
const {data: spotlight} = useQuery(['spotlight'], () => client.fetch(spotlightagents))

function like(params) {
let email = localStorage.getItem('email')
let query = `*[email == "${email}"]` 
const {isloading, data:user } = useQuery(['like'], () => client.fetch(query).then((res)=>{
    console.log(res)
}) ) 


}

// let agent = agents && agents.map((agent)=>{
//     return{
    
//       name: agent.name,
//       bio: agent.bio,
//       likes: agent.likes,
//       avatar: agent.avatar,
//       specialties: agent.specialties,
//       followers: agent.followers
      
      
//     }
// })

console.log(trending)

if(!trending || !top || !spotlight){
    return(
        <Loader/>
    )
}

return (
    <div className='min-h-screen font-poppins bg-plat'>
        <Dynamicnav/>
        <div className='py-10'>
        <Agenthero/>
        {/* <div className='grid grid-cols-1 gap-y-5 '>
            <div className='mx-auto '>
            <h3 className='text-4xl sm:text-center my-3'>Trending Agents</h3>
             <div className='grid sm:gap-x-10 sm:grid-cols-2 sm:grid-flow-row gap-y-3 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8'>
             {
                trending.map((agent)=>{
                    return(
                       <>
                       <div key={agent._id} className='px-4 lg:px-2 '>
                            <AgentList avatar={urlFor(agent.avatar)} name={agent.name} bio={agent.bio} to={`/agentprofile/${agent._id}`} specialties={agent.specialties} />
                       </div>
                       </>
                    )
                })
            }
             </div>
           
            </div>
            <div className='mx-auto '>
            <h3 className='text-4xl sm:text-center my-3'>Top Agents</h3>
                <div>
                        <div className='grid sm:grid-cols-2 sm:grid-flow-row gap-y-3 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-8'>
                        {
                            top.map((agent)=>{
                                return(
                                <>
                                <div key={agent._id} className='px-4 lg:px-2 '>
                                        <AgentList avatar={urlFor(agent.avatar)} name={agent.name} bio={agent.bio} to={`/agentprofile/${agent._id}`} specialties={agent.specialties} />
                                </div>
                                </>
                                )
                            })
                        }
                        </div>
                </div>
            
           
            </div>
            <div className='mx-auto '>
            <h3 className='text-4xl sm:text-center my-3'>Weekly Spotlight</h3>
             <div className='grid sm:grid-cols-2 sm:grid-flow-row gap-y-3 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-8'>
             {
                spotlight.map((agent)=>{
                    return(
                       <>
                       <div key={agent._id} className='px-4 lg:px-2 '>
                            <AgentList avatar={urlFor(agent.avatar)} name={agent.name} bio={agent.bio} to={`/agentprofile/${agent._id}`} specialties={agent.specialties} />
                       </div>
                       </>
                    )
                })
            }
             </div>
           
            </div>
          
          
        </div> */}
        <div className='space-y-4'>
      
        <AgentGrid list={top} headline='Cream of The Crop'/> 
        <AgentGrid list={spotlight} headline='Spotlight Agents'/>
        <AgentGrid list={trending} headline='Meet The Trending'/> 
        {/* <Routes path='/agents/*'>
            <Route path='messages' element={  <AgentGrid list={trending} headline='Meet The Trending'/>}/>
        </Routes> */}
        </div>
        </div>
        
    </div>
  )
}

export default Agents