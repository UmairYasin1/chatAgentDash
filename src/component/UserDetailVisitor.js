import React from 'react';
import { handleRef } from '@fluentui/react-component-ref';

const UserDetailVisitor = ({visits,customer_ID,handle}) => {
    const onClic = () => {
        handle()
     
      
    }

    return(

        <div class="mainUserDetailArea">
                    
        <div class="chatDetailHeading">
            <h3>General Information</h3>
        </div>
  
        {visits.filter(item => item.visitor_id === customer_ID.id).map(item => ( 
        <div class="sideBarHeightScoller">
         
            <div class="currentUserInfo">
                 <div class="media">
                      <div class="media-left">
                       <span class="onlineStatus online"></span>
                        <span class="chatUserImg">
                            <img src="assets/images/user.jpg" class="media-object"/>
                        </span>
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">{item.visitor_name}</h4>
                        <p class="msg">Marketing Manager</p>
                      </div>
                    </div>
        
            </div>
       

            <div class="userContactInfo">
                <h4>Contact Info</h4>
                <a href="javascript:;"><span class="fa fa-phone"></span> +1-541-751-2483</a> | <a href="javascript:;"><span class="fa fa-map-marker"></span> {item.country}</a> | <br/>
                <a href="javascript:;"><span class="fa fa-envelope-o"></span> daria@gmail.com</a> 

            </div>
    


            <div class="userAttachedFiles">
                <h3>Attachments (7) <a href="javascript:;" class="pull-right">View All</a></h3>


                <ul>
                    <li><img src="assets/images/laptop.jpg" alt="-" class="img-responsive" />
                    </li>
                    <li><img src="assets/images/laptop.jpg" alt="-" class="img-responsive" />
                    </li>
                    <li><img src="assets/images/laptop.jpg" alt="-" class="img-responsive" />
                    </li>
                    <li><img src="assets/images/laptop.jpg" alt="-" class="img-responsive" />
                    </li>
                </ul>

            </div>
        

            {(item.payment_link === "" || item.payment_link === null ) ? 
            <div class="instantPayment">
                <h3>Instant Payment</h3>

                <div class="paymentForm">
                    <div class="form-group">
                        <label>Package Name</label>
                        <input type="text" class="form-control" placeholder="Package Name" />
                    </div>
                
                    <div class="form-group">
                        <label>Package Name</label>
                        <input type="text" class="form-control" placeholder="Package Name" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" placeholder="Price" />
                    </div>
           
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" placeholder="Description">
                        </textarea>
                    </div>
          
                    <div class="form-group">
                        <input type="submit" value="Generate Link" class="btn btn-submit" />
                    </div>
     
                </div>
           
           
            </div>: 
            
            <a href={() => false} className="generateLink text-center"  onClick={()=> window.open(item.payment_link, "_blank")}>Project Link</a>
        
        }
          
    
     
        </div>
  
  ))}
      
 </div>

    )}
export default UserDetailVisitor;

{/* <div className="UserDetailsPanel">
    <div className="user-details">
        <h3>User Details</h3>
           
    
        <a href={() => false} className="btnAction closeWin" onClick={onClic}><i className="fas fa-times"></i></a>
        <a href={() => false} className="btnAction fullshowbtn" onClick={onClic}><i className="fas fa-window-minimize"></i></a>
         {/* <a href="javascipt:;" className="btnAction closeSideChat"><i className="fa fa-arrow-right" onClick={slide}></i></a> 
    </div>
   
    {console.log("visit",visits)}
    {visits.filter(item => item.visitor_id === customer_ID.id).map(item => ( 
    <div className="UserRightSection">
    
   
  
   <div className="generalInfo">
   
    <h3>General Information</h3>
    <ul>
    <li className="contact">
      <div className="wrap">
        <div className="img"> {item.visitor_name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()}  </div>
        <div className="meta">
    <p className="name">{item.visitor_name}</p>
          <p className="preview">You just got LITT up, Mike.</p>
        </div>
      </div>
    </li>
        
    </ul>
       
    <div className="timeAndLocation">
       
    <p><span className="far fa-clock"></span> {item.createdate}</p>
       <p><span className="far fa-thumbtack"></span>{item.country}</p>
    </div>
    
    {/* <Map /> 
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
    
     <div className="generalBox blue">
     {(item.payment_link === "" || item.payment_link === null ) ? 
     
       <div className="instantLinks">
                                <h5>Instant Links</h5>
                                <div className="dropdown">
                                    <div className="dropdownBtn dropdown-toggle" type="button" data-toggle="dropdown">Package Name
                                        <span> <img src="assets/images/caret.png" alt="" /></span></div>
                                    <ul className="dropdown-menu">
                                        <li><a href={() => false}>Package 1</a></li>
                                        <li><a href={() => false}>Package 2</a></li>
                                        <li><a href={() => false}>Package 3</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdownBtn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Price - $500 -
                                        <span> <img src="assets/images/caret.png" alt="" /></span></div>
                                    <ul className="dropdown-menu">
                                        <li><a href={() => false}>1</a></li>
                                        <li><a href={() => false}>2</a></li>
                                        <li><a href={() => false}>3</a></li>
                                    </ul>
                                </div> 
                                <input type="text" placeholder="Price" class="form-control" value=""></input>
                                <textarea placeholder="Description"></textarea>
                                <a href={() => false} className="generateLink text-center">Generate Link</a>
                            </div>:
                            
                             <a href={() => false} className="generateLink text-center"  onClick={()=> window.open(item.payment_link, "_blank")}>Project Link</a> }
                          
    </div> 

        <div className="generalBox">
        <h3>Technology</h3>
           
        <ul className="listItemsInfo">
            <li> 
                <span className="infoText">ip address:</span>
                <span className="infoDetail">
    <a href={() => false}>{item.ipaddress}</a></span>
            </li>
             <li> 
                <span className="infoText">Os device:</span>
                <span className="infoDetail">
    <a href={() => false}>{item.os}</a></span>
            </li>
             <li> 
                <span className="infoText">Browser:</span>
                <span className="infoDetail">
                    <a href={() => false}>{item.browser}</a></span>
            </li>
            <li> 
                <span className="infoText">User agent:</span>
                <span className="infoDetail">
                    <a href={() => false}>User agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</a></span>
            </li>
        </ul>
           
    </div>
      
    <br/><br/><br/><br/><br/><br/><br/>
    
 </div>    
     ))}
    
    
    
</div>*/}
