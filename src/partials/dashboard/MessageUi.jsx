import ChatProvider, {chatClient} from "../../../lib/stream";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect, useContext} from "react";
import { client } from "../../../lib/client";
import StreamContext from "../../contexts/StreamContext";
import ScaleLoader from "react-spinners/ScaleLoader";



const username = localStorage.getItem('firstname')

const MessageUi = () => {
const [user, setuser] = useState(null)
const [userid, setuserid] = useState(null)

const { chatClient } = useContext(StreamContext);

const userdetails = {
    id: `${username}`,
    name: `${username}`,
    image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9'
}

// const createchannel = useCreateChannel({userData: userdetails})

async function fetchuser(params) {
  const emailID = localStorage.getItem('email')
  const query = `*[_type == "users" && email == "${emailID}"]{firstname, _id,}`
  const users = await client.fetch(query).then(res => res[0]) 
  const {firstname, _id} = users
  setuserid(_id),
  setuser(firstname)
  
}

async function createchannel(params) {

  const channel = chatClient.channel('messaging', {
    members: ['9d8252d-c04a-4dea-80ab-44ad64812b07', 'joey'],
  });
  await channel.create()
}




useEffect(() => {
  fetchuser()
}, [])
const emailID = localStorage.getItem('firstname')
const filters = { type: 'messaging', members: { $in: [`${username}`] } };

if(!user){
    return(
  <>
      <div className="flex h-screen justify-center items-center pb-20">
      <span>
       <ScaleLoader
        width={30}
        color={'#00c4ee'}/>
    </span>
    </div>
  </>
    )
}  



const sort = { last_message_at: -1 };

return (
 <ChatProvider user={userdetails} filters={filters}/>
);
}

export default MessageUi