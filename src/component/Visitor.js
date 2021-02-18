import React ,{ useState,useEffect, useContext}from 'react';
  import UserChatPopUp from './UserChatPopUp';
import Navbar from './Navbar'
import Header from './Header';
import getStorage from './getStorage';
import { Redirect } from 'react-router-dom';
// import useSocket from 'use-socket.io-client';
 import { UserContext } from '../context/UserContext';
 import { UserList } from '../context/UserList';
// import { SocketContext } from '../context/SocketProvider';
import { UserMessages, MessageContext } from '../context/MessageContext';





const Visitor = ({handle,mess,setMess,clicked,setClicked,customer_ID,setCustomer_ID}) => {
  const [visits,dispatch] = useContext(UserList);
  const [userlog] = useContext(UserContext);
 const [messages,Messagedispatch] = useContext(MessageContext)
 
  var obj = JSON.parse(localStorage.getItem('user'));
 
 const chnageActiveUser = (visitor_id) => {
  console.log(Messagedispatch,'sssdoooo')
  var obj = JSON.parse(localStorage.getItem('user'));
    const customer_ID =  visitor_id;
    Messagedispatch({
      type: "Current-active-user",
      payload: {visitorId : visitor_id}
    });
    setCustomer_ID({id: customer_ID})
    setClicked(true);
    setMess(true);
   const agent_name = obj.data.agent_name
    dispatch({
      type: "reSetSTATE",
      payload: {agent_name : agent_name, visitor_id : visitor_id} 
    });
    
     //  socket.emit('update-room',{ visitor_id : customer_ID , agent_id : obj.data.agent_id , agent : obj.data.agent_name});
      
  }

 
   
    if(getStorage())
    return(  
         
  <>
     
     <div class="mainBody">
        
        <Header />
        <div class="pageSection">
           <div class="col-md-6">
            <h3 class="genericPageHeading">Currently UnAssigned Clients <span class="colorGreen">({visits.filter(x => x.agent_name == "").length})</span></h3>
            </div>

            
          
            

           <div class="tableListing">
               
               
               
               <table class="table">
                   
                   <thead>

                 
                       <tr>
                           <th><input type="checkbox" /></th>
                           <th>User Name</th>
                           <th>Continent / Platform</th>
                           <th>Online</th>
                           <th>Agent</th>
                           <th>Viewing</th>
                           <th>Referrer</th>
                           <th>Visits</th>
                           <th>Chat</th>
                           
                           
                       </tr>
                       </thead>
                   
                       {(visits.filter(x => x.agent_name == "").length > 0 ) ?
                                         visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name === "" || null).map(( item => 
                       <tr  key={item.visitor_id} >
                           <td><input type="checkbox" /></td>
                           <td><a href={() => false} class="userName openChatPopup" onClick={()=>chnageActiveUser(item.visitor_id,item.agent_name)}>{item.visitor_name}</a></td>
                           <td><a href={() => false}><img src="assets/images/flag.png" /></a><a href={() => false}><img src="assets/images/chrome.png" /></a><a href={() => false}><img src="assets/images/pc.png" /></a><a href={() => false}><img src="assets/images/apple.png" /></a></td>
                           <td>{item.totalhournumber}</td>
                           <td>{item.agent_name}</td>
                           <td>Uptown Logo Design | Client Area..</td>
                           <td>Google.com</td>
                           <td>99</td>
                           <td>01</td>
                   
                       </tr>
                       )):
                         <li>no user online</li>
                         }
                     




                     

                 
                       
                       
                       
                   
                   
               </table>
               
           </div>
       
            
            
            
        </div>

        <div class="pageSection">
           <div class="col-md-6">
            <h3 class="genericPageHeading">{obj.data.agent_name}'s Clients<span class="colorGreen">({visits.filter( x => x.agent_name !== "").length})</span></h3>
            </div>

            
          
            

           <div class="tableListing">
               
               
               
               <table class="table">
                   
                   <thead>

                 
                       <tr>
                           <th><input type="checkbox" /></th>
                           <th>User Name</th>
                           <th>Continent / Platform</th>
                           <th>Online</th>
                           <th>Agent</th>
                           <th>Viewing</th>
                           <th>Referrer</th>
                           <th>Visits</th>
                           <th>Chat</th>
                           
                           
                       </tr>
                       </thead>
                      
                       {(visits.filter(x => x.agent_name !== "" || null).length > 0  )  ?
                           visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name !== "" || null).map(( item => 

                       <tr  key={item.visitor_id} >
                           <td><input type="checkbox" /></td>
                           <td><a href={() => false} class="userName openChatPopup" onClick={()=>chnageActiveUser(item.visitor_id,item.agent_name)}>{item.visitor_name}</a></td>
                           <td><a href={() => false}><img src="assets/images/flag.png" /></a><a href={() => false}><img src="assets/images/chrome.png" /></a><a href={() => false}><img src="assets/images/pc.png" /></a><a href={() => false}><img src="assets/images/apple.png" /></a></td>
                           <td>{item.totalhournumber}</td>
                           <td>{item.agent_name}</td>
                           <td>Uptown Logo Design | Client Area..</td>
                           <td>Google.com</td>
                           <td>99</td>
                           <td>01</td>
                   
                       </tr>
                       )):
                         <li>no user online</li>
                         }
                     




                     

                       
                       
                       
                   
                   
               </table>
               
           </div>
       
            
            
            
        </div>
        </div>





        






        
         {/* <div className="row">
            <div className="headingFilter">
                
            <div className="col-md-6">
                   <h3>Total Client’s <span className="clientCount">({visits.length})</span> </h3>
                </div>
              
                
           
                
                <div className="col-md-6">
              
              <div className="bothSelect">
          
              
                  <div className="selectOverlay"></div>
              </div>
        
              
              </div>
              
                
            </div>
            
        </div>
     
        
        
        
        
        
        <div className="ChatListing">
            <div className="row">
                <div className="AccordianChat active">
                   
                    <div className="AccordianHead">
                        <div className="col-md-8">
                            <span className="ChatCount">{visits.filter(x => x.agent_name == "").length}</span>
                            <span className="ChatHeading">Un assigned client’s</span>
                            <span className="ChatEdit"><a href={() => false}>Edit</a></span>
                            <span className="ChatEdit"><a href={() => false}>UnPin</a></span>
                            
                        </div>
                  
                        <div className="col-md-4"><a href={() => false} className="AccordianToggle"><i className="far fa-chevron-up"></i></a></div>
               
                    </div>
           
                    
                    
                    <div className="AccordianBody">
                                    
                        <div className="ChatTable">
                                 <table className="table">
                                    <thead>
                                       <tr>
                                          <th scope="col">&nbsp;</th>
                                          <th scope="col">Username</th>
                                          <th scope="col">Continent / Platform</th>
                                          <th scope="col">Online</th>
                                          <th scope="col">Agent</th>
                                          <th scope="col">Viewing</th>
                                          <th scope="col">Referrer</th>
                                          <th scope="col">Visits</th>
                                          <th scope="col">Chats</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                    
                                      {(visits.filter(x => x.agent_name == "").length > 0 ) ?
                                         visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name === "" || null).map(( item => 
                                          <tr key={item.visitor_id} onClick={()=>chnageActiveUser(item.visitor_id,item.agent_name)}>
                                            <td>
                                              <a href={() => false}>
                                                <img src="assets/images/clickicon.png" alt="-" onClick={()=>chnageActiveUser(item.visitor_id)} />
                                              </a>
                                            </td>
                                            <td>
                                              <span className="userNameIntable"><a href={() => false} className="openchat"  
                                              onClick={()=>chnageActiveUser(item.visitor_id)}>{item.visitor_name}</a></span>
                                            </td>
                                             <td><span className="newcountrycode"><span className="fgca"></span></span> 
                                                <img src="assets/images/browser-ch.jpg" alt="-"/>
                                                <img src="assets/images/system-pc.jpg" alt="-"/>
                                                <img src="assets/images/system-mac.jpg" alt="-"/>
                                             </td>
                                             <td>{item.totalhournumber}</td>
                                             <td>{item.agent_name}</td>
                                             <td>Uptown Logo Design | Client Area..</td>
                                             <td><img src="assets/images/gicon.png" alt="-"/>  google.com</td>
                                             <td>99</td>
                                             <td>1</td>
                                          </tr> 
                                          )):
                                          <li>no user online</li>
                                         }
                                          
                                      
                                    </tbody>
                                 </table>
                              </div>
                        
                    </div>
                 
                    
                </div>
         
                
                
            
                
            </div> 



            <div className="row">
                <div className="AccordianChat active">
                   
                    <div className="AccordianHead">
                        <div className="col-md-8">
                            <span className="ChatCount">{visits.filter( x => x.agent_name !== "").length}</span>
                            <span className="ChatHeading">Currently serving client’s</span>
                            <span className="ChatEdit"><a href={() => false}>Edit</a></span>
                            <span className="ChatEdit"><a href={() => false}>UnPin</a></span>
                            
                        </div>
                  
                        <div className="col-md-4"><a href={() => false} className="AccordianToggle"><i className="far fa-chevron-up"></i></a></div>
               
                    </div>
           
                    
                    
                    <div className="AccordianBody">
                                    
                        <div className="ChatTable">
                                 <table className="table">
                                    <thead>
                                       <tr>
                                          <th scope="col">&nbsp;</th>
                                          <th scope="col">Username</th>
                                          <th scope="col">Continent / Platform</th>
                                          <th scope="col">Online</th>
                                          <th scope="col">Agent</th>
                                          <th scope="col">Viewing</th>
                                          <th scope="col">Referrer</th>
                                          <th scope="col">Visits</th>
                                          <th scope="col">Chats</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                    {(visits.filter(x => x.agent_name !== "" || null).length > 0  )  ?
                                      
                                         visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name !== "" || null).map(( item => 
                                          <tr key={item.visitor_id} onClick={()=>chnageActiveUser(item.visitor_id)}>
                                            <td>
                                              <a href={() => false}>
                                                <img src="assets/images/clickicon.png" alt="-" onClick={()=>chnageActiveUser(item.visitor_id)} />
                                              </a>
                                            </td>
                                            <td>
                                              <span className="userNameIntable"><a href={() => false} className="openchat" onClick={()=>chnageActiveUser(item.visitor_id)}>{item.visitor_name}</a></span>
                                            </td>
                                             <td><span className="newcountrycode"><span className="fgca"></span></span> 
                                                <img src="assets/images/browser-ch.jpg" alt="-"/>
                                                <img src="assets/images/system-pc.jpg" alt="-"/>
                                                <img src="assets/images/system-mac.jpg" alt="-"/>
                                             </td>
                                             <td>{item.totalhournumber}</td>
                                             <td>{item.agent_name}</td>
                                             <td>Uptown Logo Design | Client Area..</td>
                                             <td><img src="assets/images/gicon.png" alt="-"/>  google.com</td>
                                             <td>99</td>
                                             <td>1</td>
                                          </tr> 
                                          )):
                                         <li> No user assigned </li> }
                                          
                                      
                                    </tbody>
                                 </table>
                              </div>
                        
                    </div>
                 
                    
                </div>
         
                
                
            
                
            </div> 
                             
            
        </div>
        
        
                             
            
       
        
   
    

 */}

      


</>
    )
    else
    return <Redirect to="/" />

}

export default Visitor;
