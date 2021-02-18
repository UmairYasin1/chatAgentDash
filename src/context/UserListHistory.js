import React, {useReducer,useState, createContext ,useEffect, useContext} from 'react';
// import useSocket from 'use-socket.io-client';
import { SocketContext } from './SocketProvider';


export const UserListHistory = createContext();


const reducer = (history, action) => {

  switch (action.type) {
    case "ADD-OFFLINE":
      console.log('history',history)
    let index = history.findIndex( x => x.visitor_id == action.payload.visitor_id)
    console.log("index",index)
         if(~index)
         history[index] = action.payload
         else 
         history.push(action.payload)
       
         return [...history] 
      
      
      //var newArray = visits.filter( visitor => visitor.visitor_id !== action.payload.visitor_id);
      
      
    // case "Compare":
    //   console.log(action,visits)
    
    //   return visits.filter( visitor => visitor.visitor_id !== action.payload.visitorId)
        // [...visits,action.payload]
        //  visits.filter( visitor => visitor.visitor_id !== action.payload.visitorId)
   
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


export const HistoryListing = (props) =>{

  const [socket] = useContext(SocketContext);
  const [history, dispatch] = useReducer(reducer,[]);
 
  
    //console.log('history outer effect',socket)
    useEffect(() => {
      
      console.log("offline")
      //console.log('history inner effect',socket)
        var obj = JSON.parse(localStorage.getItem('user'));
          //socket.emit('set-user-data', obj.data.agent_id);
          
          socket.on('onlineStack',function(stack){
          
            // setHistory([]);
            
            var agent_id = obj.data.agent_id;
              for (var visitor_id in stack){
                
                if(visitor_id === agent_id){
                
                }
                else{
                  
                  var visitorAndAgentIdobj = { visitorId: visitor_id, agentId: agent_id };
                  socket.emit('get_visitor_id', visitorAndAgentIdobj, function (response) {
                  //socket.emit('get_visitor_id', visitor_id, function (response) {
                
                    if(stack[response.visitor_id] === "Offline")
                    {     
                      dispatch({
                        type: "ADD-OFFLINE",
                        payload: response
                      });
                    }
                   
                  });
                }
              }
          });
      
    //   return () => {
    //      socket && socket.removeAllListeners();
    //     //  socket && socket.close(); 
    //  };
       },[]);
      
    return(
        <UserListHistory.Provider value={[history]}>
         {props.children}
        </UserListHistory.Provider>
    )
}