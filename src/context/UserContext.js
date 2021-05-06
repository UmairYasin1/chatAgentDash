import React, {useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) =>{
  
    const [userlog, setUserLog] = useState(true)
   
    return(
        <UserContext.Provider value={[userlog,setUserLog]}>
         {props.children}
        </UserContext.Provider>
    )
}