
import React, { createContext ,useEffect,useContext,useReducer}  from "react";
import {SocketContext} from './SocketProvider';


export const HistoryMessageContext = createContext();


// var visitorIdVal;
const HistoryMessagereducer = (histmessages, action) => {
 
 

 switch (action.type) {
 
//      case  "Current-active-user":
//  //  alert("customer id" + action.payload.visitorId)
//      visitorIdVal = action.payload.visitorId;

//      // socket.emit('msg-is-read',{ visitor_id:action.payload.visitorId});
//      //abc(action.payload.visitorId);

//                return [...messages]  

     //#region  msgs dispatch

    //  case "doesHaveFile":

    //    let index1 = messages.findIndex( x => x.msgId === action.payload.id)
    //  //  console.log("index",index1)
    //         if(~index1)  
    //          messages[index1] = {  
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          repmsgTo:visitorIdVal,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: action.payload.file,
    //          repIsRead: false
    //          }
    //         else 
    //        //  console.log("~ ye chala");
    //         messages.push( { 
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          repmsgTo:visitorIdVal,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: action.payload.file,
    //          repIsRead: false
    //          })
          
    //        return [...messages]
   
    
     
    //  case "DoesHaveNotFILEONLYMESSAGES" :

    //      // alert("hey")
    //    let index2 = messages.findIndex( x => x.msgId === action.payload.id)
    //    //console.log("index",index)
    //         if(~index2)
    //          messages[index2] = {
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          repmsgTo:visitorIdVal,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: "",
    //          repIsRead: false
    //          }
    //         else 
    //          messages.push( {
    //          repmsg: action.payload.msg,
    //          repmsgFrom: action.payload.msgFrom,
    //          repmsgTo:visitorIdVal,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: "",
    //          repIsRead: false
    //          })

    //          return [...messages]

    //    case "doesHaveFile_IsRead":

    //    let index5 = messages.findIndex( x => x.msgId === action.payload.id)
    //    //console.log("index",index)
    //         if(~index5)
    //          messages[index5] = {
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: action.payload.file,
    //          repIsRead: true
    //          }
    //         else 
    //         messages.push( {
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: action.payload.file,
    //          repIsRead: true
    //          })
          
    //        return [...messages]
   
    
     
    //  case "DoesHaveNotFILEONLYMESSAGES_IsRead" :

         
    //    let index6 = messages.findIndex( x => x.msgId === action.payload.id)
    //    //console.log("index",index)
    //         if(~index6)
    //          messages[index6] = {
    //          repmsg: action.payload.msg ,
    //          repmsgFrom: action.payload.msgFrom,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: "",
    //          repIsRead: true
    //          }
    //         else 
    //          messages.push( {
    //          repmsg: action.payload.msg,
    //          repmsgFrom: action.payload.msgFrom,
    //          msgId: action.payload.id,
    //          repcreatedOn: action.payload.date,
    //          repfile: "",
    //          repIsRead: true
    //          })

    //          return [...messages]


     //#endregion
   

        

  case "GET_RESPONSE_HISTORY" :

 let index3 = histmessages.findIndex( x => x.msgId === action.payload.msgId )
     // console.log("index",index)
        if(~index3)
        histmessages[index3] =  action.payload
       else 
       histmessages.push( action.payload)

     return [...histmessages]   

// case "set-to-empty" :

//     histmessages = action.payload

//       return  histmessages

   case "START":
     return {
       loading: true
     };

   case "COMPLETE":
     return {
       loading: false
     };
   default:
     throw new Error();
 }
};



export const HistoryUserMessages = (props) =>{

const [socket] = useContext(SocketContext)
const [histmessages, HistoryMsgdispatch] = useReducer(HistoryMessagereducer,[]);

useEffect(() => {
// console.log("hello")
   var obj = JSON.parse(localStorage.getItem('user'));
 
   //receiving messages.
//   socket.on('chat-msg',function(data){
//  // console.log("chatmsg",data)

//    if(data.msg !== ""){
   
//      if(data.file !== "")
//      {
//        if(data.msgFrom === visitorIdVal)
//        {
//          socket.emit('msg-is-read',{ visitor_id:visitorIdVal});
//          Messagedispatch({
//            type: "doesHaveFile_IsRead",
//            payload: data
//          });
//        }
//        else
//        {
//          Messagedispatch({
//            type: "doesHaveFile",
//            payload: data
//          });
//        }

//      }
//      else
//      {
     
//        if(data.msgFrom === visitorIdVal)
//        {
//          socket.emit('msg-is-read',{ visitor_id:visitorIdVal});
//          Messagedispatch({
//            type: "DoesHaveNotFILEONLYMESSAGES_IsRead",
//            payload: data
//          });
//        }
//        else {
//          Messagedispatch({
//            type: "DoesHaveNotFILEONLYMESSAGES",
//            payload: data
//          });
//        }

       
      
//      }
  
//    } 
   
//  }); //end of receiving messages.
 
 
   let roomId = '';
 
       // });
       socket.on('update-room',function(room){
         // console.log(room,"rommmmms")
         const msgCount = 0;
       
         roomId = room;
      
         socket.emit('old-chats-init',{room:roomId,username:obj.data.agent_id,msgCount:msgCount});
         
       }); //end of set-room event.
     
       socket.on('old-chats',function(data){
         // console.log(data,"data")
        //  HistoryMsgdispatch(
        //      { type : "set-to-empty",
        //      payload: []
        //     })
         if(data.room === roomId ){

           if(data.result.length !== 0){
       
             for (var i = 0;i < data.result.length;i++) 
             {     
                  var getReplyMsgData = { msgId:data.result[i].msgId, isVisitorList: false };
                  socket.emit('get_reply_msg', getReplyMsgData, function (response) 
                  {
                    // console.log(response,"respo")
                    HistoryMsgdispatch({
                       type: "GET_RESPONSE_HISTORY",
                       payload: response
                     });
                     
                 })
   
             }//end of for.
           }
          
           
         }//end of outer if.
          
       }); // end of listening old-chats event.
       

   
    //    return () => {

    //  // socket && socket.removeAllListeners("update-room");
    //  // socket && socket.removeAllListeners("chat-msg");
    //  //  socket && socket.removeAllListeners( 'old-chats');
     
    //    };
       // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]);
 
   


   return(
       <HistoryMessageContext.Provider value={[histmessages, HistoryMsgdispatch ]}>
        {props.children}
       </HistoryMessageContext.Provider>
   )
}