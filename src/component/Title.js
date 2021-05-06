import React from 'react';

const Title = ({visits,customer_ID}) => {


  return(
    <>
    {visits.filter(item => item.visitor_id === customer_ID.id).map(item => (
    <div className="media">
    <div className="media-left">
     <span className="onlineStatus online"></span>
      <span className="chatUserImg">
          <img src="assets/images/avatar.jpg" className="media-object" alt="pic here "/>
      </span>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{item.visitor_name}</h4>
      <p className="msg">{item.totaltimeshort} (online)</p>
    </div>
  </div>
      ))} 
      </>

        )
}

export default Title;