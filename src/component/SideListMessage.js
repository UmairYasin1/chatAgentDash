import React,{useContext,useRef,useEffect,useCallback,memo} from 'react';
 import { MessageContext } from '../context/MessageContext';
//  import useScrollInfo from 'react-element-scroll-hook';


const SideListMessage = ({webname,names,customer_ID,chnageActiveUser}) => {
 const [messages,Messagedispatch]  = useContext(MessageContext);
//  const [scrollInfo, setRef] = useScrollInfo();
   const sideEndRef = useRef(null)
console.log('names',names)
const scrollToBottom = () => {
  //console.log("asdasd")
//console.log("end",sideEndRef ,"curreasdasd", sideEndRef.current)
      if (sideEndRef && sideEndRef.current)  sideEndRef.current.scrollIntoView({block:"center"});
  
    }

    
   useEffect(scrollToBottom, [customer_ID]);
// useEffect(()=>{
//   if (customer_ID.id ===''){false}
//   else
//     const check = visits.findIndex(x => x.visitor_id === customer_ID.id)
//     console.log("check",check)

  

// },[visits])
  
  
   
  
  

//   let check = visits.findIndex(x => x.visitor_id === customer_ID.id)
//    visits.filter(item => item.visitor_id === customer_ID.id)
// (customer_ID !== visits.filter)
  console.log("SideListMessages")
//  console.log(messages , "messagesee")

   var obj = JSON.parse(localStorage.getItem('user'));

return (
 
         <>  

                     <div className="chatUserListWrap">
                         <ul>
                         {(names.length > 0)?
    
                         names.filter(x => x.agent_name === obj.data.agent_name && (x.brand_id === webname || webname  === "" || webname === "Select Brand" )).map(( item )=>{ 

                          const currvisitor = messages.filter( x => (x.repmsgTo === obj.data.agent_id && x.repmsgFrom === item.visitor_id) ||( x.repmsgTo === item.visitor_id  && x.repmsgFrom === obj.data.agent_id) ||(x.repmsgFrom === item.visitor_id) )  ;
                          const val = currvisitor.length -1
                       // console.log("cureent",currvisitor[val])
                        const CurrentTimer = (repcreatedOn) =>{

                         var today = new Date(repcreatedOn);
        
                         var  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                     
                    // Take a time in 24 hour format and format it in 12 hour format
                 
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
                    const id = item.visitor_name
                    let lastSix;
                    (id.slice(0,2)==="WC")? lastSix = id.slice(id.length - 8) : lastSix = item.visitor_name

return(
                             <li className={item.visitor_id === customer_ID.id ? "active": ""} key={item.visitor_id} onClick={()=>chnageActiveUser(item.visitor_id)} ref= {item.visitor_id === customer_ID.id ? sideEndRef:null} >
                             <div className="media">
                               <div className="media-left">
                                 <div className="profilePicHeight">
                                <span className="onlineStatus online"></span>
                                 <span className="chatUserImg" >
                                     <img src="assets/images/avatar.jpg" className="media-object" alt="" />
                                 </span>
                                 </div>
                               </div>
                               <div className="media-body">
                                 <h4 className="media-heading">{lastSix}</h4>
                                 {(0 === messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length) ? false : <> <span className={"unreadMsg"}>{messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length}</span></>}
                                 {(0 === currvisitor.length ) ? false : <p className="msg">{(currvisitor[val].repmsgFrom === obj.data.agent_id)? `You : ${currvisitor[val].repmsg}`:`Visitor : ${currvisitor[val].repmsg}`}</p> }
                                  {(0 ===currvisitor.length  ) ? false : <h5 className="userActiveDate">{CurrentTimer(currvisitor[val].repcreatedOn)}</h5> }
                                {/* <div className="dropdown"> 
                                <a href="javascript:;" className="userActions dropdown-toggle" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                 <ul className="dropdown-menu">
                                     <li><a href="#">Show Info</a></li>
                                     <li><a href="#">Edit</a></li>
                                     <li><a href="#">Delete</a></li>
                                   </ul>
                                   </div> */}
                          
                               </div>
                             </div>
                      
                                 
               </li>  
               
                          ) }):
  
 <li className="contact "><div className="wrap"><div>No User Found</div></div></li>
  }
                         </ul>
                         
                     </div>
                 
                     
                     
              </>
          
)
}

export default memo(SideListMessage) ;