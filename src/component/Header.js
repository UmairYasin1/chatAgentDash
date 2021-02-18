
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import { UserContext } from '../context/UserContext';
const Header =()=>{
  
  // const LogOut = () => {
  //   setlogged(!logged)
  // }
  // console.log('testing',hit.data.agent_id)
  var obj = JSON.parse(localStorage.getItem('user'));
  const [head,setHead]= useState(obj) ;
  const [active,setActive] = useState(true);
  const [userlog, setUserLog] = useContext(UserContext);
  // useEffect(()=>{
    
  //   setlogg
  // },[])
  const _onLogoutPress = () => {
   
	axios
		   .get('http://10.1.30.146:5001/agent/agentlogout '
		  )
		   .then((res)=>{

    localStorage.removeItem("user");
    setUserLog(!userlog)
		 
		 })
	}
    return (

      <div class="MainHeader">
      <div class="container-fluid">
         <div class="col-md-7">
           
              
              <div class="row">
                
                  <div class="col-md-8">
                      <div class="searchBar">
                             
                         <form class="form-inline">
                             <select class="form-control">
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                                 <option>Select Brand</option>
                             </select>
                            
                             </form>
                             
                      
                      </div> 
            
                      
                  </div>
             
              </div>
        
          
          </div>
   
          
          
           <div class="col-md-5 col-sm-12 col-xs-12">
               <div class="TopSideMenus">
                 
                   <span class="notficationLinkWrap">
                   <a href="javascript:;" class="NotificationsLink dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="BellIcon"></span><span class="numbers"></span>
                  </a>
           
                   <ul class="dropdown-menu notify-drop">
             <div class="notify-drop-title">
               <div class="row">
                 <div class="col-md-6 col-sm-6 col-xs-6">Notifications (<b>1</b>)</div>
                 <div class="col-md-6 col-sm-6 col-xs-6 text-right"><a href="" class="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="tümü okundu."><i class="fa fa-dot-circle-o"></i></a></div>
               </div>
             </div>
        
             <div class="drop-content">
               <li>
                 <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
                 <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href="">Aamir</a> Its your birthday. 
                         <p>Lorem ipsum sit dolor amet consilium. Lorem ipsum sit dolor amet consilium.</p>
                         
                         <a href="">read more</a> <a href="" class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
                 
                 <hr/>
                 <p class="time">6:00pm - 10-09-2020</p>
                 </div>
               </li>
                 <li>
                 <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
                 <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href="">Aamir</a> Its your birthday. 
                         <p>Lorem ipsum sit dolor amet consilium. Lorem ipsum sit dolor amet consilium.</p>
                         
                         <a href="">read more</a> <a href="" class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
                 
                 <hr/>
                 <p class="time">6:00pm - 10-09-2020</p>
                 </div>
               </li>
                 <li>
                 <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
                 <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href="">Aamir</a> Its your birthday. 
                         <p>Lorem ipsum sit dolor amet consilium. Lorem ipsum sit dolor amet consilium.</p>
                         
                         <a href="">read more</a> <a href="" class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
                 
                 <hr/>
                 <p class="time">6:00pm - 10-09-2020</p>
                 </div>
               </li>
                 <li>
                 <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
                 <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href="">Aamir</a> Its your birthday. 
                         <p>Lorem ipsum sit dolor amet consilium. Lorem ipsum sit dolor amet consilium.</p>
                         
                         <a href="">read more</a> <a href="" class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
                 
                 <hr/>
                 <p class="time">6:00pm - 10-09-2020</p>
                 </div>
               </li>
             </div>
             <div class="notify-drop-footer text-center">
               <a href=""><i class="fa fa-eye"></i> View All Notifications</a>
             </div>
           </ul>
                       </span>
           
                
                   
                        
                   <span class="notficationLinkWrap">
                   <a href="javascript:;" class="NotificationsLink"><span class="SettingIcon"></span>
                  </a>
                   </span>
               
                   
                  <span class="dropdown UserProfileBtnWrap">
                   <a href="javascript:;" onClick={_onLogoutPress}> 
                   <span class="ProfileFace"><img src="assets/images/profilepic.png" alt=" " class="profilePic img-responsive" /></span> <span class="ProfileName">{head.data.agent_name}</span>
                   
                     </a>
                 </span>
                  
                   
                 </div>
         
          </div>
   
          
     </div>

 </div>
      

    )
}

export default Header;


      
        {/* <div className="row">
                <div className="col-md-8">
             <div className="topMainLeftBody">
             <a href={() => false} className="backLink"><i className="fal fa-arrow-left"></i></a> 
            <a href={() => false} className="colorMode"><i className="far fa-moon-stars"></i></a>     
            <div className="topSmallMenu ">
                <ul>
                <li className="active">
                    <div className="dropdown styled " >
                      <a href={() => false} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" >Projects
                 <i className="far fa-chevron-down"></i> 
                      </a>
                      {/* <ul className="dropdown-menu">
                        <li><a href={() => false} >Project One</a></li>
                        <li><a href={() => false} >Project Two</a></li>
                        <li><a href={() => false}>Project Three</a></li>
                      </ul> 
                    </div>
                </li>
                <li><a href={() => false}>Uptown Motions (um)</a></li>
               <li><a href={() => false}>Uptown Logo (ut)</a></li> 
                </ul>
            </div>

          <div className="topSmallMenu">
                <ul>
                <li className="active"><a href="javscript:;">Projects <i className="far fa-chevron-down"></i></a></li>
                <li><a href="javscript:;">Uptown Motions (um)</a></li>
                <li><a href="javscript:;">Uptown Logo (ut)</a></li>
                </ul>
            </div> 
              {/* <a href={() => false} className="addMore"><i className="fal fa-plus"></i></a>   
         </div>
         <div className="col-md-4">
                <div className="topMainRightBody navbar-default">
                    {/* <div  className={active ? "notificationWrap dropdown" : "notificationWrap dropdown show"}>
                            <a href={() => false} className="notificationBell dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={active ? "false" : "true"}><i className="fal fa-bell"></i> <span className="notificationType"></span></a>
                            
                             <ul  className={active ? "dropdown-menu notify-drop" : "dropdown-menu notify-drop show"}>
            <div className="notify-drop-title">
            	<div className="row">
            		<div className="col-md-6 col-sm-6 col-xs-6">Notifications (<b>2</b>)</div>
            		<div className="col-md-6 col-sm-6 col-xs-6 text-right"><a href={() => false} className="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="tümü okundu."><i className="fa fa-dot-circle-o"></i></a></div>
            	</div>
            </div>
          
            <div className="drop-content">
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false}class="rIcon"><i className="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i className="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            	<li>
            		<div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"><img src="http://placehold.it/45x45" alt="" /></div></div>
            		<div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href={() => false}>Ahmed</a> is online. <a href={() => false}>click here to chat</a> <a href={() => false} class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
            		
            		<hr/>
            		<p className="time">12/11-2020</p>
            		</div>
            	</li>
            </div>
            <div className="notify-drop-footer text-center">
            	<a href={() => false}><i className="fa fa-eye"></i> Read All Notifications</a>
            </div>
          </ul>
                  
                    </div> 
                 
                    <div className="userSettingMenu" >
                       
                    <span className={active ? "dropdown":"dropdown open show"}>
                    <a href={() => false} className="UserProfile ropdown-toggle" type="button" data-toggle="dropdown">
                        <span className="UserPic"><img src="assets/images/chatUser.jpg" alt="-" onClick={()=>setActive(!active)} /> <span className="UserStatus"></span></span>
          <span className="UserTxt">{head.data.agent_name}</span>

                    </a>
                    <ul className={active ? "dropdown-menu":"dropdown-menu show"}>
                    <li><a href={()=>false} onClick={_onLogoutPress}>Logout</a></li>
                    </ul>
                    </span>
                       
                        
                    </div>
           
                    
                    
                </div>
          
            </div>
             </div> */}