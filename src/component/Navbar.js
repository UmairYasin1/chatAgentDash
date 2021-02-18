import React,{useEffect,useContext} from 'react';
import {Link,useLocation} from 'react-router-dom'
import Dashboard from './Dashboard';


const Navbar = ({setClicked,setReadmsg}) => {
   
  
    let location = useLocation()

   
    
useEffect( () => {
   location = location.pathname;

}, [location.pathname])



const mergeFunct = () => {
    console.log('hey')
    setClicked(true) ;
     setReadmsg(true)
     
} 
    return(
        //      <div className="col-md-2 menuSection">
        //             <a href="javascript:;" className="brandLogo"><img src="assets/images/logo.png" className="img-responsive" /></a>
  
        
        // <h3 className="menuHeading">Main Navigation</h3>
        
        // <ul className="mainMenuUL">
        //     <li  className={`${pathname.match('/dashboard') ? 'active' : ''}`}  ><Link to="/dashboard"><i className="fad fa-chart-bar"  ></i>Home Dashboard </Link></li>
        //     <li  className={`${pathname.match('/visitors') ? 'active' : ''}`} ><Link to='visitors' ><i className="far fa-repeat"></i> Visitors</Link>
        //         {/* <ul className="subMenuUL">
        //         <li><a href={() => false}>Served (4)</a></li>
        //         <li><a href={() => false}>Active</a></li>
        //         </ul> */}
        //     </li>
        // </ul>
        // <h3 className="menuHeading">Analytics &amp; Reports</h3>
        // <ul className="mainMenuUL">
        //     <li  className={`${pathname.match('/history') ? 'active' : ''}`} ><Link to='history' ><i className="far fa-alarm-clock"></i> History</Link></li>
        //     {/* <li><a href={() => false}><i className="fas fa-chart-pie-alt"></i> Analytics &amp; Reports</a></li>
        //     <li><a href={() => false}><i className="far fa-tv"></i> Monitor</a></li>
        //     <li><a href={() => false}><i className="fal fa-cog"></i> Settings</a></li> */}
                
        // </ul>
        // </div>



        <div className="LeftSide">
        <div className="Logo">
            
         <a href={() => false}><img src="assets/images/dino-logo.png" class="img-responsive" alt="-" /></a>
            
        </div>
   
        
        <ul className="SideMenu">
            {/* <li className={`${path.match("dashboard") ? 'active' : ''}`} >< Link  to="/dashboard"><span className="MenuImg"><i class="fa fa-th"></i></span> <span class="menuTxt">Dashboard</span></Link></li> */}
            
            <li  className={`${location.pathname.match("/visitors")? 'active' : ''}`} ><Link to='/visitors' ><span className="MenuImg"><i className="fa fa-users"></i></span> <span className="menuTxt">Visitors</span></Link></li>
            
            <li  className={`${location.pathname.match('/history') ? 'active' : ''}`} ><Link to='/history' ><span className="MenuImg"><i className="fa fa-briefcase"></i></span> <span className="menuTxt">History</span></Link></li>
            
            {/* <li><a href={() => false}><span class="MenuImg"><i className="fa fa-bar-chart"></i></span> <span className="menuTxt">Performance</span></a></li> */}
            {/* <li  style={{borderRadius: '100px' ,border: '1px solid black',padding: '40px' , margin: '40px', color: '#717171'}} onClick={mergeFunct} ><span className="MenuImg"><i className="fa fa-users"></i></span> <span className="menuTxt"> <p style={{color: 'red'}}>{count}</p> Global messages</span>  </li> */}
        </ul>
        
        
    </div>
    )
}
export default Navbar ;