import React from 'react';

const Title = ({visits,customer_ID}) => {

// console.log('title' ,visitors,customer_ID)

  return(
    <>
    {visits.filter(item => item.visitor_id === customer_ID.id).map(item => (
    <div class="media">
    <div class="media-left">
     <span class="onlineStatus online"></span>
      <span class="chatUserImg">
          <img src="assets/images/user.jpg" class="media-object"/>
      </span>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{item.visitor_name}</h4>
      <p class="msg">{item.totaltimeshort} (online)</p>
    </div>
  </div>
      ))} 
      </>
//     <div class="contact-profile">
//          {visits.filter(item => item.visitor_id === customer_ID.id).map(item => (
//   <>
//       <h3>{item.visitor_name}</h3>
//       <h4><span class="OnlineStatus"></span> {item.totaltimeshort} (online)</h4>
//      </>
//     ))} 

// </div>
        )
}

export default Title;