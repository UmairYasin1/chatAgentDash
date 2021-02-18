import React,{useState, useEffect, useContext} from 'react';

import Header from './Header';
import Navbar from './Navbar';
import getStorage from './getStorage';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { UserListHistory } from '../context/UserListHistory';
//import { MessageContext } from '../context/MessageContext';
//  import useSocket from 'use-socket.io-client';
// import HistoryMessageList from './HistoryMessageList';
import HistoryChatPop from './HistoryChatPop';
import { SocketContext } from '../context/SocketProvider';
import DateFilter from './DateFilter';
import NameContainer from './NameContainer';
const History = () => {
  const [historyMessages , setHistoryMessages] = useState([]);
   const [userlog] = useContext(UserContext);
  const [isActive, setActive] = useState(false);
  const [customer_ID, setCustomer_ID] = useState({id : ''})
  
  const [history] = useContext(UserListHistory);
  const [isChatPopupShown, setChatPopupShown] = useState(false);
  const [socket] = useContext(SocketContext);
  const[mess,setMess] = useState(false)
  const [clicked,setClicked] = useState(false);
  const [searchTerm,setSearchTerm] = useState('')
  // const [messages , setMessages] = useContext(MessageContext);
//  const [socket] = useSocket('http://192.168.100.69:5001/chat');
// console.log('historymessage',messages)
// socket.on('connection', function(){
//  socket.reconnect();
// });
useEffect(()=>{
      
 },[])
  //console.log('history',history)
 
// var obj = JSON.parse(localStorage.getItem('user'));
const editSearchTerm = (e) =>{
  setSearchTerm(e.target.value);
  //console.log('value',searchTerm)
}

const dynamicSearch = () => {
 //console.log('hey',searchTerm)
return  history.filter(f => f.visitor_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  
}
const chnageActiveUser = (visitor_id) => {
 
  const customer_ID =  visitor_id;
  setCustomer_ID({id: customer_ID})
 setActive(!isActive);
 setClicked(!clicked);
 if ( isChatPopupShown === true ){
  setChatPopupShown(false);

  // setTimeout(() => {
  //   setChatPopupShown(true); 
  // }, 0);
 
 }
 else {
  setChatPopupShown(true);
 }
   setMess(!mess);

}

  const cancel = () => {
    setChatPopupShown(false);
  };

  if(getStorage())
    return( 
      
      


      <div class="mainBody">
        
      <Header />
      <div class="pageSection">
           <div class="col-md-6">
            <h3 class="genericPageHeading">Currently Served Clients <span class="colorGreen">({history.length})</span></h3>
            </div>
         


            
            <div class="col-md-6">
               <div class="rightActions">
                <div class="row">
                    <div class="col-md-6">
                       <i class="fa fa-search"></i>
                        <input type="text" value={searchTerm} class="form-control" placeholder="Search by Name" onChange={editSearchTerm} />
                        
                    </div>
                  
                    
                    <div class="col-md-6">
                    <DateFilter/>                  
                    </div>
                
 </div>

  </div>
           
                 </div>
          








            <div class={isActive ? "historyTable activated": "historyTable"} >
                       <div class="tableListing">

                           <table class="table">

                               <thead>
                                   <tr>
                                       <th><input type="checkbox" /></th>
                                       <th>User Name</th>
                                       <th>Agent Name</th>
                                       <th>Time</th>
                                       <th>Rating</th>
                                       <th>Messages</th>
                                   </tr>
                               </thead>
                               <NameContainer names={dynamicSearch()} history={history} chnageActiveUser={(a)=>chnageActiveUser(a)} isActive={isActive}/>
                           </table>

</div>
                  
            </div>
             
            
            
            
            
            
        </div>

        { isChatPopupShown && <HistoryChatPop mess={mess}socket={socket} setChatPopupShown={setChatPopupShown} setHistoryMessages= {setHistoryMessages}isActive={isActive}customer_ID={customer_ID}cancel={cancel}historyMessages={historyMessages}history={history} />}


    </div>



    //   <div>
     
      
       
    //   <div className="col-md-10 mainBody">
               
    //            <Header  />

    //         <div className="row">

    //             <div className="headingFilter">
                    
    //             <div className="col-md-6">
    // <h3>Histroy <span className="clientCount">({history.length})</span> </h3>
    //                 </div>
    //           <div className="col-md-6">
                 
    //                 <div className="bothSelect">
    //                   <div className="col-md-6" >
    //                <span className="form-group posRel SearchChat">
    //                           <i className="fas fa-search" ></i>
    //                           <input type="text" value={searchTerm} placeholder="search by name" className="form-control" onChange={editSearchTerm}/>
    //                  </span>
    //                  </div>
    //                  <div className="col-md-6">
    //                  <DateFilter/> 
    //                  </div>
                       
                 
    //                 {/* <span className="SelectFilter">
    //                     <div className="dropdown styled">
    //                       <a href={() => false} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Group By Activity
    //                       <span className="caret"></span></a>
    //                       <ul className="dropdown-menu">
    //                         <li><a href={() => false}>Group By Activity</a></li>
    //                         <li><a href={() => false}>Group By Activity</a></li>
    //                         <li><a href={() => false}>Group By Activity</a></li>
    //                       </ul>
    //                     </div>
    //                 </span> */}
                  
                    
    //                  {/* <span className="SelectFilter">
    //                     <div className="dropdown styled">
    //                       <a href={() => false} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">List view
    //                       <span className="caret"></span></a>
    //                       <ul className="dropdown-menu">
    //                         <li><a href={() => false}>List view</a></li>
    //                         <li><a href={() => false}>List view</a></li>
    //                         <li><a href={() => false}>List view</a></li>
    //                       </ul>
    //                     </div>
    //                 </span> */}
                
              
    //                     {/* <div className="positionAbsoluteIn">
    //                     <div className="expendableList list1">
    //                         <a href={() => false} className="selector">Group By Activity <i className="fa fa-chevron-down"></i></a>
    //                         {/* <ul>
    //                             <li><a href={() => false} >Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                         </ul> 
                            
    //                     </div>
    //                      <div className="expendableList list2">
    //                         <a href={() => false} className="selector">Group By Activity <i className="fa fa-chevron-down"></i></a>
    //                         {/* <ul>
    //                             <li><a href={() => false} >Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                             <li><a href={() => false}>Group By Activity</a></li>
    //                         </ul> 
                            
    //                     </div>
    //                     </div>
                     
    //                     <div className="selectOverlay"></div> */}
    //                 </div>
            
                    
    //                 </div>
                  
                    
    //             </div>
             
    //         </div>

            
    //         <div className="ChatListing">
    //             <div className="row">
    //                 <div className="AccordianChat active">
                       
    //                     <div className="AccordianHead">
    //                         <div className="col-md-8">
    //                             <span className="ChatCount">0</span>
    //                             <span className="ChatHeading">Unread Messages</span>
                                
    //                         </div>
                          
    //                         <div className="col-md-4"><a href={() => false} className="AccordianToggle"><i className="far fa-chevron-up"></i></a></div>
                        
    //                     </div>
    //                     <div className="AccordianBody">            
    //                         <div className="ChatTable UserInfoTable">  
                                
                         
    //                        { isChatPopupShown && <HistoryChatPop mess={mess}socket={socket} setChatPopupShown={setChatPopupShown} setHistoryMessages= {setHistoryMessages}isActive={isActive}customer_ID={customer_ID}cancel={cancel}historyMessages={historyMessages}history={history} />}
                           
                                    
    //                                  <table className="table">
    //                                     <thead>
    //                                        <tr>
    //                                           <th scope="col">&nbsp;</th>
    //                                           <th scope="col">Name</th>
    //                                           <th scope="col">Agent Name</th>
    //                                           <th scope="col">Time</th>
    //                                           <th scope="col">Rating</th>
    //                                           <th scope="col">Messages</th>
    //                                        </tr>
    //                                     </thead>
    //                                    <NameContainer names={dynamicSearch()} history={history} chnageActiveUser={(a)=>chnageActiveUser(a)} isActive={isActive}/>
    //                                  </table>
    //                               </div>
                            
    //                     </div>
               
                        
                        
    //                 </div>
              
                    
      
    //             </div>
            
    //                       {/* <DateFilter />        */}
                
    //         </div>
          
            
            
            
    //         </div>
         
            
    //     </div>
 
        
        
        
       
    
       
     )

     else
     return <Redirect to="/" />
}

export default History;