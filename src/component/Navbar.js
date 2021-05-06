import React,{useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {

    let location = useLocation()

useEffect( () => {
   location = location.pathname;

}, [location.pathname])


    return(
      
        <div className="LeftSide">
        <div className="Logo">
            
         {/* <a href={() => false}><img src="assets/images/dino-logo.png" className="img-responsive" alt="-" /></a> */}
         <a href={() => false} className="desktopLogo">DinoChat</a>
         <a href={() => false } className="mobileLogo">DC</a>   
            
        </div>
   
        
        <ul className="SideMenu">
            <li className={`${location.pathname.match("/dashboard") ? 'active' : ''}`} >< Link  to="/dashboard"><span className="MenuImg"><i className="fa fa-th"></i></span> <span className="menuTxt">Dashboard</span></Link></li> 
            
            <li  className={`${location.pathname.match("/visitors")? 'active' : ''}`} ><Link to='/visitors' ><span className="MenuImg"><i className="fa fa-users"></i></span> <span className="menuTxt">Visitors</span></Link></li>
            
            <li  className={`${location.pathname.match('/history') ? 'active' : ''}`} ><Link to='/history' ><span className="MenuImg"><i className="fa fa-briefcase"></i></span> <span className="menuTxt">History</span></Link></li>
            
            {/* <li><a href={() => false}><span class="MenuImg"><i className="fa fa-bar-chart"></i></span> <span className="menuTxt">Performance</span></a></li> */}
           
        </ul>
        
        
    </div>
    )
}
export default Navbar ;