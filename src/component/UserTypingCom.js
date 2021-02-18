import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketProvider';
const UserTypingCom = () => {
    const [socket] = useContext(SocketContext);
    const [typer,setTyper] = useState('')
    useEffect(()=>{
        socket.on('typingResponse', function(message) {
          setTyper(message)
    
          });
          socket.on('typingClearResponse', function(message) {
            setTyper("")
          });
    })
return(
    (typer === '' || null) ? false :
    <div className="userTyping">
        
        <p>Customer Typing : {typer}</p>
    </div>

)
}

export default UserTypingCom;