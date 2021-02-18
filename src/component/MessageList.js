import React, { useState,useContext, useEffect,useRef } from 'react';
import { MessageContext } from '../context/MessageContext';
//  import { SocketContext } from '../context/SocketProvider';

const MessageList = ({customer_ID,visits,socket,setMess,mess}) => {
const [messages,Messagedispatch] = useContext(MessageContext);
const messagesEndRef = useRef(null)
const serverURL = "http://10.1.30.146:5001";

  console.log(messages,"shhhhhhh")

  var obj = JSON.parse(localStorage.getItem('user'));

  const scrollToBottom = () => {
    console.log(visits,"visisisiis")
  if (customer_ID )   messagesEndRef.current.scrollIntoView({block:'start',behavior:"smooth"});
  console.log("hey",customer_ID,'45')
  }


  useEffect(scrollToBottom, [messages]);
  useEffect(()=>{

    Messagedispatch({
      type: "set-to-empty",
     payload : []
    });
    // socket && socket.removeAllListeners("chat-msg");
    console.log(customer_ID,"bdasdasdasdadad")
  
    socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name});
    setMess(true);
    return ()=>
    {
      setMess(false)
      // socket.on("chat-msg")
    }
  },[mess])
 
return(
<div>

                         
                         <div class="TicketComments">
 
 <ul >
 
 {/* {messages.sort((a, b) => a.repcreatedOn - b.repcreatedOn).reverse().map(item => ( */}
  {messages.sort((a,b) => new Date(b.repcreatedOn) < new Date(a.repcreatedOn) ? 1 : -1).map(item => (
    <>

      {(() => {
        var today;
        var time;
        if (item.repmsgFrom === customer_ID.id) {
         
         today = new Date(item.repcreatedOn);
          // time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
         time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
          function timeTo12HrFormat(time)
{   // Take a time in 24 hour format and format it in 12 hour format

    var time_part_array = time.split(":");
    var ampm = 'AM';

    if (time_part_array[0] >= 12) {
        ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
        time_part_array[0] = time_part_array[0] - 12;
    }
    time_part_array[1] = (time_part_array[1] < 10)?("0"+time_part_array[1]):time_part_array[1]

    var formatted_time = time_part_array[0] === '0' ? 12 +":"+ time_part_array[1]  + ' ' + ampm : time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;

    return formatted_time;
}
          return (
            <li class="OtherUser">
            <div class="userImgAndChat">
                <div class="userImg">
                    <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" class="img-responsive" alt="-" />
                </div>
           
                <div class="userChat">
                    <p> {item.repmsg}
                    {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
                    </p>
                </div>
         
                
                <div class="dateTime">{timeTo12HrFormat(time)}</div>
                
            </div>

        </li>
         
            
            //   <li  class="sent" key={item.msgId} >
            //   <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
            //             <span class="timeStamp">{timeTo12HrFormat(time)}</span>
            //   <p> 
            //     {item.repmsg}
                
            //     {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
            //   </p>
            // </li>
          )
        } else if (item.repmsgFrom === obj.data.agent_id) {

           today = new Date(item.repcreatedOn);
           time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
           
           function timeTo12HrFormat(time)
{   // Take a time in 24 hour format and format it in 12 hour format

    var time_part_array = time.split(":");
    var ampm = 'AM';

    if (time_part_array[0] >= 12) {
        ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
        time_part_array[0] = time_part_array[0] - 12;
    }
  time_part_array[1] = (time_part_array[1] < 10)?("0"+time_part_array[1]):time_part_array[1]
    var formatted_time = time_part_array[0] === '0' ? 12 +":" + time_part_array[1] + ' ' + ampm : time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;

    return formatted_time;
}

          
          return (
            <li>
            <div class="userImgAndChat">
                <div class="userImg">
                    <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" class="img-responsive" alt="-" />
                </div>
   
                <div class="userChat">
                    <p> {item.repmsg}
                    {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
                    </p>
                </div>
    
                <div class="dateTime">{timeTo12HrFormat(time)}</div>
                
            </div>
    
        </li>
          //   <li class="replies">
          //   <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          //             <span class="timeStamp">{timeTo12HrFormat(time)}</span>
          //   <p> 
          //       {item.repmsg}
                
          //       {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
          //     </p>
          // </li>
          )
        }
      

       
      })()}
  
    </>

 ))}
 
 
 <li ref={messagesEndRef} > </li>
</ul>

</div >

</div>



        )
    }


export default MessageList;