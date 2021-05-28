import React ,{useEffect,useContext }from 'react';
// import { MessageContext } from '../context/MessageContext';
import { HistoryMessageContext } from '../context/HistoryMessagesContext';
import { UserListHistory } from '../context/UserListHistory';
const HistoryMessageList = ({customer_ID,socket}) => {
   
  // const [messages,Messagedispatch] = useContext(MessageContext);
  const  [histmessages, HistoryMsgdispatch] = useContext(HistoryMessageContext)
  const [history] = useContext(UserListHistory);
  const serverURL = "http://173.254.252.226:5001";
  var obj = JSON.parse(localStorage.getItem('user'));
  let roomId = '';

 console.log("historykkkkljlj",histmessages)
 useEffect(()=>{},[])
// useEffect(()=>{
  
   
//          socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'HistoryMsgList'});
   
  
// },[])
//   useEffect(() => {
//     // let roomId = '';
// var obj = JSON.parse(localStorage.getItem('user'));
  
//       socket.on('update-room',function(room){
//         // 
//         const msgCount = 0;
//         roomId = room;
//         socket.emit('old-chats-init',{room:roomId,username:obj.data.agent_id ,msgCount:msgCount});
//         // console.log("2");
//       });
  
     
//       socket.on('old-chats',function(data){
//       //  console.log("data",data);
//       // setHistoryMessages([])
        
//         if(data.room === roomId){
          
        
//           if(data.result.length !== 0){
          
//             for (var i = 0;i < data.result.length;i++) {
  
//                   socket.emit('get_reply_msg', data.result[i].msgId   , function (response) {
  
//                     Messagedispatch({
//                       type: "GET_RESPONSE",
//                       payload: response
//                     });
                
                    
//                 })
  
//             }
//           }
         
    
//         }//end of outer if.
           
//       }); // end of listening old-chats event.
      
  
//       return () => {
//         //socket && socket.removeAllListeners("update-room");
//         // socket && socket.close();
//         // socket && socket.removeAllListeners("update-room");
//         // socket && socket.removeAllListeners("chat-msg");
//         //  socket && socket.removeAllListeners( 'old-chats');
//       };
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

    


    const centredata = {
      color: "black",
      backgroundColor: "#8b959f",
      padding: "10px",
      fontFamily: "Arial",
      textAlign : "center",
    }; 

        return(



          <div className="ChatHistoryBoxInner">
 <ul>

   {(histmessages.length > 0) ?
 histmessages.sort((a,b) => new Date(b.repcreatedOn) < new Date(a.repcreatedOn) ? 1 : -1).map(item =>  (
          
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
                          <img src="assets/images/avatar.jpg" className="img-responsive" alt="" />
                      </div>
                  
                      <div className="userChat">
                      <p>{item.repmsg} 
                   {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} alt=""/> : false }
                   </p>
                      </div>
               
                      
                      <div className="dateTime">{timeTo12HrFormat(time)}</div>
                      
                  </div>
       
             </li> 
                  
              
                 )}
                      
                 else if (item.repmsgFrom === obj.data.agent_id  ) {
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
        
            var formatted_time = time_part_array[0] === '0' ? 12 +":"+ time_part_array[1]  + ' ' + ampm : time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;
        
            return formatted_time;
        }
                 return (
                  <li>
                  <div className="userImgAndChat">
                      <div className="userImg">
                          <img src="assets/images/agentavatar.jpg" className="img-responsive" alt="" />
                      </div>
               
                      <div className="userChat">
                          <p>{item.repmsg} </p>
                          {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} alt="" /> : false }
                      </div>
                      
                      <div className="dateTime">{timeTo12HrFormat(time)}</div>
                      
                  </div>
                 
              </li>
                
                 )
                }
              }
              }
              
             
             )()}
         
           </>
 


 )):<li style={centredata}><b>NO DATA FOUND</b> </li>}

 </ul>
</div>
        )

    }


export default HistoryMessageList;

