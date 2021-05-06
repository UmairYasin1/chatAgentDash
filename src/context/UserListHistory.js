import React, {useReducer, createContext ,useEffect, useContext} from 'react';
import { SocketContext } from './SocketProvider';


export const UserListHistory = createContext();


const reducer = (history, action) => {

  switch (action.type) {
    case "ADD-OFFLINE":
    let index = history.findIndex( x => x.visitor_id === action.payload.visitor_id)
         if(~index)
         history[index] = action.payload
         else 
         history.push(action.payload)      
         return [...history] 
         case "REMOVE-ONLINE":
          // console.log(action.payload,"actionss",history,"visotr")
                    let index3 = history.findIndex( x => x.visitor_id === action.payload.visitor_id)
                    // console.log(index3,"index")
                         if(~index3)
                        {
                        history.splice(index3,1)}
                        
                         return [...history]
                         
   
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
      
     // console.log("offline")
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
                    } else  {
                      // console.log("online-remove")
                        dispatch({
                          type: "REMOVE-ONLINE",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
       },[]);
      
    return(
        <UserListHistory.Provider value={[history]}>
         {props.children}
        </UserListHistory.Provider>
    )
}