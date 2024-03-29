import React,{useState,useEffect, useContext,memo, useCallback, useMemo} from 'react';
import MessageList from './MessageList';
 import SendMessageFrom from './SendMessageFrom';
import Title from './Title';

// import Map from './Map'

import { MessageContext } from '../context/MessageContext';
import SideListMessage from './SideListMessage';
import UserDetailVisitor from './UserDetailVisitor';
// import { UserMessages } from '../context/MessageContext';
import { UserList } from '../context/UserList';
//  import { MessageContext } from '../context/MessageContext';
import { SocketContext } from '../context/SocketProvider';
import { MinimizeContext } from '../context/MinimizeContext';
// import { preventOverflow } from '@popperjs/core';


const UserChatPopUp = ({webname,setClicked,clicked,customer_ID,setCustomer_ID}) =>{

const [minimizeUser,setMinimizeUser] = useContext(MinimizeContext);
const [visits] = useContext(UserList);
const [messages,Messagedispatch ]= useContext(MessageContext);

const [searchTerm,setSearchTerm] = useState('')
const [socket] = useContext(SocketContext)
const [humburger,sethumburger] = useState(false)

//  let toUser = customer_ID.id;
 const [mini , setMini] = useState (false)
  // let toUser = 'BvTV6QGfw';
  // let roomId = '';
  // const agent_id = "";
  console.log("UserChatPopUp")

  const onC = (customer_ID) => {

    let removeElement = minimizeUser.findIndex( x => x.visitor_id === customer_ID.id  )
     if(~removeElement){
      minimizeUser.splice(removeElement,1)
      if (minimizeUser.length == 0)   {
        setCustomer_ID({id :''})
         localStorage.setItem('Current-Vistor', JSON.stringify(""))
      }
     }              
else{
  setCustomer_ID({id :''})
  localStorage.setItem('Current-Vistor', JSON.stringify(""))
  if (minimizeUser.length == 0) localStorage.setItem('Current-Vistor', JSON.stringify(""))
  setClicked(!clicked)

}
setMinimizeUser([...minimizeUser])
// localStorage.setItem('minimize',JSON.stringify( minimizeUser.length));
    setClicked(!clicked)
    setMini(false)
    
  }
  // console.log("mini",minimizeUser)
   const humToggler = useCallback(()=>{

   sethumburger(!humburger)
  
  },[humburger])
 
console.log("minniiii",minimizeUser)

    const minimize = (customer_ID) =>{
      var obj = JSON.parse(localStorage.getItem('user'));

          let ind = minimizeUser.findIndex( x => x.visitor_id === customer_ID.id && x.agent_name === obj.data.agent_name )
            if(~ind){
              
             minimizeUser[ind] = visits.find(x => x.visitor_id === customer_ID.id && x.agent_name === obj.data.agent_name ) ;
            }
            else{
            const check= visits.find(x => x.visitor_id === customer_ID.id && x.agent_name === obj.data.agent_name ) 
            if(check){
              minimizeUser.push(visits.find(x => x.visitor_id === customer_ID.id ))}
              else 
              setMini (true)
setClicked(!clicked)
setMini (false)
                
            }
            setMinimizeUser([...minimizeUser])
          
          
        
setMini (true)
setClicked(!clicked)
setMini (false)
          
}
  useEffect(()=>{
  var checkingg = minimizeUser.findIndex(x => visits.find(y=>y.visitor_id == x.visitor_id))
  console.log("checking",checkingg)
  if(~checkingg){
    minimizeUser.splice(checkingg,1)
    if (minimizeUser.length == 0)   {
      setCustomer_ID({id :''})
       localStorage.setItem('Current-Vistor', JSON.stringify(""))
    }}
    setMinimizeUser([...minimizeUser])
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[visits])


 
        const chnageActiveUser = (visitor_id) => {
          console.log("hey")
        var obj = JSON.parse(localStorage.getItem('user'));
        const customer_ID =  visitor_id;
        Messagedispatch({
          type: "Current-active-user",
          payload: {visitorId : visitor_id}
        });
        setCustomer_ID({id: customer_ID})
        const vis_id ={id : customer_ID}
        socket.emit('update-room',{ visitor_id : vis_id , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'Visitor.js'});
       localStorage.setItem('Current-Vistor', JSON.stringify(visitor_id))
     }

      const editSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
    
      }
   
      const dynamicSearch = () => {
       return  visits.filter(f => f.visitor_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))  
       }
      //  clicked ?document.getElementById('foo').style.display = 'block':setTimeout(function() {document.getElementById('foo').style.display = 'none'}, 1000)
    
        return(
          
          <>
<div id="foo" className={clicked ?  "ChatPopUp":"ChatPopUp activateMinimize"} style={ {display:"block" }}> 
     <div className="UserChatPopupWrap">
        <a  href={() => false}  className="btn btn-minimize" onClick={()=>minimize(customer_ID)}>-</a>
        <a  href={() => false}  className="btn btn-close" onClick={()=>onC(customer_ID)}>X</a>
        <div className={humburger ?  "InnerUserChatWrap hideSidebar":"InnerUserChatWrap"}>
                
         <div className="LeftUserListing">

        <div className="chatLeftHeading">
                         <h3>Chat Served</h3>
                         { <a  href={() => false} className="collapsMenu closeSideBarUsers" onClick={humToggler}><span className="fa fa-bars"></span></a> }
                     </div>
                     <div className="UpperMenu">
                         <a  href={() => false}  className="active">Chats</a>
                         {/* <a  href={() => false} >Group Chats</a>
                         <a  href={() => false} >Contact</a> */}
                     </div>
                     <div className="searchChatUser">
                        <i className="fa fa-search"></i>
                         <input type="text" className="form-control" placeholder="Search People or Messages"  onChange={editSearchTerm} onSubmit={dynamicSearch}/>
                         {/* <input type="text" className="form-control" placeholder="Search People or Messages" />  */}
                     
                     </div>
                           <SideListMessage webname={webname} names={dynamicSearch()} customer_ID={customer_ID} chnageActiveUser={(a)=>chnageActiveUser(a)} visits={visits}/> 
                     </div>      
                     <div className="RightUserChatDetails">
                 
                     <div className="mainChatArea">
                   
                     <div className="chatHeading">
                        
                        <Title customer_ID={customer_ID} visits={visits}/>
                        
                        { <a  href={() => false} className="collapsMenu ShowWhenFull openSideBarUsers" onClick={humToggler}><span className="fa fa-bars"></span></a> }

                    </div>
                    <div className="UserAgentChating">
                      <div className="chatingBoxMain">
                            <MessageList   visits={visits} customer_ID={customer_ID}  socket={socket} />
                            <SendMessageFrom customer_ID={customer_ID}  visits={visits}  /> 
                   </div>
             </div>
         </div>
     
                 <UserDetailVisitor   visits={visits} customer_ID={customer_ID} />
                 
                 </div>
                 
        </div>
       
    </div>
 
     </div>
 
     <div className="ChatPopUpOverlay" style={clicked ? {'z-index':'9999', opacity:1, transition: "all 1s ease"}:{'z-index':'-1', opacity:0 , transition: "all 1s ease" } }></div>

</>
        )
    }

export default memo(UserChatPopUp);