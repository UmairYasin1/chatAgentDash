import React,{useContext,useState} from 'react';
 import { MessageContext } from '../context/MessageContext';
const SideListMessage = ({names,customer_ID,chnageActiveUser}) => {
 const [messages]  = useContext(MessageContext);
 const [unreadCount,setUnreadCount]=useState({
  vistor_name :'',
  unreadCount:''
})
 if (names.visitor_id == messages.repmsgFrom){
   console.log(messages,"messaaa",names)
  //  setUnreadCount({ visitor_name: 'visitor_name' , unreadCount: 'isRead' })
 }



//  console.log(arnew,'asd')
  // const [messages , setMessages] = useContext(MessageContext);
  //  let agent =  messages.length -1
 // console.log(messages[agent].repmsg,'sidelisss')
return (
 
                     
                    
            
         <>            
                     
                     <div class="chatUserListWrap">
                         <ul>
                         {(names.length > 0)?
    
                         names.filter(x => x.agent_name !== "" || null).map(( item => 
                             <li className={item.visitor_id === customer_ID.id ? "active": ""} key={item.visitor_id} onClick={()=>chnageActiveUser(item.visitor_id)}>
                             <div class="media">
                               <div class="media-left">
                                <span class="onlineStatus online"></span>
                                 <span class="chatUserImg">
                                     <img src="assets/images/user.jpg" class="media-object" />
                                 </span>
                               </div>
                               <div class="media-body">
                                 <h4 class="media-heading">{item.visitor_name}</h4>
                                 <p class="msg">{(0 == messages.filter(x => x.repmsgFrom == item.visitor_id && x.repIsRead === false ).length) ? false : <> UnRead:{messages.filter(x => x.repmsgFrom == item.visitor_id && x.repIsRead === false ).length}</>}</p>
                                 <h5 class="userActiveDate">10:35pm</h5>
                                {/* <div class="dropdown"> 
                                <a href="javascript:;" class="userActions dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                                 <ul class="dropdown-menu">
                                     <li><a href="#">Show Info</a></li>
                                     <li><a href="#">Edit</a></li>
                                     <li><a href="#">Delete</a></li>
                                   </ul>
                                   </div> */}
                          
                               </div>
                             </div>
                      
                                 
               </li>  
             )):
  
 <li class="contact "><div className="wrap"><div>No User Found</div></div></li>
  }
                         </ul>
                         
                     </div>
                 
                     
                     
              </>
          
    // <ul>
    
    // { (names.length > 0)?
    
    // names.filter(x => x.agent_name !== "" || null).map(( item => 

    // <li className={item.visitor_id === customer_ID.id ? "contact active": "contact"} key={item.visitor_id} onClick={()=>chnageActiveUser(item.visitor_id)}>
    //   <div className="wrap">
    //   {/* .split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()  */}
    //     <div className="img"> {item.visitor_name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()} </div>
    //     <div className="meta">
    //       <p className="name">{item.visitor_name}</p>
    //       <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
    //     </div>
    //   </div>
    // </li>
    // )):
  
    // <li class="contact "><div className="wrap"><div>No User Found</div></div></li>
    // }  
    
    
    
    // </ul>
)
}

export default SideListMessage ;