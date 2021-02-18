
import React, {useState, createContext ,useEffect,useContext,useReducer}  from "react";
 import {SocketContext} from './SocketProvider';
 import { MessageCounter } from "./MessageCounter";

export const MessageContext = createContext();


var visitorIdVal;
const Messagereducer = (messages, action) => {
  
  

  switch (action.type) {
  
    case  "Current-active-user" :
   alert("customer id" + action.payload.visitorId)
      visitorIdVal = action.payload.visitorId;
 
      // socket.emit('msg-is-read',{ visitor_id:action.payload.visitorId});
      //abc(action.payload.visitorId);
      return [...messages]  

      //#region  msgs dispatch

      case "doesHaveFile":

        let index1 = messages.findIndex( x => x.msgId == action.payload.id)
        //console.log("index",index)
             if(~index1)
              messages[index1] = {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: action.payload.file,
              repIsRead: false
              }
             else 
             messages.push( {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: action.payload.file,
              repIsRead: false
              })
           
            return [...messages]
    
     
      
      case "DoesHaveNotFILEONLYMESSAGES" :

          
        let index2 = messages.findIndex( x => x.msgId == action.payload.id)
        //console.log("index",index)
             if(~index2)
              messages[index2] = {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: "",
              repIsRead: false
              }
             else 
              messages.push( {
              repmsg: action.payload.msg,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: "",
              repIsRead: false
              })

              return [...messages]

        case "doesHaveFile_IsRead":

        let index5 = messages.findIndex( x => x.msgId == action.payload.id)
        //console.log("index",index)
             if(~index5)
              messages[index5] = {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: action.payload.file,
              repIsRead: true
              }
             else 
             messages.push( {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: action.payload.file,
              repIsRead: true
              })
           
            return [...messages]
    
     
      
      case "DoesHaveNotFILEONLYMESSAGES_IsRead" :

          
        let index6 = messages.findIndex( x => x.msgId == action.payload.id)
        //console.log("index",index)
             if(~index6)
              messages[index6] = {
              repmsg: action.payload.msg ,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: "",
              repIsRead: true
              }
             else 
              messages.push( {
              repmsg: action.payload.msg,
              repmsgFrom: action.payload.msgFrom,
              msgId: action.payload.id,
              repcreatedOn: action.payload.date,
              repfile: "",
              repIsRead: true
              })

              return [...messages]


      //#endregion
    

         

   case "GET_RESPONSE" :

      let index3 = messages.findIndex( x => x.msgId == action.payload.msgId && x.reproomId == action.payload.reproomId)
      // console.log("index",index)
         if(~index3)
       messages[index3] =  action.payload
        else 
       messages.push( action.payload)

      return [...messages]   

      case "set-to-empty" :
// alert('here')
          messages = action.payload

       return messages

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



export const UserMessages = (props) =>{

const [socket] = useContext(SocketContext)
const [messages, Messagedispatch] = useReducer(Messagereducer,[]);
const [count , setCount] = useContext(MessageCounter) 
useEffect(() => {

    var obj = JSON.parse(localStorage.getItem('user'));
  
    //receiving messages.
   socket.on('chat-msg',function(data){
    setCount((prev) => prev + 1 );
   console.log("data 1234",data)
    if(data.msg !== ""){
      // setMessages([])
      if(data.file !== "")
      {
        if(data.msgFrom === visitorIdVal)
        {
          socket.emit('msg-is-read',{ visitor_id:visitorIdVal});
          Messagedispatch({
            type: "doesHaveFile_IsRead",
            payload: data
          });
        }
        else
        {
          Messagedispatch({
            type: "doesHaveFile",
            payload: data
          });
        }

      }
      else
      {
        console.log('aaa',visitorIdVal);
        console.log('aaa 22',data.msgFrom);
        if(data.msgFrom === visitorIdVal)
        {
          socket.emit('msg-is-read',{ visitor_id:visitorIdVal});
          Messagedispatch({
            type: "DoesHaveNotFILEONLYMESSAGES_IsRead",
            payload: data
          });
        }
        else {
          Messagedispatch({
            type: "DoesHaveNotFILEONLYMESSAGES",
            payload: data
          });
        }

        
       
      }
   
    } 
    
  }); //end of receiving messages.
  
   
    let roomId = '';
  
        // });
        socket.on('update-room',function(room){
    
          const msgCount = 0;
        
          roomId = room;
       
          socket.emit('old-chats-init',{room:roomId,username:obj.data.agent_id,msgCount:msgCount});
          
        }); //end of set-room event.
      
        socket.on('old-chats',function(data){
   
          if(data.room === roomId ){

            if(data.result.length !== 0){
        
              for (var i = 0;i < data.result.length;i++) {
    
                    socket.emit('get_reply_msg', data.result[i].msgId , function (response) {
    console.log(response,'ress')
                  
    Messagedispatch({
                        type: "GET_RESPONSE",
                        payload: response
                      });
                      
                  })
    
    
               
    
              }//end of for.
            }
           
            console.log('messages --11', messages);
          }//end of outer if.
           
        }); // end of listening old-chats event.
        

    
        return () => {
 
      socket && socket.removeAllListeners("update-room");
       socket && socket.removeAllListeners("chat-msg");
       socket && socket.removeAllListeners( 'old-chats');
      
        };
      });
  
    


    return(
        <MessageContext.Provider value={[messages, Messagedispatch ]}>
         {props.children}
        </MessageContext.Provider>
    )
}