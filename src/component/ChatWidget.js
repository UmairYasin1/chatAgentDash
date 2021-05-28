import React,{useState,useContext} from 'react';
import { MinimizeContext } from '../context/MinimizeContext';
import { SocketContext } from '../context/SocketProvider';
// import { MessageContext } from '../context/MessageContext';
// import { MinimizeContext } from '../context/MinimizeContext';

const ChatWidget = ({setClicked,clicked,setCustomer_ID}) => {
    const [hide , setUnHide] = useState(false);
    const [minimizeUser,setMinimizeUser] = useContext(MinimizeContext);
    const [socket] = useContext(SocketContext);
    console.log("ChatWidget")

    // const [messages] = useContext(MessageContext)
    // const [minimizeUser,setMinimizeUser] =useContext(MinimizeContext)
    const chnageActiveUser = (visitor_id) => {
        
        // var obj = JSON.parse(localStorage.getItem('user'));
        const customer_ID =  visitor_id;
      
        setCustomer_ID({id: customer_ID})
        // const vis_id ={id : customer_ID}
       
        //   socket.emit('update-room',{ visitor_id : vis_id , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'Visitor.js'});
       

       localStorage.setItem('Current-Vistor', JSON.stringify(visitor_id))
     }

    const closeOpenWidget = () =>{
        setClicked(!clicked)
      
      }
      const mouseeeOver = ()=>{
     setUnHide(true)
      }
      const mouseeeLeave = ()=>{
        setUnHide(false)
         }
    //   var obj = JSON.parse(localStorage.getItem('user'));
    //   const agent_id = obj.data.agent_id       
return(
    <div className="dinoChatWidget"  onClick={closeOpenWidget} > 
        <div className="dinoChatWidgetWrap" onMouseOver={mouseeeOver} onMouseLeave={mouseeeLeave} >
                   { hide ?<div className="showWidgetList">
                     <ul>
                         {minimizeUser.map((person)=>{
                              const id = person.visitor_name
                              let lastSix;
                              (id.slice(0,2)==="WC")? lastSix = id.slice(id.length - 8) : lastSix = person.visitor_name
                         return(
                         <li key={person.visitor_id} onClick={()=>chnageActiveUser(person.visitor_id)}><span className="imgList"><img src="http://173.254.252.226:3001/assets/images/avatar.jpg" /> </span> {lastSix}</li>)})}
                     </ul>
                     </div>:false}
            <a  href={() => false} className="openChatWidget">
               
                 <div className="dinoWidgetImg" >
                
                     <span className="ChatCount">{ (minimizeUser.length === null ) ? 0 : minimizeUser.length }</span>
                     
                        {/* <span class="ChatCount">{(0 === messages.filter(x => x.repmsgFrom !== agent_id && x.repIsRead === false ).length) ? 0 : messages.filter(x =>  x.repIsRead === false ).length}</span> */}
                </div>
            </a>
        </div> 
       
    
</div>
)
}
export default ChatWidget;