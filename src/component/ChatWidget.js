import React,{useState,useContext} from 'react';
import { MinimizeContext } from '../context/MinimizeContext';
// import { MessageContext } from '../context/MessageContext';
// import { MinimizeContext } from '../context/MinimizeContext';

const ChatWidget = ({setClicked,clicked}) => {
    const [hide , setUnHide] = useState(false)
    const [minimizeUser,setMinimizeUser] = useContext(MinimizeContext);
    // const [messages] = useContext(MessageContext)
    // const [minimizeUser,setMinimizeUser] =useContext(MinimizeContext)
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
                   { hide ?<div>
                     <ul>
                         {minimizeUser.map(person=><li>{person.visitor_name}</li>)}
                     </ul>
                     </div>:false}
            <a  href={() => false} className="openChatWidget">
               
                 <div className="dinoWidgetImg" >
                
                     <span className="ChatCount">{ (localStorage.getItem('minimize') === null ) ? 0 : localStorage.getItem('minimize') }</span>
                     
                        {/* <span class="ChatCount">{(0 === messages.filter(x => x.repmsgFrom !== agent_id && x.repIsRead === false ).length) ? 0 : messages.filter(x =>  x.repIsRead === false ).length}</span> */}
                </div>
            </a>
        </div> 
       
    
</div>
)
}
export default ChatWidget;