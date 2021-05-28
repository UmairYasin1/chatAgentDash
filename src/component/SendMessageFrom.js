import React,{useCallback,useContext, useState,memo} from 'react';
import { SocketContext } from '../context/SocketProvider';
import AttachmentFile from'./AttachmentFile';
import UserTypingCom from './UserTypingCom';
import Picker from 'emoji-picker-react';
import { UserList } from '../context/UserList';

const SendMessageFrom = ({customer_ID}) => {
 console.log("SendMessageFrom")
const [socket] = useContext(SocketContext);
const [messe,setMesse] = useState({postVal : ""});

const [showComponent , setShowComponent] = useState(false)
const [selectedFile , setSelectedFile] = useState(null)
const [tog,setToggle] = useState(false)
const [visits,dispatch] = useContext(UserList);
//console.log(messe,"selected file")
var obj = JSON.parse(localStorage.getItem('user'));
let toVisit = '';

const onEmojiClick = (event, emojiObject) => {

let prev_val = messe.postVal
setMesse({ postVal : prev_val + emojiObject.emoji})
 
}
const handleChange=(e)=> {
  
  setMesse({
    postVal : e.target.value
  });

}

const toggle =() =>{
  setToggle(!tog)
}

const assignedAgent=(customer_ID)=>{
  console.log("QWe")
  var obj = JSON.parse(localStorage.getItem('user'));
  const visitor_id = customer_ID.id
  const agent_name = obj.data.agent_name
  const vis_id ={id : customer_ID.id}
  console.log("asdasd",visitor_id,"qweasd",agent_name)
  socket.emit('update-room',{ visitor_id : vis_id , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'SendMessageFrom.js'});  
  dispatch({
    type: "reSetSTATE",
    payload: {agent_name : agent_name, visitor_id : visitor_id}
  });
}


  const handleSubmit = (e) => {
 
    e.preventDefault()

    if(messe.postVal === null || messe.postVal.trim() === "")
    {
      return false
    }

    toVisit = customer_ID.id;
 
 
   
    if(selectedFile === null)
    {
      socket.emit('chat-msg',{msg:messe.postVal,msgFrom: obj.data.agent_id ,msgTo:toVisit,date:Date.now(),type:"agent",file:"", repMsgId:''});
    }
  
    setMesse({
      postVal : ''
    });
    setToggle(false)
  }
   
 const  _onButtonClick = () => {
      setShowComponent(!showComponent)
    }
    const vvv = (customer_ID.id) ? visits.filter (x => x.visitor_id === customer_ID.id) : false;
  console.log("vv",vvv)
  const agentName = visits.find(x => x.visitor_id === customer_ID.id)
  console.log("agentooo",agentName)
        return(
<>
<div> {(tog) ? <Picker onEmojiClick={onEmojiClick} pickerStyle={{height: '200px' }}/>:false}</div>
<form onSubmit={handleSubmit}>

<UserTypingCom customer_ID={customer_ID} />
{showComponent ?
           <AttachmentFile messe={messe} _onButtonClick={_onButtonClick }setShowComponent={setShowComponent}setSelectedFile={setSelectedFile}customer_ID={customer_ID} selectedFile={selectedFile} />:
           false
}
{ visits.find(x => x.visitor_id === customer_ID.id && x.agent_name === "Unassigned")?
                          <button onClick={()=>assignedAgent(customer_ID)} className={"assignClient"}>
                        Click here to start Chat
                         </button>
                                

                         :
                          visits.find(x => x.visitor_id === customer_ID.id && x.agent_name === obj.data.agent_name)?
                         <div className="submitComment" >
                                 
                         <i className="smileFace fa fa-smile-o" onClick={toggle}> </i>
                         <input type="text" className="form-control"  value={messe.postVal}    onChange={handleChange} placeholder="Write your message" />
                         <a href={() => false} className="btn btn-success btn-submitComment" onClick={handleSubmit} ><i className="fa fa-paper-plane" ></i></a>
                         <a href={() => false} className="btn btn-attachChat"><i className="fa fa-paperclip"onClick={()=>{_onButtonClick()}}></i></a>
                         {/* <a href={() => false} className="btn btn-audio"><i className="fa fa-microphone"></i></a> */}
                         
                     </div>: 
           
                       <div className={"assignClient"}>
                      Agent <strong>{visits.filter(x =>x.visitor_id === customer_ID.id).map(name => name.agent_name)}</strong> already assigned 
                         </div>
                    
                     
                     }
</form>
</>

 )
    }

export default memo(SendMessageFrom);