import React, {useContext, useEffect,useRef, useState } from 'react';
import { MessageContext } from '../context/MessageContext';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
//  import { SocketContext } from '../context/SocketProvider';

const MessageList = ({customer_ID,visits,socket,setMess,mess}) => {
const [messages,Messagedispatch] = useContext(MessageContext);
const messagesEndRef = useRef()
  const [elementPosition, setElementPosition] = useState({ x: 20, y: 150 })
// const [offset,setOffset]= useState({scrollTop: 0})
const serverURL = "http://173.254.252.226:5001";

  //  console.log(messages,"messages12312312")

  var obj = JSON.parse(localStorage.getItem('user'));

  const scrollToBottom = () => {
    console.log("workinggg")
//console.log("end",messagesEndRef ,"curreasdasd", messagesEndRef.current)
    if (messagesEndRef && messagesEndRef.current)  messagesEndRef.current.scrollIntoView({block:'start',behavior:"smooth"});

  }


 

    // Element scroll position
  // useScrollPosition(
  //   ({ currPos }) => {
  //     console.log("currpos",currPos)
  //     setElementPosition(currPos)
  //   }, [], messagesEndRef
  // )
  // console.log("elementpostion",elementPosition)
//   console.log("curreasdas55d", messagesEndRef)
// const handleScroll = (event) => {
//   console.log("hello")
//   const { scrollHeight, scrollTop, clientHeight } = event.targetnull;
//   const scroll = scrollHeight - scrollTop - clientHeight

//   if (scroll > 0) {
//    console.log("somwhere",scroll)
//   }
//   else if (scroll == 0){
  
//     scrollToBottom()
//     console.log("bottom",scroll)
//   }
// }
// const onScroll = (event) => {
  
//   const { scrollHeight, scrollTop, clientHeight }   = event.target
//   console.log(`myRef.scrollTop: ${scrollTop} scrollheight: ${scrollHeight} clientheight: ${clientHeight}`)
//   setOffset({
//      scrollTop: scrollTop
//   })
// }
 useEffect(scrollToBottom, [messages]);

  // useEffect(()=>{
  //   // console.log(messages.filter(item => item.reproomId === '6040e23434a576148036046e'),"messageseffect")
  //   // Messagedispatch({
  //   //   type: "set-to-empty",
  //   //  payload : []
  //   // });
  //   // console.log("pagal")
  //   socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'MsgList'});
  //   setMess(true);
  //   return ()=>
  //   {
  //     setMess(false)
     
  //   }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[mess])
 
return(
<div>

                         <div className="TicketComments" >
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
;
const val = messages[messages.length-1]
//console.log("val",val)
          return (
            <li className="OtherUser"  ref={ val.repmsgFrom === customer_ID.id ? messagesEndRef : null}   >
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

                          const val = messages[messages.length-1]
          
          return (
            <li ref={val.repmsgFrom === obj.data.agent_id ? messagesEndRef : null} >
              {/* {(customer_ID.id)? <p>ref={messagesEndRef} </p>:false} */}
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
 
 
 {/* <li ref={messagesEndRef} > </li> */}
</ul>

</div >

</div>

        )
    }


export default MessageList;