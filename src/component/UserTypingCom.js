import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketProvider';
const UserTypingCom = ({customer_ID}) => {
  // const [curr, dispatch] = useReducer(reducer, customer_ID);
    const [socket] = useContext(SocketContext);
    const [typer,setTyper] = useState([]);
   
    useEffect(()=>{
          socket.on('typingResponse-saboor', function(data) {
            setTyper(prev => [...prev,data])
          });
          socket.on('typingClearResponse', function(visitorId) {
            setTyper("")
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    
return(
    (typer === '' || null) ? false :
    <>
    
 {typer.filter(item => item.visitId === customer_ID.id).map(item=>(
  <div className="userTyping">
   <p>Customer Typing :{item.messageVal}</p>
   </div>
 )
  
  
)}
    
    </>
)
}

export default UserTypingCom;