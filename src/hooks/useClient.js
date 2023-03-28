import { StreamChat } from 'stream-chat'
import { useState, useEffect } from "react";

export const useClient = ({ apiKey, userData }) => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const client = new StreamChat(apiKey);
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false;

    // Fetch the token from the server
    fetch(`https://rainy-plastic-acai.glitch.me/token?userId=${userData.id}`)
      .then(response => response.json())
      .then(data => {
        const { token } = data;

        // Use the token to authenticate the user
        const connectionPromise = client.connectUser(
          {
            id: userData.id,
            name: userData.name,
            image: userData.image
          },
          token
        ).then(() => {
          if (!didUserConnectInterrupt) setChatClient(client);
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
  }, [apiKey, userData]);

  return chatClient;
};
