import React,{useContext,useState,useEffect} from 'react';
import { MessageContext } from '../context/MessageContext';
import { SocketContext } from '../context/SocketProvider';

import axios from 'axios';
const UserDetailVisitor = ({visits,customer_ID}) => {
console.log("UserDetailVisitor")
    const [messages] = useContext(MessageContext);
    const serverURL = "http://173.254.252.226:5001";
    const [socket] = useContext(SocketContext);
    const [datapackage,setPackage] = useState({price: 0});
    const [userUpdation , setUserUpdation] = useState({userName : "",userEmail :"",userPhone :""})
    const [itemsToShow,setItemToShow] = useState({item : 3,expanded :false})
    const [pakageID,setPackageID] = useState("")
    const [list,setList] =useState([])
    const [editInfo,setEditInfo]=useState(false);
// console.log("list",pakageID)
const toggle = ()=>{setEditInfo(!editInfo)}
   useEffect(()=>{
        axios
        .get('http://173.254.252.226:5001/package/allpackages')
        .then((res)=>{
      
    //    console.log(res);
       var status = res.data.success
    //   // var token = res.data.accessToken;
      
     var pack = { 'success':status,data:res.data.packageList };
      setList(pack.data )
      
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
       },[])
   
       const handleSelect = (event) => {
        setPackageID(event.target.value);
      };
      
//  console.log(userUpdation,'userUpdation')
 
const onUpdation = (e) =>{
    var currentUserData = visits.filter( x => x.visitor_id === customer_ID.id)
    var hash = currentUserData[0].visitor_uniqueNum
    var username = userUpdation.userName
    var email = userUpdation.userEmail
    var phone_number = userUpdation.userPhone
    

    e.preventDefault();

    axios
        .post('http://173.254.252.226:5001/newvisitor/api/v1/updatevisitorinfo',
        {
            hash,
            username,
            email,
            phone_number
        }
        ).then((res)=>{
            // console.log(res,"updated")
            socket.emit('set-user-data',currentUserData[0].visitor_id);
            setUserUpdation({userName : "",userEmail :"",userPhone :""})
        })
    

}


const userDetailChanger = (e)=>{
setUserUpdation({...userUpdation,
    [e.target.name] :e.target.value
})
}


    const ChangeInput = (e) => {
	  	  setPackage({...datapackage,
	  	     [e.target.name]: e.target.value
	  	  })
	  	  
	   }
    
    const showMore = () => {
        itemsToShow.item === 3 ? (
            setItemToShow( {item: messages.filter(item => item.repfile !== "").length ,expanded: true} )
        ) : (
            setItemToShow({ item : 3, expanded: false })
        )
      }
      var obj = JSON.parse(localStorage.getItem('user'));
      const sendPaymentForm = () => {
        socket.emit('chat-msg',{msg:"To Pay $"+datapackage.price+" for your order click on the Payment Icon to Pay instantly",msgFrom: obj.data.agent_id ,msgTo:customer_ID.id,date:Date.now(),type:"agent",file:"", repMsgId:'', isPaymentForm:true });
        
        socket.emit('show-payment-form-btn', {visitor_Id:customer_ID.id,agent_Id: obj.data.agent_id ,amount:datapackage.price });
      }
    return(

        <div className="mainUserDetailArea">
                    
        <div className="chatDetailHeading">
            <h3>General Information</h3>
        </div>
  
        {visits.filter(item => item.visitor_id === customer_ID.id).map((item) => { 
var str = item.visitor_email;
var walkinCustomer = str.includes(item.visitor_id);
const id = item.visitor_name
let lastSix;
(id.slice(0,2)==="WC")? lastSix = id.slice(id.length - 8) : lastSix = item.visitor_name
            return(
        <div className="sideBarHeightScoller">
         
            <div className="currentUserInfo ">
                 <div className="media">
                      <div className="media-left">
                       <span className="onlineStatus online"></span>
                        <span className="chatUserImg">
                            <img src="assets/images/avatar.jpg" className="media-object" alt="pic here "/>
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="media-heading">{lastSix}</h3>
                        {/* <form className="media-update">
                            <input type="text"  placeholder="insert visitor name " name="name"/>
                            <input type="email"  placeholder="insert visitor email " name="email"/>
                            <button type="submit">udpate</button>
                        </form> */}
                        {/* <p className="msg">Client</p> */}
                      </div>
                    </div>
        
            </div>
            <div className="instantPayment update" >
                
                <h4>Edit Client Info</h4>
                { <button  className="btn btn-showClient btn-success" onClick={toggle}>{editInfo?"hide":"Show"}</button> }
                
           

           {editInfo? <div className="paymentForm">
                    {/* <div className="form-group">
                        <label>Package Name</label>
                        <input type="text" className="form-control" placeholder="Package Name" />
                    </div> */}
                
                   
                    <div className="form-group">
                      
                        <input type="text" className="form-control" placeholder="Name " name="userName" value={userUpdation.userName} onChange={userDetailChanger}  />
                    </div>
                    <div className="form-group">
                     
                        <input type="text" className="form-control" placeholder="Email " name="userEmail" value={userUpdation.userEmail} onChange={userDetailChanger}/>
                    </div>
                    <div className="form-group">
                      
                        <input type="number" className="form-control" placeholder="PhoneNumber " name="userPhone"  value={userUpdation.userPhone} onChange={userDetailChanger} />
                    </div>
           
                    {/* <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" placeholder="Description">
                        </textarea>
                    </div> */}
          
                    <div className="form-group">
                        <input type="submit" value="UPDATE" className="btn btn-submit" onClick={onUpdation}/>
                    </div>
     
                </div>:false}
</div>
            <div className="userContactInfo">
                <h4>Contact Info</h4>
                <ul className="UserStatsInfoLi">
                    <li><a href={() => false}><span className="fa fa-phone"></span> {item.phone_number}</a> </li>
                    <li><a href={() => false}><span className="fa fa-map-marker"></span> {item.country}</a></li>
                    <li><a href={() => false}><span ></span><strong>IP Address:</strong> {item.ipaddress}</a></li>
                {(walkinCustomer) ? false :    <li><a href={() => false}>  <span className="fa fa-envelope-o"> { item.visitor_email}</span></a></li> }
                    <li><a href={() => false}><span ></span><strong>Browser:</strong> {item.browser}</a></li>
                    <li><a href={() => false}><span ></span><strong>Platform:</strong> {item.platform}</a></li>
                    {/* <li><a href={() => false}><span></span><strong>Actual Country:</strong> {item.timezone_location} </a></li> */}
                    <li><a href={() => false}><span ></span><strong>OS:</strong> {item.os}</a></li>
                    <li><a href={() => false}><span ></span><strong>Location:</strong> {item.timezone_location}</a></li>
                </ul>
          
                

            </div>
    
            <div className="visitorPathSection PopupAgent">
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

            <div className="userAttachedFiles">
                <h3>Total Attachments ({ messages.filter(item => item.repfile !== "" && (item.repmsgFrom === customer_ID.id  || item.repmsgTo === customer_ID.id) ).length }) <a href={() => false} className="pull-right" onClick={showMore} >
                    
             { (messages.filter(item => item.repfile !== ""&&  (item.repmsgFrom === customer_ID.id  || item.repmsgTo === customer_ID.id) ).length > 3)  ? itemsToShow.expanded ? (
   <p>View less</p>
  ) : (
    <p> View more</p>
  ):false}
           
                    </a></h3>

                <ul>
                {messages.filter(item => item.repfile !== "" && (item.repmsgFrom === customer_ID.id  || item.repmsgTo === customer_ID.id) ).sort((a,b) => new Date(b.repcreatedOn) < new Date(a.repcreatedOn) ? -1 : -1).slice(0,itemsToShow.item).map(item => (
                    <>
                    
                      {
                          
                      
                          <li><a href={serverURL + "/uploads/" + item.repfile} target = "_blank" rel="noreferrer" ><img src={ serverURL + "/uploads/" + item.repfile} alt="pic here" className="img-responsive" /></a></li> 
                        }
                
                    </>
                ))}
                </ul>

            </div>
        

            {(item.payment_link === "" || item.payment_link === null ) ? 
            <div className="instantPayment">
                <h3>Instant Payment</h3>

                <div className="paymentForm">
                    {/* <div className="form-group">
                        <label>Package Name</label>
                        <input type="text" className="form-control" placeholder="Package Name" />
                    </div> */}
                
                    <div className="form-group">
                        <label>Package Name</label>
                        <select value={pakageID} onChange={handleSelect} class="form-control">
    
                        {list.map((item =>
                              
                              <option key={item.package_id} value={item.package_id}>{item.package_name}</option>
                              
                              
                              
                                                             ))}
 
</select>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" placeholder="Price" name="price" value={datapackage.price} onChange={ChangeInput}  />
                    </div>
           
                    {/* <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" placeholder="Description">
                        </textarea>
                    </div> */}
          
                    <div className="form-group">
                        <input type="submit" value="Generate Link" className="btn btn-submit" onClick={sendPaymentForm}/>
                    </div>
     
                </div>
           
           
            </div>: 
            
            <a href={() => false} className="generateLink text-center"  onClick={()=> window.open(item.payment_link, "_blank")}>Project Link</a>
        
        }
          
    
     
        </div>
  
  )})}
      
 </div>

    )}
export default UserDetailVisitor;