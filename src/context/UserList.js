import React, {useReducer,useState, createContext ,useEffect, useContext,useRef,useMemo} from 'react';


import {SocketContext} from './SocketProvider';



export const UserList = createContext();




const reducer = (visits, action) => {

  switch (action.type) {
    case "ADD-ONLINE":
     // console.log('visitors',visits)
    let index = visits.findIndex( x => x.visitor_id == action.payload.visitor_id)
    //console.log("index",index)
         if(~index)
         visits[index] = action.payload
         else 
         visits.push(action.payload)
       
         return [...visits] 
      
      case "reSetSTATE" :

         
         let agent =  visits.findIndex(x => x.visitor_id == action.payload.visitor_id)
console.log("010101010",visits )
         
           if(~agent )
          //  console.log("click",action.payload.agent_name,action.payload.visitor_id,"agent",agent,visits)
              //if(~agent)
             visits[agent].agent_name = action.payload.agent_name
              //  visits[agent] = action.payload.obj.data.agent_name
              //  else 
              //  console.log("click2",action.payload,action.payload,"agent2",agent)
              //  visits.push(action.payload)
             
        // alert('in dispatch' , visits)
        return visits
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


export const VistorListing = (props) =>{

  const [socket] = useContext(SocketContext)
  const [visits, dispatch] = useReducer(reducer,[]);
  const store = useMemo(() => ([ visits ]), [visits]);

// console.log('bro',visits12)
  // const prevAmount = useRef(visits).current;

// console.log('stateinit',prevAmount)
    // console.log("context",visits);
    //console.log('userlist context outer effect',socket)
    // function usePrevious(value) {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   });
    //   return ref.current
    // } 
    



    useEffect(() => {
//  const interval = setInterval(() => {
     
        var obj = JSON.parse(localStorage.getItem('user'));
        socket.emit('set-user-data', obj.data.agent_id);
       
         socket.on('onlineStack',function(stack){
          // console.log("p99",prevUser)
         
          console.log("pagal",stack)
          var agent_id = obj.data.agent_id;
          // setVisits([])
          for (var visitor_id in stack ){
        
         
                console.log(visitor_id);
                 if(visitor_id === agent_id){
                
                 }
                 else{
               
                   var visitorAndAgentIdobj = { visitorId: visitor_id, agentId: agent_id };
                   socket.emit('get_visitor_id', visitorAndAgentIdobj, function (response) {
                   //socket.emit('get_visitor_id', visitor_id, function (response) {
                  //  const  removeDuplicates =(a)=> {
                  //     const map = new Map();
                
                  //     Object.keys(a.visitor_id).map(v => map.set(console.log(v.visitor_id), v)) // having `abc_buildingid` is always unique
                  //     return [...map.values()];
                  //   }
    
    
    
                  
                      // console.log("p99",prevUser)
                  
                    
                     if(stack[response.visitor_id] === "Online" )
                  
                      {   
                         dispatch({
                            type: "ADD-ONLINE",
                            payload: response
                          });
    
                          // dispatch({
                          //   type: "Compare",
                          //   payload: response
                          // });
                        
                       //console.log('response',visits)
                       //((prevState, props) => ({counter: prevState.counter = props.step})
                      // ((prevState, props) -> ({items: value, ...prevState.items})
                   //events[action.event.event_id] = action.event.name]
                        // setVisits((prevState, response) => ([...prevState.visitor_Id !== response.visitor_Id]))
                        
                        // setVisits( prev =>([...prev,response ]))
                        //  setVisits(visits => [...visits, response ])
                      
                     }
                   //  else{
                   //   setVisits( prev => [...prev, response] )
                   //  }
                   });
                 }
               }
             });
        //      return () => {
        // //     socket && socket.removeAllListeners()
        // //  //   //  socket && socket.close()
        //      alert('userlist')
        //  };
        console.log('visitor123123123s',visits)
           
    // }, 10000);
     // return () => clearInterval(interval);
    },[]);
    return(
        <UserList.Provider value={[visits,dispatch]}>
         {props.children}
        </UserList.Provider>
    )
}