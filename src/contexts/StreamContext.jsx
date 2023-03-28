import React, { createContext } from 'react';
import { useClient } from '../hooks/useClient';

const StreamContext = createContext();
const username = localStorage.getItem('firstname')


const userdetails = {
  id: `${username}`,
  name: `${username}`,
  image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9',
  friend: `${'ahmad16'}`
}

export function StreamProvider({ apiKey, userData, children }) {
const chatClient = useClient({ apiKey: 'qp2hh3efxb2p', userData: userdetails,});


  return (
    <StreamContext.Provider value={{ chatClient }}>
      {children}
    </StreamContext.Provider>
  );
}

export default StreamContext;
