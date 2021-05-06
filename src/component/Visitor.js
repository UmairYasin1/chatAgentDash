import React ,{ useEffect, useContext,useState}from 'react';
// import Header from './Header';
import getStorage from './getStorage';
import { Redirect } from 'react-router-dom';
 import { UserContext } from '../context/UserContext';
import { UserList } from '../context/UserList';
import {  MessageContext } from '../context/MessageContext';
import { SocketContext } from '../context/SocketProvider';

// import useSound from "use-sound";
import Sound from 'react-sound';



const Visitor = ({setMess,setClicked,setCustomer_ID,webname}) => {
  const [visits,dispatch] = useContext(UserList);
 const [userlog] = useContext(UserContext);
 const [messages,Messagedispatch] = useContext(MessageContext)
const [ initialunReadMsg,setInitialunReadMsg] = useState({count : '1'})
const [socket] = useContext(SocketContext)
// console.log("visits",visits)
useEffect(()=>{

  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// const [play] = useSound('assets/audio/tune.mp3', { interrupt: true });
  var obj = JSON.parse(localStorage.getItem('user'));

 const chnageActiveUser = (visitor_id) => {
  //console.log(Messagedispatch,'sssdoooo')

  var obj = JSON.parse(localStorage.getItem('user'));
    const customer_ID =  visitor_id;
    const vis_id ={id : customer_ID}
    console.log(customer_ID);
     socket.emit('update-room',{ visitor_id : vis_id , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'Visitor.js'});
    Messagedispatch({
      type: "Current-active-user",
      payload: {visitorId : visitor_id}
    });
    setCustomer_ID({id: customer_ID})
    setClicked(true);
    //setMess(true);
   const agent_name = obj.data.agent_name
    dispatch({
      type: "reSetSTATE",
      payload: {agent_name : agent_name, visitor_id : visitor_id}
    });
    localStorage.setItem('Current-Vistor', JSON.stringify(visitor_id))
    
  }
 
    if(getStorage())
    return(

  <>


        <div className="pageSection">
           <div className="col-md-6">
            <h3 className="genericPageHeading">Un-assigned <span className="colorGreen">({visits.filter(x => x.agent_name === "ChatBot").length})</span></h3>
            </div>
            { visits.map(( (item) => {

              const createdDate2 = new Date(item.createdOn)
              const date2 =new Date()
              //((millis % 60000) / 1000).toFixed(0)
              // const time = date2.getHours()+":"+ date2.getMinutes()+":"+date2.getSeconds()
              // console.log(time,"gettime")
              const differenceTravel2 = date2.getTime() - createdDate2.getTime();
const seconds2 = Math.floor((differenceTravel2/1000));
//  console.log("second less than 1002",seconds2,"current date",date2,"createdone",createdDate2,"difference",differenceTravel2)
return(

(seconds2 < 5) ?  <Sound
                  url='assets/audio/tune.mp3'
                  //  autoPlay={true}
                  playStatus={Sound.status.PLAYING}
                  // ignoreMobileRestrictions={true}
                  // playFromPosition={300 /* in milliseconds
                // onLoading={handleSongLoading}
                //  onPlaying={handleSongPlaying}
                //  onFinishedPlaying={handleSongFinishedPlaying}
                />:false
) }))}

            <div className="tableListing">
               <table className="table">
                   <thead>
                       <tr>
                           {/* <th><input type="checkbox" /></th> */}
                           <th >User Name</th>
                           <th>Continent / Platform</th>
                           <th>Online</th>
                           <th>Agent</th>
                           <th>Brand</th>
                           <th>Actual Country</th>
                           <th>Visits</th>
                           {/* <th>Chat</th> */}
                       </tr>
                       </thead>

                       {(visits.filter(x => x.agent_name === "ChatBot").length > 0 ) ?
                                         visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name === "ChatBot" || null).map(( item =>
                                          <tr  key={item.visitor_id} >
                                          {/* <td><input type="checkbox" /></td> */}
                                          <td><a href={() => false} className="userName openChatPopup" onClick={()=>chnageActiveUser(item.visitor_id,item.agent_name)}>{item.visitor_name}</a>
                                          {(0 === messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length) ? false : <> <span className={"unreadMsg unreadMsg1"}>{messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length}</span></>}
                                          </td>
                                          <td><a href={() => false}><span className={`fflag fflag-${item.country} ff-md`}></span></a><a href={() => false}><span className={`browser ${item.browser}`}></span></a><a href={() => false}><span className={`platform ${item.platform}`}></span></a><a href={() => false}><span className={`operating-system ${item.os}`}></span></a></td>
                                          <td>{item.totalhournumber}</td>
                                          <td>{item.agent_name}</td>
                                          <td>{item.web_path}</td>
                                          <td>{item.timezone_location}</td>
                                          <td>{(item.no_of_visits === 0 ) ? "1":item.no_of_visits}</td>
                                          {/* <td>01</td> */}
                                      </tr>
                       )):
                         <tr>
                           <td colSpan="8"  className="text-center">No user online</td>
                           </tr>
                         }
               </table>
           </div>
        </div>
        <div className="pageSection">
           <div className="col-md-6">
            <h3 className="genericPageHeading">{obj.data.agent_name}'s Clients <span className="colorGreen">({visits.filter( x => x.agent_name !== "ChatBot" && (x.brand_id === webname || webname  === "" || webname === "Select Brand" ) ).length})</span></h3>
            </div>
           <div className="tableListing">
               <table className="table">
                   <thead>
                       <tr>
                           {/* <th><input type="checkbox" /></th> */}
                           <th>User Name</th>
                           <th>Continent / Platform</th>
                           <th>Online</th>
                           <th>Agent</th>
                           <th>Brand</th>
                           <th>Actual Country</th> 
                           <th>Visits</th>
                           {/* <th>Chat</th> */}
                       </tr>
                       </thead>
                       {(visits.filter(x => x.agent_name !== "ChatBot" && (x.brand_id === webname || webname  === "" || webname === "Select Brand" )).length > 0  )  ?
                           visits.sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).filter(x => x.agent_name !== "ChatBot" &&(x.brand_id === webname || webname  === "" || webname === "Select Brand" )).map(( item) =>{
return(
                       <tr  key={item.visitor_id} >
                           {/* <td><input type="checkbox" /></td> */}
                           <td><a href={() => false} className="userName openChatPopup" onClick={()=>chnageActiveUser(item.visitor_id,item.agent_name)}>{item.visitor_name}</a>
                           {(0 === messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length) ? false : <> <span className={"unreadMsg unreadMsg1"}>{messages.filter(x => x.repmsgFrom === item.visitor_id && x.repIsRead === false ).length}</span></>}
                           </td>
                           {/* <td>{(item.visitor_id === "Lc9ilo6")? `count: ${initialunReadMsg.count}` : false}</td> */}
                           <td><a href={() => false}><span className={`fflag fflag-${item.country} ff-md`}></span></a><a href={() => false}><span className={`browser ${item.browser}`}></span></a><a href={() => false}><span className={`platform ${item.platform}`}></span></a><a href={() => false}><span className={`operating-system ${item.os}`}></span></a></td>
                           <td>{item.totalhournumber}</td>
                           <td>{item.agent_name}</td>
                           <td>{item.web_path}</td>
                           <td>{item.timezone_location}</td>
                            <td>{(item.no_of_visits === 0 ) ? "1":item.no_of_visits}</td>
                           {/* <td>01</td> */}

                       </tr>
                           )}):
                       <tr>
                       <td colSpan="8"  className="text-center">No user online</td>
                       </tr>
                           }
               </table>

           </div>
        </div>



</>
    )
    else
    return <Redirect to="/" />

}

export default Visitor;
