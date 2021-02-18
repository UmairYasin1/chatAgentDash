import React,{useContext, useState,useEffect,useRef} from 'react';
import { SocketContext } from '../context/SocketProvider';
import AttachmentFile from'./AttachmentFile';
import UserTypingCom from './UserTypingCom';
import axios from 'axios'; 


const SendMessageFrom = ({sendMessage,customer_ID,setMesse,messe,setMess,}) => {
 
const [socket] = useContext(SocketContext);
// console.log('setMesse',setMesse)
// console.log("fin",fu)
const [showComponent , setShowComponent] = useState(false)
const [selectedFile , setSelectedFile] = useState(null)



var obj = JSON.parse(localStorage.getItem('user'));

let toVisit = '';
const onbla =()=>{

}

const handleChange=(e)=> {
  
  setMesse({
    postVal : e.target.value
  });
//  console.log("value",messe)
}


// New Coad



// new code




  const handleSubmit = (e) => {
    // appendData()
    e.preventDefault()

    if(messe.postVal == null || messe.postVal.trim() === "")
    {
      return false
    }

    toVisit = customer_ID.id;
    // sendMessage(messe.postVal);
 
    //console.log('selectedFile', selectedFile);
    if(selectedFile === null)
    {
      socket.emit('chat-msg',{msg:messe.postVal,msgFrom: obj.data.agent_id ,msgTo:toVisit,date:Date.now(),type:"agent",file:"", repMsgId:''});
    }
    

    // socket.on('chat-msg',function(data){
    //   // console.log("data",data)
    //   if(data.msg !== ""){
    //     // sendMessage(data.msg)
    //     // setMesse(data.msg);  
    //     setMess(true)         
      
    //   }
     
   
    // }); //end of receiving messages.
    setMesse({
      postVal : ''
    });
  }
  // const helper = useRef();
  // const onFileUpload = () => { 
  
  //   // Create an object of formData 
  //   helper.current = new FormData();
   
  //   // Update the formData object 
  //  helper.append( 
  //     "myFile", 
  //     selectedFile, 
  //     selectedFile.name
  //   ); 
   
  //   // Details of the uploaded file 
  //   console.log(selectedFile); 
   
  //   // Request made to the backend api 
  //   // Send formData object 
    
  // //   axios.post("api/uploadfile", formData); 
  // }; 
 const  _onButtonClick = () => {
      setShowComponent(!showComponent)
    }
    
        return(
<>
<form onSubmit={handleSubmit}>
{/* <div className="message-input"> */}
  <UserTypingCom />
{showComponent ?
           <AttachmentFile setShowComponent={setShowComponent}setSelectedFile={setSelectedFile}customer_ID={customer_ID} selectedFile={selectedFile} />:
           null
}
  {/* <div className="wrap"> */}
  {/* <AttachmentFile /> */}
 
   {/* <i className="fa fa-paperclip attachment" onClick={()=><AttachmentFile /> } aria-hidden="true"></i>  */}
  
   {/* <div className="messages">
     <h1>
       hello
     </h1>
             {theArray}
  </div>  */}
  <div class="submitComment" >
                             <i class="smileFace fa fa-smile-o"></i>
                             <input type="text" class="form-control"  value={messe.postVal} onChange={handleChange} placeholder="Write your message" />
                             <a href={() => false} class="btn btn-success btn-submitComment" onClick={handleSubmit} ><i class="fa fa-paper-plane" ></i></a>
                             <a href={() => false} class="btn btn-attachChat"><i class="fa fa-paperclip"onClick={()=>{_onButtonClick()}}></i></a>
                             <a href={() => false} class="btn btn-audio"><i class="fa fa-microphone"></i></a>
                             
                         </div>

{/* 
  <input type="text" value={messe.postVal} onChange={handleChange} placeholder="Write your message..." />
  <i className="fa fa-paperclip attachment" onClick={()=>{_onButtonClick()}}></i>
  <button className="submit" onClick={()=>{onbla();}} value="Append"><i className="fa fa-paper-plane" aria-hidden="true" ></i></button> */}
 
  {/* </div>
</div> */}
</form>
</>

 )
    }

export default SendMessageFrom;