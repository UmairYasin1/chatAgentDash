import { slice } from 'lodash';
import React,{memo} from 'react';

const Title = ({visits,customer_ID}) => {
console.log("title")

  return(
    
    
    <div className="media">
    <div className="media-left">
     <span className="onlineStatus online"></span>
      <span className="chatUserImg">
          <img src="assets/images/avatar.jpg" className="media-object" alt="pic here "/>
      </span>
    </div>
    <div className="media-body">
     
    {visits.filter(item => item.visitor_id === customer_ID.id).map((item) =>{ 
    const id = item.visitor_name
    let lastSix;
    (id.slice(0,2)==="WC")? lastSix = id.slice(id.length - 8) : lastSix = item.visitor_name
      
      
     return (
      <>
      <h4 className="media-heading">{lastSix }</h4>
      <p className="msg">{item.totaltimeshort} (online)</p>
      </>
      )})}
   
    </div>
  </div>
       
      
        )
}

export default memo(Title);