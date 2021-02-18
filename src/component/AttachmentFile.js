import axios from 'axios';   
import React, {useContext} from 'react'; 
import { SocketContext } from '../context/SocketProvider';
  
const AttachmentFile = ({setShowComponent,setSelectedFile,selectedFile, customer_ID}) => { 
   
  const [socket] = useContext(SocketContext);
  var obj = JSON.parse(localStorage.getItem('user'));
  let toVisit = '';
    
   const onFileChange = event => { 
      const imageFile = event.target.files[0];

      if (!imageFile) {
        // setSelectedFile({ invalidImage: 'Please select image.' });
        alert('Please select image');
        return false;
      }
     
      if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        // setSelectedFile({ invalidImage: 'Please select valid image.' });
        alert('Please select valid image. Only jpg|jpeg|png|gif format allowed');
        return false;
      }

      setSelectedFile( event.target.files[0] ); 
    }; 
     
    // On file upload (click the upload button) 
    const onFileUpload = () => { 
      const formData = new FormData(); 
     
      formData.append('file', selectedFile); 
     
      toVisit = customer_ID.id;
      axios.post("http://10.1.30.146:5001/upload/file", formData).then((res)=>{
        socket.emit('chat-msg',{msg:'image',msgFrom: obj.data.agent_id ,msgTo:toVisit,date:Date.now(),type:"agent",file:res.data.file, repMsgId:''});
      });
      setSelectedFile(null);
      setShowComponent(false)
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    const fileData = () => { 
     
      if (selectedFile) { 
          
        return ( 
         false
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
         
          </div> 
        ); 
      } 
    }; 
     
   
     
      return ( 
        <div  className="attachmentStyling"> 
            <div> 
              <div className="col-md-8">
                <input type="file" onChange={onFileChange} className={"form-control"} /> 
                </div>
                <div className="col-md-4">
                <button onClick={onFileUpload} className={"btn btn-success"}> 
                  Send file 
                </button> 
                </div>
            </div> 
          {fileData()} 
        </div> 
      ); 
    } 
  
  
  export default AttachmentFile; 