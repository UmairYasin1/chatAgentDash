import React, { useContext,  useState,useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import {SocketContext} from '../context/SocketProvider';
import axios from 'axios';


import { UserContext } from '../context/UserContext';
const Header =({setWebname,webname})=>{
  
  const [socket] = useContext(SocketContext);
  var obj = JSON.parse(localStorage.getItem('user'));
  
  const [head]= useState(obj) ; 
  
  // const [active,setActive] = useState(true);
  const [userlog, setUserLog] = useContext(UserContext);
  const [brand,setBrand] = useState([])
  console.log("header0")

 useEffect (()=>{
  axios
  .get(`http://173.254.252.226:5001/brand/teambrands?brand_teamId=${obj.data.agent_teamId}`)
    //  {
    //   params: {
    //     brand_teamId:"aZTvNCzE5G"
    //   }
    // }
    
  
  .then((res)=>{

 //console.log(res);
var status = res.data.success
// var token = res.data.accessToken;

var brandss = { 'success':status,data:res.data.brandList };


          //  console.log(brandss,"brands") 
setBrand(brandss.data )
})
// socket.on("get-current-visitor-req", function(obj, callback) {
//   var curVisObj = localStorage.getItem('Current-Vistor');
//   console.log('curVisObj ~~~~~~~~~~~~', curVisObj);
//   curVisObj = curVisObj.replace(/["']/g, "");

//   callback(curVisObj);
// });
socket.on("get-current-visitor-req", function(data, roomId){
  var curVisObj = localStorage.getItem('Current-Vistor');
  //console.log('curVisObj ~~~~~~~~~~~~', curVisObj);

  if(curVisObj !=null)
  {
    curVisObj = curVisObj.replace(/["']/g, "");
  }
  else
  {
    curVisObj = 0;
  }
  
  socket.emit('get-current-visitor-response', curVisObj, data, roomId);
});


// eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

console.log("Brand",brand)
console.log("webname",webname)
 const handleSelect = (event) => {
  setWebname(event.target.value);
};

  const _onLogoutPress = () => {
   
	 axios
	 	    .get('http://173.254.252.226:5001/agent/agentlogout '
	 	   )
	 	    .then((res)=>{

    localStorage.removeItem("user");
     localStorage.removeItem( 'minimize');
     localStorage.removeItem('Current-Vistor')
     //console.log('agent logout 1');
     socket.emit('agent-logout',obj.data.agent_id);
     
    setUserLog(!userlog)
	 	  
	 	  })
  }
  // console.log(webname,"nameselected")
    return (

      <div className="MainHeader">
      <div className="container-fluid">
         <div className="col-md-7">
           
              
              <div className="row">
                
                  <div className="col-md-8">
                      <div className="searchBar">
                             
                         <form className="form-inline">
                         <select value={webname} onChange={handleSelect} className="form-control">
                             <option>Select Brand</option>
                               {brand.map((item =>
                              
                        <option key={item.brand_id} value={item.brand_id} >{item.brand_name}</option>

                               ))}
                                
                             </select>
                            
                             </form>
                             
                      
                      </div> 
            
                      
                  </div>
             
              </div>
        
          
          </div>
   
          
          
           <div className="col-md-5 col-sm-12 col-xs-12">
               <div className="TopSideMenus">
                 
                  
                   
                        
                   
                  <span className="dropdown UserProfileBtnWrap">
                   <a href={()=>false} className="dropdown-toggle" data-toggle="dropdown"> 
                   <span className="ProfileFace"><img src="assets/images/agentavatar.jpg" alt=" " className="profilePic img-responsive" /></span> <span className="ProfileName">{head.data.agent_name}</span>
                   
                     </a>
                     <ul className="dropdown-menu">
                      <li>
                     <a href={()=>false} onClick={_onLogoutPress}> <span className="ProfileName">Logout</span></a>
                     </li>
  </ul>
                 </span>
                  
                
                  
                   
                 </div>
         
          </div>
   
          
     </div>

 </div>
      

    )
}

export default Header;