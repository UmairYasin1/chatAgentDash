import React,{useState,useEffect, useContext} from 'react';
import MessageList from './MessageList';
 import SendMessageFrom from './SendMessageFrom';
import Title from './Title';

import Map from './Map'

import { MessageContext } from '../context/MessageContext';
import SideListMessage from './SideListMessage';
import UserDetailVisitor from './UserDetailVisitor';
// import { UserMessages } from '../context/MessageContext';
import { UserList } from '../context/UserList';
//  import { MessageContext } from '../context/MessageContext';
import { SocketContext } from '../context/SocketProvider';
import { MessageCounter } from '../context/MessageCounter';

const UserChatPopUp = ({setClicked,clicked,handle,customer_ID,setCustomer_ID,mess,setMess}) =>{

const [slider, setSlider] = useState(false);
const [visits] = useContext(UserList);
const [messages,Messagedispatch ]= useContext(MessageContext);
const [messe,setMesse] = useState({postVal : ""});
const [searchTerm,setSearchTerm] = useState('')
const [socket] = useContext(SocketContext)
const [setCount] = useContext(MessageCounter)
 let toUser = customer_ID.id;
 const [mini , setMini] = useState (false)
  // let toUser = 'BvTV6QGfw';
  let roomId = '';
  const agent_id = "";
  const onC = () => {
    setClicked(!clicked)
    setMini(false)
      console.log('clicks',clicked)
  
  
  }
const minimize = () =>{
setMini (true)
setClicked(!clicked)
setMini (false)
}
  useEffect(()=>{
    //  setCount(0)
  },[])

useEffect(()=>{
  
  setMess(false)

},[mess])
  

      const chnageActiveUser = (visitor_id) => {
        // alert(visitor_id)
        var obj = JSON.parse(localStorage.getItem('user'));
        const customer_ID =  visitor_id;
        Messagedispatch({
          type: "Current-active-user",
          payload: {visitorId : visitor_id}
        });
        setCustomer_ID({id: customer_ID})
          setMess(true);
        
          //  setCond(true);
        //  socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name});
     }

      const editSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
        //console.log('value',searchTerm)
      }
   
      const dynamicSearch = () => {
        // console.log('hey',searchTerm)
       return  visits.filter(f => f.visitor_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
         
       }
      //  console.log(clicked,"widgetstatus")
        return(
          <>
         
<div class={mini ?"ChatPopUp activateMinimize" : "ChatPopUp"} style={clicked ?  {display:'block'} :{display:'none'} }> 
     <div class="UserChatPopupWrap">
        <a  href={() => false}  class="btn btn-minimize" onClick={minimize}>-</a>
        <a  href={() => false}  class="btn btn-close" onClick={onC}>X</a>
        <div class="InnerUserChatWrap">
                
         <div class="LeftUserListing">

        <div class="chatLeftHeading">
                         <h3>Chat Served</h3>
                         <a  href={() => false} class="collapsMenu"><span class="fa fa-bars"></span></a>
                     </div>
                     <div class="UpperMenu">
                         <a  href={() => false}  class="active">Chats</a>
                         <a  href={() => false} >Group Chats</a>
                         <a  href={() => false} >Contact</a>
                     </div>
                     <div class="searchChatUser">
                        <i class="fa fa-search"></i>
                         <input type="text" class="form-control" placeholder="Search People or Messages"  onChange={editSearchTerm} onSubmit={dynamicSearch}/>
                         {/* <input type="text" class="form-control" placeholder="Search People or Messages" />  */}
                     
                     </div>
                           <SideListMessage names={dynamicSearch()} customer_ID={customer_ID} chnageActiveUser={(a)=>chnageActiveUser(a)} visits={visits}/> 
                     </div>      
                     <div class="RightUserChatDetails">
                 
                     <div class="mainChatArea">
                   
                     <div class="chatHeading">
                        
                        <Title customer_ID={customer_ID} visits={visits}/>
                        
                    </div>
                    <div class="UserAgentChating">
                      <div class="chatingBoxMain">
                            <MessageList  mess={mess} visits={visits} customer_ID={customer_ID}  socket={socket} setMess={setMess}/>
                            <SendMessageFrom setMesse={setMesse} customer_ID={customer_ID}  messe={messe}  setMess={setMess} /> 
                   </div>
             </div>
         </div>
     
                 <UserDetailVisitor   visits={visits} customer_ID={customer_ID} handle={handle}/>
                 
                 </div>
                 
        </div>
       
    </div>
 
     </div>
 
     <div class="ChatPopUpOverlay" style={clicked ? {display:'block'}:{display:'none'} }></div>


{/* <div className="userChatPupopWrap" style={clicked ? {display:'block'} : {display:'none'}}>
    <div className="userChatPupop">
<div id="userChatDashboard" className={slider? 'FullShow' : "none"} >

<div id="sidepanel">
<div id="search">
  <label for=""><i className="fa fa-search" aria-hidden="true"></i></label>
  <input type="text" placeholder="Search (Press “/“ to focus)"  onChange={editSearchTerm} onSubmit={dynamicSearch}/>
</div>
<div id="contactsList" className="chatContactListScroll">
 <SideListMessage names={dynamicSearch()} customer_ID={customer_ID} chnageActiveUser={(a)=>chnageActiveUser(a)}/>
</div>
</div>

<div className="content">
    <Title customer_ID={customer_ID} visits={visits}/>
    <MessageList  mess={mess} visits={visits} customer_ID={customer_ID}  socket={socket} setMess={setMess}/>
    <SendMessageFrom setMesse={setMesse} customer_ID={customer_ID}  messe={messe}  setMess={setMess} /> 
</div>
    <UserDetailVisitor   visits={visits} customer_ID={customer_ID} handle={handle}/>
</div>  
    </div>
  </div>

<div className="chatoverlay " style={clicked ? {display:'block'} : {display:'none'}}></div> */}


</>
        )
    }

export default UserChatPopUp;