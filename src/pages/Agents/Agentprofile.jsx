import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { client, urlFor } from '../../../lib/client'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../components/Loader'
import AgentList from '../../partials/dashboard/Card'
import { Avatar } from 'antd'
import Smallcard from '../../components/smallcard'
import Agentindex from './Agentindex'
import test from '../../assets/airbnb.png'
import Dynamicnav from '../../partials/Dynamicnav'


const Agentprofile = () => {
    let id = useParams()
    console.log(id.agentid)
    const query = `*[_type == 'agents' && _id == '${id.agentid}']`
    const {data: agent} = useQuery(['agent'], () => client.fetch(query))
    // console.log(agent)

    let testagent = [
        {
            name: 'shee',
            likes: '400',
            followers: '800',
            bio: 'we don write bio we go use am , and e be like say the width of the page get to do with this bio so',
            avatar: test,
            _id: '838383838',
            specialties: ['crypto', 'cbd', 'stocks']

            
        }
    ]
        
    

    if(!agent){
        return(
            <Loader/>
        )
    }
  return (
    <div className='min-h-screen bg-plat relative'>
        <Dynamicnav/>
        <div className='flex flex-col '>
            <div className=' flex  border border-rose-700 w-full mt-12 py-4'>
                        {agent.map((agent)=>{
                            return(
                                <>
                                 <div className='container mx-auto'>
                                            <Agentindex 
                                            key={agent._key}
                                            bio={agent.bio}
                                            phrase={agent.name}
                                            followers={agent.followers}
                                            likes={agent.likes}
                                            specialties={agent.specialties}
                                            profit={agent.profit}
                                            online={agent.active}
                                            rank={agent.rank}
                                            avatar ={urlFor(agent.avatar)}
                                            id = {agent._id}/>
                                 </div>
                                </>
                            )
                        })}
                </div>
    
            </div>
        </div>
  )
}

export default Agentprofile