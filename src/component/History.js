import React,{useState, useEffect, useContext} from 'react';
// import Header from './Header';
import getStorage from './getStorage';
import { Redirect } from 'react-router-dom';
 import { UserContext } from '../context/UserContext';
import { UserListHistory } from '../context/UserListHistory';
import HistoryChatPop from './HistoryChatPop';
import { SocketContext } from '../context/SocketProvider';
import DateFilter from './DateFilter';
import NameContainer from './NameContainer';

const History = ({webname}) => {

  // const [historyMessages , setHistoryMessages] = useState([]);
  const [userlog] = useContext(UserContext);
  const [isActive, setActive] = useState(false);
  const [customer_ID, setCustomer_ID] = useState({id : ''})
  const [history] = useContext(UserListHistory);
  const [isChatPopupShown, setChatPopupShown] = useState(false);
  const [socket] = useContext(SocketContext);
  const[mess,setMess] = useState(false)
  const [clicked,setClicked] = useState(false);
  const [searchTerm,setSearchTerm] = useState('')

useEffect(()=>{
  
    // eslint-disable-next-line react-hooks/exhaustive-deps  
 },[])
 
 console.log("History")

// var obj = JSON.parse(localStorage.getItem('user'));
const editSearchTerm = (e) =>{
  setSearchTerm(e.target.value);
  
 }

const dynamicSearch = () => {

return  history.filter(f => f.visitor_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) && (f.brand_id === webname || webname  === "" || webname === "Select Brand" ))
  
 }
const chnageActiveUser = (visitor_id,agent_name) => {
  console.log("vi",visitor_id,"agen",agent_name)
  var obj = JSON.parse(localStorage.getItem('user'));
(agent_name === "Unassigned")?socket.emit('update-room',{ visitor_id : {id:visitor_id} , agent_id : 'tFAE3OWtP', agent : agent_name, isVisitorList : false, page: 'HistoryMsgList'})  :socket.emit('update-room',{ visitor_id : {id:visitor_id} , agent_id : obj.data.agent_id , agent : obj.data.agent_name, isVisitorList : false, page: 'HistoryMsgList'});
  const customer_ID =  visitor_id;
  
  setCustomer_ID({id: customer_ID})
  setActive(!isActive);
  setClicked(!clicked);
  if ( isChatPopupShown === true ){
  setChatPopupShown(false);
 
 }
  else {
  setChatPopupShown(true);
 }
  setMess(!mess);
 }
 console.log("history",history,"webname",webname)

  const cancel = () => {
    setChatPopupShown(false);
  };


  // console.log("webname",webname,"history",history)
  if(getStorage())
    return( 
      
      

<>
      <div className="pageSection">
           <div className="col-md-6">
            <h3 className="genericPageHeading">Previous Served Clients <span className="colorGreen">({history.filter( x => x.agent_name !== "" && (x.brand_id === webname || webname  === "" || webname === "Select Brand" )).length})</span></h3>
            </div>
            <div className="col-md-6">
               <div className="rightActions">
                <div className="row">
                    <div className="col-md-6">
                       <i className="fa fa-search"></i>
                        <input type="text" value={searchTerm} className="form-control" placeholder="Search by Name" onChange={editSearchTerm} />
                        
                    </div>
                  
                    
                    <div className="col-md-6">
                    <DateFilter/>                  
                    </div>
                
 </div>

  </div>
                 </div>
 
            <div className={isActive ? "historyTable activated": "historyTable"} >
                       <div className="tableListing ">

                           <table className="table">

                               <thead>
                                   <tr>
                                       {/* <th><input type="checkbox" /></th> */}
                                       <th>User Name</th>
                                       <th>Continent / Platform</th>
                                       <th>Agent Name</th>
                                       <th>Time</th>
                                       <th>Rating</th>
                                       {/* <th>Messages</th> */}
                                   </tr>
                               </thead>
                               <NameContainer customer_ID={customer_ID} names={dynamicSearch()} history={history} chnageActiveUser={(a,b)=>chnageActiveUser(a,b)} isActive={isActive}/>
                           </table>
</div>
            </div>
              
        </div>

        { isChatPopupShown && <HistoryChatPop mess={mess}socket={socket} setChatPopupShown={setChatPopupShown} isActive={isActive}customer_ID={customer_ID}cancel={cancel}history={history} />}

   
</>
     )

     else
     return <Redirect to="/" />
}

export default History;