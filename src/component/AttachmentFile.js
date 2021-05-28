import axios from 'axios';   
import React, {useContext} from 'react'; 
import { SocketContext } from '../context/SocketProvider';
  
const AttachmentFile = ({setShowComponent,setSelectedFile,selectedFile, customer_ID,messe}) => { 
   
  const [socket] = useContext(SocketContext);
 
  var obj = JSON.parse(localStorage.getItem('user'));
  let toVisit = '';
  

  const onFileChange = event => { 
    const imageFile = event.target.files[0];
// console.log(imageFile,"image")
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





  //  const onFileChange = event => { 
  //     const imageFile = event.target.files[0];

  //     if (!imageFile) {
  //       // setSelectedFile({ invalidImage: 'Please select image.' });
  //       alert('Please select image');
  //       return false;
  //     }
     
  //     // if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
  //     //   // setSelectedFile({ invalidImage: 'Please select valid image.' });
  //     //   alert('Please select valid image. Only jpg|jpeg|png|gif format allowed');
  //     //   return false;
  //     // }

  //     setSelectedFile( event.target.files[0] ); 
  //   }; 
     

    // const closee = () =>{
    //   setShowComponent(false)
    // }
    // On file upload (click the upload button) 
    const onFileUpload = () => { 
      if (selectedFile == null){
        alert("Please Select Image")
        return false
      }
      const formData = new FormData(); 
    //  console.log(selectedFile,"selectedFile")
      formData.append('file', selectedFile); 
     
      var message = 'image';
      // if(messe.postVal != null || messe.postVal != "" || messe.postVal !== undefined ){
      //   message = messe.postVal;
      // }
      toVisit = customer_ID.id;
      axios.post("http://173.254.252.226:5001/upload/file", formData).then((res)=>{
        socket.emit('chat-msg',{msg:message,msgFrom: obj.data.agent_id ,msgTo:toVisit,date:Date.now(),type:"agent",file:res.data.file, repMsgId:''});
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
        { <a href={()=> false} className={"closeAttachment"} ><i className={"fa fa-close"} ></i></a> }
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