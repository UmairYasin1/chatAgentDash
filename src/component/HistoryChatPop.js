import React ,{useContext, useEffect,useState}from 'react';
import HistoryMessageList from './HistoryMessageList';
// import useSocket from 'use-socket.io-client';
// import { SocketContext } from '../context/SocketProvider';
import Map from './Map'
const HistoryChatPop = ({isActive,customer_ID,cancel,historyMessages,history,setHistoryMessages,socket,mess,clicked,setChatPopupShown}) =>{
    const [Active, setAct] = useState(false);
    // const [socket] = useContext(SocketContext);
  const toggle = () =>{
    setAct(true)
  }
  const toggletwo = () =>{
    setAct(false)
  }
    useEffect(()=>{
        return () => {
            socket && socket.removeAllListeners();
           // socket && socket.close(); 
         
     
        };
    },[])
    
    return(
<>

<div class={ isActive ?  "userDetailsSide":"userDetailsSide  activated" } >
            <div class="userDetailsBox">
                    <div class="tabsUsers">
                        <ul>
                            <li class="active"><a href="javascript:;" onClick={toggle} class="transcriptBtn">Transcript</a></li>
                            <li><a href="javascript:;" onClick={toggletwo} class="userInfoBtn">User Info</a></li>
                        </ul>
                    </div>
         
                
                
                <div class="allUserTabs transcriptTab"  style={Active ? { display:'block'} : { display:'none'}}>
                {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                  <>
                    <table class="ratingTagTable">
                        <tr>
                            <td><strong>Rating</strong></td>
                            <td>Lorem ipsum dolor sit amet, consectetuer</td>
                        </tr>
                        <tr>
                            <td><strong>Comment</strong></td>
                            <td>Lorem ipsum dolor sit amet, consectetuer</td>
                        </tr>
                        <tr>
                            <td><strong>Tags</strong></td>
                            <td><span class="tagsTag">Tags</span> <span class="tagsTag">Tags</span> <span class="tagsTag">Tags</span> <span class="tagsTag">Tags</span></td>
                        </tr>
                        
                    </table>
                
                    
                    
                    
                    <div class="userPicStatus">
                            <span class="userPic"><img src="assets/images/uiface.jpg" alt="-" /></span>
                            <span class="userStatus"></span>
                    </div>
                  
                    
                    
                    <div class="visitorInfoDate">
                        <p>Visitor ID# {item.visitor_name} has joined.</p>
                        <p>{item.totaltimelong}</p>
                        
                    </div>
               
                    </>
                ))}
                    
                    <div class="chatHistory">
                        
                        
                        
                        
    
<div class="ChatHistoryBox">
<HistoryMessageList mess={mess} historyMessages={historyMessages} customer_ID={customer_ID} socket={socket} setHistoryMessages={setHistoryMessages}/>
                    
{history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                        <div class="userLeft"> 
                            <p>Visitor of ID# {item.visitor_id} has left.</p>
                        </div>
))}
                        
                    </div>
                     
                            
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </div>
                    
                    
                    
                    
                    
                    
                    
                </div>
              
                {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                
                <div class="allUserTabs userInfoTab" style={Active ? { display:'none'} : { display:'block'}}>
                    
                    <div class="userInfoSide">
                      <div class="col-md-6">
                               
                               
                      
                        <div class="media userstyling">
                          <div class="media-left">
                            
                              <div class="userPicStatus">
                            <span class="userPic"><img src="assets/images/uiface.jpg" alt="-"/></span>
                            <span class="userStatus green"></span>
                            </div>
                         
                              
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">{item.visitor_name}</h4>
                            <p>Marketing Manager</p>
                          </div>
                        </div>
                                 
                                   
                        </div>
            
                        
                        
                        <div class="col-md-6">
                        <div class="selectTag">
                            <select class="form-control">
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                <option>Select Tag</option>
                                
                            </select>
                        
                            </div>
                  
                        </div>
                  
                    </div>
            
                    
                    <div class="contactInfoSideBar">
                        <h3>Contact Info</h3>
                    
                        <ul class="contactIfoLi">
                        <li><span class="fa fa-phone"></span> +1-541-741-2483</li>
                        <li><span class="fa fa-envelope-o"></span> +1-541-741-2483</li>
                        <li><span class="fa fa-map-marker"></span> {item.country}</li>
                        </ul>
                    </div>
             
                    
                    
                    <div class="statsNumber">
                    
                        <div class="col-md-4">
                            <div class="boxStyle">
                                    <span class="numberthing">100</span>
                                    <span class="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
             
                        
                         <div class="col-md-4">
                            <div class="boxStyle">
                                    <span class="numberthing">100</span>
                                    <span class="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
                     
                        
                         <div class="col-md-4">
                            <div class="boxStyle">
                                    <span class="numberthing">100</span>
                                    <span class="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
                    
                    </div>
            
                    
                    
                    <div class="notesSection">
                        <h3 class="styledHeading">Notes</h3>
                        <div class="noteTextArea">
                            <textarea class="form-control">#60205748 150/5 - 30/05/2020 Yet to reflect.</textarea>
                            
                            
                            <div class="orderDateAndTime">
                                    <span class="timeVari">
                                       <span class="fa fa-clock-o"></span>{item.totaltimelong}
                                        </span>
                                  
                                        
                                        <span class="timeVari">
                                        <span class="fa fa-calendar"></span> Yet to reflect. 
                                </span> 
                                   
                                    
                            </div>
                      
                        </div>
                    
                    </div>
                 

                    
                    
                    <div class="visitorPathSection">
                        <h3 class="styledHeading2">Visitor Path</h3>
                        
                       <ul class="listItemsInfo">
            <li> 
                <span class="infoText">Sample Page | Preview your c..</span>
                <span class="infoDetail">
                    <a href="javascript:;">https://uptownlogodesign.com</a></span>
            </li>
             <li> 
                <span class="infoText">Sample Page | Preview your c..</span>
                <span class="infoDetail">
                    <a href="javascript:;">https://uptownlogodesign.com</a></span>
            </li>
             <li> 
                <span class="infoText">Sample Page | Preview your c..</span>
                <span class="infoDetail">
                    <a href="javascript:;">https://uptownlogodesign.com</a></span>
            </li>
        </ul>
                    </div>
                 
                    
                    
                </div>
             
                
                
                
                ))} 
            </div>
            
        </div>
        



















{/* <div className= { isActive ? 'userinfoDiv show': 'userinfoDiv'} >
                                   <div className="userInfoTopLinks">
                                    <div className="userTabs">
                                        <ul>
                                            <li  className={Active ? 'active': null}><a href="javascript:;" className="TranscriptBtn" onClick={toggle} >Transcript</a></li>
                                            <li  className={!Active ? 'active': null}><a  href="javascript:;"  className="UserInfoBtn"  onClick={toggletwo}  >User Info</a></li>
                                        </ul>
                                     </div>
                                     <div className="userDetailAction">
                                        <ul>
                                            <li><a href={() => false} ><span className="fa fa-download"></span></a></li>
                                            <li><a href={() => false} className="" onClick={cancel}><span className="fa fa-times"></span></a></li>
                                        </ul>
                                     </div>
                                     </div>
                                     
                                    <div className="mainUserInfo">
                                       
                                       <div className="Allwrap transcriptWrap" style={Active ? { display:'block'} : { display:'none'}}>
                                       {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                                        <div className="ratingComent borderBottomDotted2">
                                            <ul>
                                                <li>
                                                <div className="col-md-2">Rating</div>
                                                <div className="col-md-10">-</div>
                                                </li>
                                                 <li>
                                                <div className="col-md-2">Comment</div>
                                                <div className="col-md-10">-</div>
                                                </li>
                                                 <li>
                                                <div className="col-md-2">Tag</div>
                                                <div className="col-md-10"><a href="javascirpt:;" className="editBtn"><i className="fa fa-pencil"></i></a></div>
                                                </li>
                                            </ul>
                                        </div>  ))}
                                        {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                                    <div className="chatLog borderBottomDotted2">
                                                  <ul>
                                                      <li>{item.visitor_name} has joined. <span className="pull-right timecolor">{item.createdate}</span></li>
                                                      <li>Visitor ID # {item.visitor_id} has joined. <span className="pull-right timecolor">{item.createdate}</span></li>
                                                      
                                                  </ul>
                                        </div> ))}
                            <div id="userChatInDetail">
    
    
    
    
                            <div className="content">
                                <HistoryMessageList mess={mess} historyMessages={historyMessages} customer_ID={customer_ID} socket={socket} setHistoryMessages={setHistoryMessages}/>
                       
                            {/* <div className="messages">
                              <ul>
                              { historyMessages.filter(item => item.repmsgFrom === customer_ID.id).reverse().map(item => (
             <>
               {(() => {
                 if (item.repmsgFrom === customer_ID.id) {
                   return (
                     
                       <li class="sent"  >
                       <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                 <span class="timeStamp">10:08</span>
                       <p> {item.repmsg}</p>
                     </li>
                   )
                 } else if (item.repmsgFrom === obj.data.agent_id) {
                   return (
                     <li class="replies">
                     <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                               <span class="timeStamp">10:08</span>
                     <p>When you're backed against the wall, break the god damn thing down.</p>
                   </li>
                   )
                 }
               })()}
           
             </>
          
         
         
          ))}
                              </ul>
                            </div> 
                             {history.filter(item => item.visitor_id === customer_ID.id).map(item => ( 
                            <div className="message-input">
                             <p className="text-center">Visitor {item.visitor_id} has left.</p>
                            </div>
                             ))}
                            </div>
                        
    
    
                            </div>  
                                       
                                            
                                        </div>    
                                   
                                        {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                                        <div className="Allwrap userinfoWrap scollStyleGeneric" style={Active ? { display:'none'} : { display:'block'}}>
                                            
                                            <div className="generalInfo">
                                                <h3 className="headingclassName">General Information</h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                    
                                                    <div className="media">
                                                      <div className="media-left">
                                                          <div className="projectName">
                                                              <div className="projectPic">{item.visitor_name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()}</div>
                                                          </div>
    
                                                      </div>
                                                      <div className="media-body">
                                                        <h4 className="media-heading">{item.visitor_name}</h4>
                                                        <p className="media-para">neal.barrows@halvorson.com.</p>
                                                      </div>
                                                    </div>
                                                    
                                                    </div>
                                          
                                                    
                                                    
                                                    <div className="col-md-6">
                                                       <div className="pull-right">
                                                        <div className="chatTag">Chat Tags:</div>
                                                        <div className="chatStatus">
                                                            - Not Available -
                                                        </div>
                                                        </div>
                                                    </div>
                                          
                                                
                                                </div>
                                 
                                                
                                                <div className="row">
                                                    <h4 className="subHeading">Notes:</h4>
                                                    <p className="subPara">#60205748 150/5 - 30/05/2020 Yet to reflect.</p>
                                                </div>
                                              
                                                
                                                <div className="divider"></div>
                                                
                                                <div className="timedateInfo">
                                                    <div className="timeclassName"><img src="assets/images/clock.png" alt="-" />  {item.totaltimelong}</div>
                                                    <div className="locationclassName"><img src="assets/images/pin.png" alt="-" />  {item.country}</div>
                                                </div>
                                                {(item.payment_link === "" || item.payment_link === null ) ? false :<div>
                                                <a href={() => false} className="generateLink text-center"  onClick={()=> window.open(item.payment_link, "_blank")}>Project Link</a> 
                                                </div> }
                                            </div>
                                            
                                            
                                            
                                          
                                                
                                                <Map />
                                           
                                   
                                            
                                            <div className="darkColor userStatistic">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <span className="numberclassName">6</span>
                                                        <p className="visitDetial">Past visits</p>
                                                      </div>
                                                      
                                                      <div className="col-md-4">
                                                        <span className="numberclassName">5</span>
                                                        <p className="visitDetial">Past Chats</p>
                                                      </div>
                                                      
                                                      <div className="col-md-4">
                                                        <span className="numberclassName">49 mins</span>
                                                        <p className="visitDetial">Time on site</p>
                                                      </div>
                                                </div>
                                            </div>
                                            
                                            
                                    <div className="generalBox">
                                        <h3>Visitor Path</h3>
    
                                        <ul className="listItemsInfo">
                                            <li> 
                                                <span className="infoText">Sample Page | Preview your c..</span>
                                                <span className="infoDetail">
                                                    <a href={() => false}>https://uptownlogodesign.com</a></span>
                                            </li>
                                             <li> 
                                                <span className="infoText">Sample Page | Preview your c..</span>
                                                <span className="infoDetail">
                                                    <a href={() => false}>https://uptownlogodesign.com</a></span>
                                            </li>
                                             <li> 
                                                <span className="infoText">Sample Page | Preview your c..</span>
                                                <span className="infoDetail">
                                                    <a href={() => false}>https://uptownlogodesign.com</a></span>
                                            </li>
                                        </ul>
    
                                    </div>
                       
                                            
                                        </div>
                               
                                        ))}
                                     </div>
                                 
                                </div> */}
                                
</>
    )}

export default HistoryChatPop ;