import React, {useContext, useEffect,useRef } from 'react';
import { MessageContext } from '../context/MessageContext';
//  import { SocketContext } from '../context/SocketProvider';

const MessageList = ({customer_ID,visits,socket,setMess,mess}) => {
const [messages,Messagedispatch] = useContext(MessageContext);
const messagesEndRef = useRef(null)
const serverURL = "http://10.1.30.146:5002";

 console.log(messages,"messages12312312")

  var obj = JSON.parse(localStorage.getItem('user'));

  const scrollToBottom = () => {
 
  if (customer_ID )   messagesEndRef.current.scrollIntoView({block:'start',behavior:"smooth"});

  }


  useEffect(scrollToBottom, [messages]);
  useEffect(()=>{
    // console.log(messages.filter(item => item.reproomId === '6040e23434a576148036046e'),"messageseffect")
    // Messagedispatch({
    //   type: "set-to-empty",
    //  payload : []
    // });
    // console.log("pagal")
    socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'MsgList'});
    setMess(true);
    return ()=>
    {
      setMess(false)
     
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[mess])
 
return(
<div>

                         <div className="TicketComments">
 <ul >
  {messages.sort((a,b) => new Date(b.repcreatedOn) < new Date(a.repcreatedOn) ? 1 : -1).map(item => (
    <>

      {(() => {
        var today;
        var time;
        if (item.repmsgFrom === customer_ID.id ) {
         
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

    var formatted_time = time_part_array[0] === '0' ? 12 +":"+ time_part_array[1]  + ' ' + ampm : time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;

    return formatted_time;
}
          return (
            <li className="OtherUser">
            <div className="userImgAndChat">
                <div className="userImg">
                    <img src="assets/images/avatar.jpg" className="img-responsive" alt="-" />
                </div>
           
                <div className="userChat">
                    <p> {item.repmsg}
                    {(item.repfile !== "") ? <a href={serverURL + "/uploads/" + item.repfile} target = "_blank"  rel="noreferrer"><img alt="pic here " src={ serverURL + "/uploads/" + item.repfile} /></a>  : false }
                    </p>
                </div>
         
                
                <div className="dateTime">{timeTo12HrFormat(time)}</div>
                
            </div>

        </li>
        
          )
        } else if (item.repmsgFrom === obj.data.agent_id ) {
          if(item.repmsgTo === customer_ID.id){
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
            <div className="userImgAndChat">
                <div className="userImg">
                    <img src="assets/images/agentavatar.jpg" className="img-responsive" alt="-" />
                </div>
   
                <div className="userChat">
                    <p> {item.repmsg}
                    {(item.repfile !== "") ? <a href={serverURL + "/uploads/" + item.repfile} target = "_blank"  rel="noreferrer"><img alt="-"src={ serverURL + "/uploads/" + item.repfile} /></a> : false }
                   </p>
                </div>
    
                <div className="dateTime">{timeTo12HrFormat(time)}</div>
                
            </div>
    
        </li>
        
          )
        }
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