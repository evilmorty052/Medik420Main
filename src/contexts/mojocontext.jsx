import React, {useState, createContext, useContext, useEffect} from "react";
import MojoAuth from "mojoauth-web-sdk"
import { client } from "../../lib/client";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({
    login: () => Promise,
    fetchuser: () => Promise,
    handleredirect: () => Promise,
});

export const getAuth = () => useContext(UserContext)



   export default function UserContextProvider({ children }) {
    const test = localStorage.getItem('san')
    const test2 = localStorage.getItem('user')
    const [userInfo, setUserInfo] = useState(JSON.parse(test));
    // const [userInfo, setUserInfo] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState(JSON.parse(test2));
    // const [user, setUser] = useState(JSON.parse(test2));
    // const getQuery = useQuery()
    
    
    const history = useNavigate()

    // useEffect(() => {
    //  if(!test){
    //     localStorage.setItem('san', JSON.stringify(0))&console.log('san changed');
    //  }
    //  if(!userInfo){
    //     setUserInfo([])&console.log('user info set')
    //  }
    //  if(test === JSON.stringify('undefined')){
    //     localStorage.setItem('san', JSON.stringify(0))&console.log('san changed');
    //  }
    //  if(userInfo.length > 0){
       
    //  }

    //  if(!test2){
    //     localStorage.setItem('user', JSON.stringify(1))&console.log('user changed');
    //  }
       
    //   }, [])
    


    // function login() {
    //         const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
    //             source:[{type:'email', feature:'otp'}],
    //         });
    //     mojoauth.signIn().then(payload => { 
    //     setUserInfo(payload)&document.getElementById("mojoauth-passwordless-form").remove() });
    //   }


    // function login() {
    //         const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
    //             source:[{type:'email', feature:'otp'}],
    //         });
    //     mojoauth.signIn().then(payload => { 
    //     localStorage.setItem('san', JSON.stringify(payload))&document.getElementById("mojoauth-passwordless-form").remove&setIsAuth(true)})
    //   }

    // function login() {
    //         const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
    //             source:[{type:'email', feature:'otp'}],
    //         });
    //     mojoauth.signIn().then(payload => { 
    //    setUserInfo(payload)&document.getElementById("mojoauth-passwordless-form").remove()&history('/welcome') })
    //   }




    // function fetchuser() {
    //     if(userInfo !== null){
    //         let query = 
    //         ` *[email == "${userInfo.user.identifier}"]
    //        `;
    //     //    client.fetch(query).then((data)=> (setUser(data)))
    //        client.fetch(query).then((data)=> (localStorage.setItem('user',JSON.stringify(data))))
       
    //     }
    //     else{
    //         console.log('user is null')
    //     }
    //   }
    
    // function fetchuser() {
    //     if(userInfo !== null || []){
    //         let query = 
    //         ` *[email == "${userInfo.user.identifier}"]
    //        `;
    //        client.fetch(query).then((data)=> (setUser(data)))
    //        client.fetch(query).then((data)=> (setUser(data)))
       
    //     }
    //     else{
    //         console.log('user is null')
    //     }
    //   }

      // function handleredirect () {
      //   if(user)
      //   setTimeout(()=>{
      //       if(user.length > 0){
      //        history('/dashboard')
      //       console.log(user)
      //       }
      //       else if(user.length < 1){
      //           history('/newuser')
      //       }
      //   }, 1000);
         
      // }
        
  

    const value = {
        userInfo,
        setUserInfo,
        isAuth,
        setIsAuth,
        login,
        user,
        test2,
        setUser,
        handleredirect,
        fetchuser
    
       }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
  }