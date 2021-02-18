import React,{useContext} from 'react';
import { MessageCounter } from '../context/MessageCounter';
import { MessageContext } from '../context/MessageContext';
import { cos } from '@amcharts/amcharts4/.internal/core/utils/Math';
const ChatWidget = ({setClicked,clicked}) => {
    const [messages] = useContext(MessageContext)
    const [count,setCount] = useContext(MessageCounter);
    const closeOpenWidget = () =>{
        setClicked(!clicked)
        setCount(0)
      }
      var obj = JSON.parse(localStorage.getItem('user'));
      const agent_id = obj.data.agent_id       
return(
    <div class="dinoChatWidget"  onClick={closeOpenWidget}> 
        <div class="dinoChatWidgetWrap">
            
            <a  href={() => false} class="openChatWidget">
                 <div class="dinoWidgetImg">
                        <span class="ChatCount">{(0 == messages.filter(x => x.repmsgFrom !== agent_id && x.repIsRead === false ).length) ? 0 : messages.filter(x =>  x.repIsRead === false ).length}</span>
                </div>
            </a>
        </div> 
       
    
</div>
)
}
export default ChatWidget;