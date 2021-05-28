import React, {useReducer, createContext ,useEffect, useContext} from 'react';
import {SocketContext} from './SocketProvider';
// import useSound from "use-sound";


export const UserList = createContext();

const reducer = (visits, action) => {

  switch (action.type) {
    case "ADD-ONLINE":

    let index = visits.findIndex( x => x.visitor_id === action.payload.visitor_id)
    
         if(~index)
         visits[index] = action.payload
  
       
         else 
     
         visits.push(action.payload)
       
         return [...visits] 
      
         case "REMOVE-ONLINE":
           
// console.log(action.payload,"actionss",visits,"visotr")
          let index3 = visits.findIndex( x => x.visitor_id === action.payload.visitor_id)
          // console.log(index3,"index")
               if(~index3)
              { 
               visits.splice(index3,1)}
              
               return [...visits]
             
               


      case "reSetSTATE" :

         
         let agent =  visits.findIndex(x => x.visitor_id === action.payload.visitor_id)
console.log("010101010",agent )
         
           if(~agent ){
             visits[agent].agent_name = action.payload.agent_name
        return [...visits]
           }
   
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


export const VistorListing = (props) =>{

  const [socket] = useContext(SocketContext)
  const [visits, dispatch] = useReducer(reducer,[]);
  // const [play] = useSound('assets/audio/tune.mp3', { interrupt: true });
  
    useEffect(() => {
      
        var obj = JSON.parse(localStorage.getItem('user'));
        socket.emit('set-user-data', obj.data.agent_id);
       
         socket.on('onlineStack',function(stack)
         {
       
          var agent_id = obj.data.agent_id;
       
          for (var visitor_id in stack )
          { 
              
                 if(visitor_id === agent_id){
                
                 }
                 else
                 {
                  
                   //console.log('EEEEEEEEEEEEEE', obj.data.agent_teamId)
                   var visitorAndAgentIdobj = { visitorId: visitor_id, agentId: agent_id, agent_teamId: obj.data.agent_teamId };
                   const vis_id = {id : visitorAndAgentIdobj.visitorId}
                   socket.emit('get_visitor_id', visitorAndAgentIdobj, function (response) 
                   {
                    //play()
                     
                     if(stack[response.visitor_id] === "Online" )
                     {     
                        
                        if(response.agent_name !== "Unassigned")
                        {
                          // console.log('@@@@');
                          socket.emit('update-room',{ visitor_id : vis_id , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : true, page: 'UserList.js'});
                          
                        }
                        else if(response.agent_name === "Unassigned")
                        {
                          // console.log('!!!!!!!');
                          //socket.emit('update-room-unassigned',{ visitor_id : vis_id,  agent_id : 'tFAE3OWtP', agent : 'Unassigned' });
                          socket.emit('update-room',{ visitor_id : vis_id,  agent_id : 'tFAE3OWtP', agent : 'Unassigned', isVisitorList : true, page: 'UserList.js'});
                          
                        }
                         dispatch({
                            type: "ADD-ONLINE",
                            payload: response
                          });
                     }
                     else  {

                        //console.log("online-remove")
                        dispatch({
                          type: "REMOVE-ONLINE",
                          payload: response
                        });
                     }
                  
                   });
                 }
               }
             });
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <UserList.Provider value={[visits,dispatch]}>
         {props.children}
        </UserList.Provider>
    )
}