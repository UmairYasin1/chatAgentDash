import React ,{ useEffect,useState,useContext}from 'react';
import { HistoryMessageContext } from '../context/HistoryMessagesContext';
import HistoryMessageList from './HistoryMessageList';


const HistoryChatPop = ({isActive,customer_ID,history,socket,mess}) =>{
    const [Active, setAct] = useState(false);
    const  [histmessages, HistoryMsgdispatch] = useContext(HistoryMessageContext)

  const toggle = () =>{
    setAct(true)
  }
  const toggletwo = () =>{
    setAct(false)
  }
    useEffect(()=>{
        return () => {
            // socket && socket.removeAllListeners();
    
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     var obj = JSON.parse(localStorage.getItem('user'));
    return(
<>

<div className={ isActive ?  "userDetailsSide":"userDetailsSide  activated" } >
            <div className="userDetailsBox">
                    <div className="tabsUsers">
                        <ul>
                            <li className={Active ? 'active': null}><a href={()=>false} onClick={toggle} className="transcriptBtn">Transcript</a></li>
                            <li className={!Active ? 'active': null}><a href={()=>false} onClick={toggletwo} className="userInfoBtn">User Info</a></li>
                            
                        </ul>
                    </div>
         
                <div className="allUserTabs transcriptTab"  style={Active ? { display:'block'} : { display:'none'}}>
                {history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                  <>
                    <table className="ratingTagTable">
                        <tbody></tbody>
                        <tr>
                            <td><strong>Rating</strong></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><strong>Comment</strong></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><strong>Total Messages :</strong></td>
                            <td><strong> {histmessages.filter(item=>(item.repmsgFrom === customer_ID.id && item.repmsgTo === obj.data.agent_id ) || (item.repmsgFrom === obj.data.agent_id && item.repmsgTo === customer_ID.id)).length}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Client Messages :</strong></td>
                            <td><strong> {histmessages.filter(item=>(item.repmsgFrom === customer_ID.id && item.repmsgTo === obj.data.agent_id )).length}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Agent Messages :</strong></td>
                            <td><strong> {histmessages.filter(item=>(item.repmsgFrom === obj.data.agent_id && item.repmsgTo === customer_ID.id)).length}</strong></td>
                        </tr>
                        {/* <tr>
                            <td><strong>Tags</strong></td>
                            <td><span className="tagsTag">Tags</span> <span className="tagsTag">Tags</span> <span className="tagsTag">Tags</span> <span className="tagsTag">Tags</span></td>
                        </tr> */}
                        
                    </table>
                
                    <div className="userPicStatus">
                            <span className="userPic"><img src="assets/images/avatar.jpg" alt="-" /></span>
                            <span className="userStatus"></span>
                    </div>
                  
                    <div className="visitorInfoDate">
                        <p>Visitor ID# {item.visitor_name} has joined.</p>
                        <p>{item.totaltimelong}</p>
                        
                    </div>
               
                    </>
                ))}
                    
                    <div className="chatHistory">
                      
<div className="ChatHistoryBox">
<HistoryMessageList mess={mess}  customer_ID={customer_ID} socket={socket}/>
                    
{history.filter(item => item.visitor_id === customer_ID.id).map(item => (  
                        <div className="userLeft"> 
                            <p>Visitor of ID# {item.visitor_id} has left.</p>
                        </div>
))}
                    </div>
                    </div>
                    
                </div>
              
                {history.filter(item => item.visitor_id === customer_ID.id).map((item) => {
                    var str = item.visitor_email;
                    var walkinCustomer = str.includes(item.visitor_id);
                    const id = item.visitor_name
                    let lastSix;
                    (id.slice(0,2)==="WC")? lastSix = id.slice(id.length - 8) : lastSix = item.visitor_name
                    return(  
                
                <div className="allUserTabs userInfoTab" style={Active ? { display:'none'} : { display:'block'}}>
                    
                    <div className="userInfoSide">
                      <div className="col-md-6">
                        <div className="media userstyling">
                          <div className="media-left">
                              <div className="userPicStatus">
                            <span className="userPic"><img src="assets/images/avatar.jpg" alt="-"/></span>
                            {/* <span className="userStatus green"></span> */}
                            </div>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">{lastSix}</h4>
                            {/* <p>Client</p> */}
                          </div>
                        </div>        
                        </div>
                        <div className="col-md-6">
                        {/* <div className="selectTag">
                            <select className="form-control">
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
                        
                            </div> */}
                  
                        </div>
                  
                    </div>
            
                    
                    <div className="contactInfoSideBar">
                        <h3>Contact Info</h3>
                    
                        <ul className="contactIfoLi">
                        <li><span className="fa fa-phone"></span> {item.phone_number}</li>
                       {(walkinCustomer)? false : <li><span className="fa fa-envelope-o"></span> {item.visitor_email}</li>}
                        <li><span className="fa fa-map-marker"></span> {item.country}</li>
                        </ul>
                    </div>
             
                    
                    
                    <div className="statsNumber">
                    
                        <div className="col-md-4">
                            <div className="boxStyle">
                                    <span className="numberthing">{item.no_of_visits}</span>
                                    <span className="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
             
                        
                         {/* <div className="col-md-4">
                            <div className="boxStyle">
                                    <span className="numberthing">100</span>
                                    <span className="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
                     
                        
                         <div className="col-md-4">
                            <div className="boxStyle">
                                    <span className="numberthing">100</span>
                                    <span className="txtthing">Past Visits</span>
                            </div>
                            
                        </div>
                     */}
                    </div>
            
                    
                    
                    <div className="notesSection">
                        <h3 className="styledHeading">Notes</h3>
                        <div className="noteTextArea">
                            <textarea className="form-control" placeholder="Add your notes.."></textarea>
                            
                            
                            <div className="orderDateAndTime">
                                    <span className="timeVari">
                                       <span className="fa fa-clock-o"></span>{item.totaltimelong}
                                        </span>
                                  
                                        
                                        {/* <span className="timeVari">
                                        <span className="fa fa-calendar"></span> Yet to reflect. 
                                </span>  */}
                                   
                                    
                            </div>
                      
                        </div>
                    
                    </div>
                 
                    
                    <div className="visitorPathSection">
                        <h3 className="styledHeading2">Visitor Path</h3>
                        
                       <ul className="listItemsInfo">
                       {item.visitorPathList.reverse().map(item=>
            <li> 
               
                <span className="infoDetail">
                    <a href={() => false}>{item.completePath}</a></span>
            </li>
            )}
             {/* <li> 
                <span className="infoText">Sample Page | Preview your c..</span>
                <span className="infoDetail">
                    <a href="javascript:;">https://uptownlogodesign.com</a></span>
            </li>
             <li> 
                <span className="infoText">Sample Page | Preview your c..</span>
                <span className="infoDetail">
                    <a href="javascript:;">https://uptownlogodesign.com</a></span>
            </li> */}
        </ul>
                    </div>
                 
                </div>
             
                )})} 
            </div>
            
        </div>
        

                                
</>
    )}

export default HistoryChatPop ;