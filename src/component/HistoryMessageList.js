import React ,{useEffect, useState}from 'react';
const HistoryMessageList = ({historyMessages,customer_ID,socket,setHistoryMessages,mess}) => {
   
  // console.log('message122:', historyMessages)
  // console.log('custoomer', customer_ID)

  const serverURL = "http://10.1.30.146:5001";
  var obj = JSON.parse(localStorage.getItem('user'));
  let roomId = '';
  const agent_id = "";
  // console.log("how many times");

  useEffect(() => {
// console.log("how many times");
var obj = JSON.parse(localStorage.getItem('user'));
      socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name});
      socket.on('update-room',function(room){
        setHistoryMessages([])
        const msgCount = 0;
        roomId = room;
        socket.emit('old-chats-init',{room:roomId,username:obj.data.agent_id ,msgCount:msgCount});
        // console.log("2");
      });
  
     
      socket.on('old-chats',function(data){
       console.log("data",data);
        
        
        if(data.room === roomId){
          setHistoryMessages([])
        
          if(data.result.length !== 0){
          
            for (var i = 0;i < data.result.length;i++) {
  
                  socket.emit('get_reply_msg', data.result[i].msgId   , function (response) {
  
                    setHistoryMessages( messages => [...messages, response] );
                    // console.log('response',response)
                    
                })
  
            }
          }
         
    
        }//end of outer if.
           
      }); // end of listening old-chats event.
      
  
      return () => {
        //socket && socket.removeAllListeners("update-room");
        // socket && socket.close();
      };
    }, []);

    


    const centredata = {
      color: "black",
      backgroundColor: "#8b959f",
      padding: "10px",
      fontFamily: "Arial",
      textAlign : "center",
    };
        return(



          <div class="ChatHistoryBoxInner">
 <ul>
   {/* {console.log(historyMessages,'customer id :',customer_ID.id,'agent id :',obj.data.agent_id) }  */}
   {(historyMessages.length > 0)?
 historyMessages.sort((a,b) => new Date(b.repcreatedOn) < new Date(a.repcreatedOn) ? 1 : -1).map(item =>  (
          
             <>

             {(() => { 
                var today;
                var time;
              // console.log("histro",historyMessages.length)
              
               if (item.repmsgFrom === customer_ID.id ) {
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
                      <p>{item.repmsg} 
                   {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
                   </p>
                      </div>
               
                      
                      <div class="dateTime">{timeTo12HrFormat(time)}</div>
                      
                  </div>
       
             </li> 
                  
              
                 )}
                      
                 else if (item.repmsgFrom === obj.data.agent_id  ) {
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
                  <li>
                  <div class="userImgAndChat">
                      <div class="userImg">
                          <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" class="img-responsive" alt="-" />
                      </div>
               
                      <div class="userChat">
                          <p>{item.repmsg} </p>
                          {(item.repfile !== "") ? <img src={ serverURL + "/uploads/" + item.repfile} /> : false }
                      </div>
                      
                      <div class="dateTime">{timeTo12HrFormat(time)}</div>
                      
                  </div>
                 
              </li>
                
                 )
                }
             
              }
              
             
              //  else if(item.repmsg === "") {
              //      return (
                   
              //        <li class="sent"  >
              //        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
              //                  <span class="timeStamp">10:08</span>
              //        <p> no messages</p>
              //      </li>
              //    )
              //    }
             )()}
         
           </>
 


 )):<li style={centredata}><b>NO DATA FOUND</b> </li>}

    
 

 </ul>
</div>
        )

    }


export default HistoryMessageList;

