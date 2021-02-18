import React from 'react';

const NameContainer = ({names,history,chnageActiveUser,isActive}) => {

   console.log('name',names)
  return(
       <tbody>
    {names.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).map(( item => 

<tr className={isActive ? 'active': null}>
<td><input type="checkbox" /></td>
<td onClick={()=>chnageActiveUser(item.visitor_id)}><a href={() => false} class="showUserDetailsSideBar">
<span class="userAgent"><img src="assets/images/userImg.jpg" alt="-" class="img-responsive" /></span>
<span class="displayinblock" >{item.visitor_name}</span></a></td>

<td>{item.agent_name}</td>
<td>{item.totaltimeshort}</td>
<td>-</td>
<td>
<p class="maxWidth">Hi there! Welcome back! Would you be interest in Mobile application for your business in just $3999?                       </p>
</td>

</tr>







      //  <tr  className={isActive ? 'active': null} >
      // <td><input type="checkbox" /></td> 
      //   {/* <td><a href={() => false} className="selectCheck" onClick={()=>chnageActiveUser(item.visitor_id)}><span className="checkOval"></span></a></td> */}
      //   <td><a href={() => false} class="userName openChatPopup"></a>{item.visitor_name}</td>
      //   <td>{item.agent_name}</td>
      //   <td>{item.totaltimeshort}</td>
      //   <td>-</td>
      //   <td>Hi there! Welcome back! Would you be interested in Mobile application for your business in just $3999?</td>
      // </tr>
     ))}
    </tbody>)
}

export default NameContainer ;