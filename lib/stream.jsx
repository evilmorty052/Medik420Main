import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window, useChatContext } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import {useClient} from '../src/hooks/useClient'
import { useCreateChannel } from '../src/hooks/useCreateChannel';
import { useState, useEffect } from 'react';
import { ChannelInner } from '../src/partials/dashboard/components';
import { GiphyContextProvider } from '../src/partials/dashboard/context';
import Header from '../src/partials/Header';
import {MessagingChannelHeader} from '../src/partials/dashboard/components';



const userId = localStorage.getItem('firstname')
const apikey = 'qp2hh3efxb2p'

export const chatClient = StreamChat.getInstance('qp2hh3efxb2p', {
  timeout: 6000,
});

// const user = {
//   id: `${userId}`,
//   name: 'quiet-night-9',
//   image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9',
// };

export function NewChannelButton ({user}) {
  const chatClient = useClient({ apiKey: 'qp2hh3efxb2p', userData: user,});
  async function createchannel(params) {
    
    const channel = chatClient.channel('messaging', {
      members: [`${user.id}`,`${user.friend}`],
    });
    await channel.create()
  
  
  }

  if (!chatClient) {
    return <h3>....</h3>
  }

  return(
     <button onClick={()=>{createchannel()}} className="bg-blue-300 shadow-xl hover:bg-blue-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
     {'View Host'}
   </button>
  )

}

export async function createchannel({user}) {
  const chatClient = useClient({ apiKey: 'qp2hh3efxb2p', userData: user,});
  const channel = chatClient.channel('messaging', {
    members: [`${user.id}`,'letsgemboys'],
  });
  await channel.create()


}

const sort = { last_message_at: -1 };

const ChatProvider = ({user, filters}) => {
const chatClient = useClient({ apiKey: 'qp2hh3efxb2p', userData: user,});
const [hidden, sethidden] = useState(false)
const [chatting, setchatting] = useState(false)


  
    if (!chatClient) {
      return <LoadingIndicator />;
    }
    
    if(!chatClient){
      return(
        <h3>.....</h3>
      )
    }

   function handleChannelClick(){
    sethidden(true)
    setchatting(true)
   }

   function handleback(params) {
    setchatting(false)
    sethidden(false)
   }
  
    return (
      <>
    
       <Chat   client={chatClient}  theme='str-chat__theme-dark'>  
         { !hidden && 
         <>
         <Header func={()=> window.location.replace('/dashboard')} halfmenu={true}/>
         <div onClick={handleChannelClick} className='flex min-h-screen '>
         <div className='flex-1 pt-10 bg-black'>
         <ChannelList  filters={filters} sort={sort} />
         </div>
         </div>
         </>
         
         } 
        { chatting && 
        <>
          <div className='flex min-h-screen'>
         <div className='flex-1'>
         <Channel>
          <Window hideOnThread={true}>
            {/* <ChannelHeader /> */}
            <MessagingChannelHeader back={handleback}/>
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
         </div>
          </div>
        </>
        }
       
      </Chat>    
        </>
    );
  };
  
  





// const client = new StreamChat(apikey);



// Example usage:


  export default ChatProvider