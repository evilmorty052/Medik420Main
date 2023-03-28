import { StreamChat } from 'stream-chat'
import { useState, useEffect } from "react";

export const useCreateChannel = ({ userData}) => {
  const [chatClient, setChatClient] = useState(null);

  async function createchannel(params) {

    const channel = chatClient.channel('messaging', {
      members: ['9d8252d-c04a-4dea-80ab-44ad64812b07', 'joey'],
    });
    await channel.create()
  }

  useEffect(() => {
    const client = new StreamChat("qp2hh3efxb2p");
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false;

    // Fetch the token from the server
    fetch(`https://rainy-plastic-acai.glitch.me/token?userId=${userData?.id}`)
      .then(response => response.json())
      .then(data => {
        const { token } = data;

        // Use the token to authenticate the user
        const connectionPromise = client.connectUser(
          {
            id: userData?.id,
            name: userData?.name,
            image: userData?.image
          },
          token
        ).then(() => {
          if (!didUserConnectInterrupt) setChatClient(client);
        }).then((res)=> {
             chatClient && createchannel()
        });

        return () => {
          didUserConnectInterrupt = true;
          setChatClient(null);
          // wait for connection to finish before initiating closing sequence
          connectionPromise
            .then(() => client.disconnectUser())
            .then(() => {
              console.log('connection closed');
            });
        };
      })
      .catch(error => console.log(error));
  }, [userData]);

  return chatClient;
};
