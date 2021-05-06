import React,{useContext, useState} from 'react';
import { SocketContext } from '../context/SocketProvider';
import AttachmentFile from'./AttachmentFile';
import UserTypingCom from './UserTypingCom';
import Picker from 'emoji-picker-react';

const SendMessageFrom = ({customer_ID,setMesse,messe}) => {
 
const [socket] = useContext(SocketContext);


const [showComponent , setShowComponent] = useState(false)
const [selectedFile , setSelectedFile] = useState(null)
const [tog,setToggle] = useState(false)

//console.log(messe,"selected file")
var obj = JSON.parse(localStorage.getItem('user'));
let toVisit = '';

const onEmojiClick = (event, emojiObject) => {

let prev_val = messe.postVal
setMesse({ postVal : prev_val + emojiObject.emoji})
 
};
const handleChange=(e)=> {
  
  setMesse({
    postVal : e.target.value
  });

}

const toggle = () =>{
  setToggle(!tog)
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
    
        return(
<>
<div> {(tog) ? <Picker onEmojiClick={onEmojiClick} pickerStyle={{height: '200px' }}/>:false}</div>
<form onSubmit={handleSubmit}>

<UserTypingCom customer_ID={customer_ID} />
{showComponent ?
           <AttachmentFile messe={messe} _onButtonClick={_onButtonClick }setShowComponent={setShowComponent}setSelectedFile={setSelectedFile}customer_ID={customer_ID} selectedFile={selectedFile} />:
           false
}
 
  <div className="submitComment" >
                                 
                             <i className="smileFace fa fa-smile-o" onClick={toggle}> </i>
                             <input type="text" className="form-control"  value={messe.postVal}   onChange={handleChange} placeholder="Write your message" />
                             <a href={() => false} className="btn btn-success btn-submitComment" onClick={handleSubmit} ><i className="fa fa-paper-plane" ></i></a>
                             <a href={() => false} className="btn btn-attachChat"><i className="fa fa-paperclip"onClick={()=>{_onButtonClick()}}></i></a>
                             {/* <a href={() => false} className="btn btn-audio"><i className="fa fa-microphone"></i></a> */}
                             
                         </div>
</form>
</>

 )
    }

export default SendMessageFrom;