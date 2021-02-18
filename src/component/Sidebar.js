import React from 'react';

const Sidebar = () => {
    return(
<div className="col-md-2 menuSection">
            
        <div className="TopSpace"></div>
        
        <h3 className="menuHeading">Main Navigation</h3>
        
        <ul className="mainMenuUL">
            <li><a href={()=>false }><i className="fad fa-chart-bar"></i> Home Dashboard</a></li>
            <li className="active"><a href={()=>false }><i className="far fa-repeat"></i> Visitors</a>
                <ul className="subMenuUL">
                <li><a href={()=>false }>Served (4)</a></li>
                <li><a href={()=>false }>Active</a></li>
                </ul>
               
            </li>
        </ul>
        <h3 className="menuHeading">Analytics &amp; Reports</h3>
        <ul className="mainMenuUL">
            <li><a href={()=>false }><i className="far fa-alarm-clock"></i> History</a></li>
            <li><a href={()=>false }><i className="fas fa-chart-pie-alt"></i> Analytics &amp; Reports</a></li>
            <li><a href={()=>false }><i className="far fa-tv"></i> Monitor</a></li>
            <li><a href={()=>false }><i className="fal fa-cog"></i> Settings</a></li>
                
        </ul>
      
</div>
    )
}
export default Sidebar ;