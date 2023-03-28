import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';

// Create a new context object
export const UserContext = React.createContext();

// Create a new component that will wrap your app and provide the user context
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const person  = {
    name: 'yoyo',
    balance: '2000'
  }




  useEffect(() => {

async function fetchuser(username) {
  const query = `*[_type == 'users' && email == "${username}"]`
  const user = await client.fetch(query).then(res => res[0]).then(res => console.log(res))
  setUser(user)
}
    // Fetch the username from local storage
    const username = localStorage.getItem('email');
      // If the username exists, set the user state accordingly
     fetchuser(username)
  }, []);

  // Return the UserContext provider with the user state and setUser function as the value
  return (
    <UserContext.Provider value={{ user, setUser, person }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
