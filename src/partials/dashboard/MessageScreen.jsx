
import { client, urlFor } from '../../../lib/client'
import React, {useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { people01 } from '../../assets'
import useFetch from '../../hooks/useFetch'
import ChatProvider from '../../../lib/stream'





const MessageScreen = ({}) => {
const navigate = useNavigate()
const [showchatScreen, setshowchatScreen] = useState(false)
const [activechat, setactivechat] = useState()
const [userid, setuserid] = useState(5)
const [messages, setmessages] = useState(null)
const [loading, setloading] = useState(true)
const [chatrooms, setchatrooms] = useState()
const [contacts, setcontacts] = useState()



// let query = `*[email == "${emailID}"] {chats}`
// let query = `*[_type == 'chatrooms' && references("1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237")]{messages, participants[]-> {_id}}`
// const chatlist = useFetch(query, 'kolo')

async function fetchmessages() {
    const emailID = localStorage.getItem('email')
     const docquery = `*[_type == 'users' && email == "${emailID}"]{_id}`
     const docid = await client.fetch(docquery).then((res) => res[0]._id)
     const chatroomquery = `*[_type == 'chatrooms' && references("${docid}")]{'chatrooms': {messages[]{message, sender -> {_id}}, participants[]->{_id, avatar, firstname}}}`
     const chatrooms = await client.fetch(chatroomquery).then((res) => res[0].chatrooms)
     const {participants, messages} = chatrooms
     const user = participants.filter((user)=>{
       return user._id == docid
     })
     
     const contacts = participants.filter((user)=>{
       return user._id != docid
     })

     const otherusers= contacts.map((contact)=>{
        const incomingmessages = messages.map((message)=>{
            return message

        })
        return{
           firstname: contact.firstname,
           avatar:    contact.avatar,
           id:       contact._id,
           messages: incomingmessages,
        }
     })
    
     setcontacts(otherusers)
     setchatrooms(chatrooms)
     setmessages(messages)
     setuserid(docid)
    //  console.log(otherusers)
    // const setmessage = (res) => {
    //     setmessages(res)
    //     console.log(res)
    // }

    // let query = `*[_type == 'chatrooms' && references('1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237')]{messages[]{message, sender -> {email, avatar, _id}}}` 
    // const chatrooms =  client.fetch(query).then((res)=>{
    //   res &&  setmessage()
    //   res && console.log(messages)
    //   res && setloading(false)
    // })

}


// chats && console.log(chats)

useEffect(() => {
// useCreateUser()
  fetchmessages()
   
}, [])


const participants = chatrooms?.participants?.map((participant)=>{
 return(
    {...participant}
 )
})





function handleChat(params) {
  setactivechat()  
}

const Chat = ({useravatar, contact, func}) => {
    return(
        <li onClick={func} class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={useravatar} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {contact}
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-sm font-semibold text-blue-400 ">
                        open
                    </div>
                </div>
                     </li>
    )
}

const ChatScreen = ({activechat}) => {




const [newmessage, setnewmessage] = useState('')

const messagebucket = activechat?.messages?.map((message)=>{
    return{
        message
    }
})
const [roomMessages, setroomMessages] = useState(messagebucket)


async function handleSend(e) {
    e.preventDefault()
    activechat.messages.push({
        message: newmessage,
        id: userid
    })

    localStorage.setItem('key',JSON.stringify({
        message: newmessage,
        id: userid
    }))
    setnewmessage('')

    
}

// console.log(activechat)
    return(
        <>
        <ul className='bg-slate-300 h-screen relative pt-10 '>
            <div className='flex container max-w-2xl mx-auto h-[92%] overflow-scroll flex-col space-y-8 px-2 pb-10'>
                {activechat.messages?.map((message)=>{
                    return(
                        <>
                        <li className={message?.sender?._id != userid? 'p-2 min-w-[30%] w-[60%] bg-red-300' : 'p-2 w-[60%] min-w-[30%] bg-green-300 self-end text-right'}>
                            {message.message}
                        </li>
                        </>
                    )
                })}
            </div>
            <div className='fixed w-full bottom-0 flex'>
                <input  value={newmessage} onChange={(e)=> setnewmessage(e.target.value)} type="text" className='flex-1' />
                <button onClick={handleSend}>send</button>
            </div>
        </ul>
        </>
    )
}

if(!contacts){
    return(
        <h3>....</h3>
    )
}

    const Chatlist = () => {
    return(
        <div class="w-full pt-6 max-w-md p-4 bg-white border border-gray-200 rounded-b-lg shadow sm:p-8  ">
    <div class="flex items-center justify-center border-b pb-4 mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 text-center ">Chats</h5>
   </div>
  {
   <div class="flow-root transition-all duration-500">
        <ul role="list" class="divide-y divide-gray-200 ">
            { contacts?.map((user)=>{
                return(
                    <>
                    <Chat func={()=> {
                        setactivechat(user)
                        navigate('chat')
                        
                    }} 
                         contact={user.firstname} useravatar={urlFor(user.avatar)} />
                    </>
                )
            })}

            
            
        </ul>
   </div>}
</div>
    )
}




  return (
    <div className=' bg-white'>
         {/* <div className='p-2 bg-white flex justify-center'><p>Chats</p> </div> */}
         <div>
            {/* <ChatProvider/> */}
        <Routes>
        
            {/* <Route path='/' element={<Chatlist/>}/>
            <Route path='/chat' element={<ChatScreen activechat={activechat}/>}/> */}
        </Routes>

         </div>
    </div>
  )
}

export default MessageScreen