import React,{useState,useEffect} from 'react';
 import Dashboard from './component/Dashboard';
import Visitor from './component/Visitor';
import History from './component/History' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import { UserProvider } from './context/UserContext';
import { VistorListing } from './context/UserList';
import { HistoryListing } from './context/UserListHistory';
import  { SocketContext } from './context/SocketProvider';
import useSocket from 'use-socket.io-client';
import Navbar from './component/Navbar';
import UserChatPopUp from './component/UserChatPopUp';
import ChatWidget from './component/ChatWidget';
import { UserMessages } from './context/MessageContext';
import Header from './component/Header';
import {  MinimizeProvider } from './context/MinimizeContext';
import { HistoryUserMessages } from './context/HistoryMessagesContext';

const  App = () => {
  const socket = useSocket('http://10.1.30.146:5002/chat');
  const [mess,setMess] = useState(false)
  const [webname ,setWebname] =useState('')
  const [clicked,setClicked] = useState(false);
  const [customer_ID, setCustomer_ID] = useState({id : ''});
  const handle =()=>{
   setClicked(false);
 }
// console.log("current",customer_ID.id)


//paste this function anywhere above render()
const removeItem = ()=> {
  localStorage.removeItem("Current-Vistor");
}
 
// console.log('customer',customer_ID.id)
  return (
  <>   
       <UserProvider>
            <Router>
              <Switch> 
               <Route path="/" component={()=><Login  />  }  exact /> 
               <SocketContext.Provider  value={socket}>
               <MinimizeProvider >
               <VistorListing>
               <HistoryListing>

              <Navbar   />
              <UserMessages customer_ID={customer_ID}>
                <HistoryUserMessages>
               {/* <Route path="/dashboard" component={()=><Dashboard  /> } exact />  */}
               <div className="mainBody" onLoad={removeItem}>
                 
               <Header webname={webname} setWebname={setWebname}/>
               <Route path="/dashboard" component={()=><Dashboard  /> } exact /> 
               <Route path="/visitors"  component={()=><Visitor webname={webname} handle={handle} mess={mess} setMess={setMess}  clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}  />} exact />
               <Route path="/history"   component={()=><History webname={webname} handle={handle} clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}  />} exact />
            
               {(customer_ID.id === "") ? false: <ChatWidget setCustomer_ID={setCustomer_ID} clicked={clicked} setClicked={setClicked} />}

              </div>
              <UserChatPopUp socket={socket} setClicked={setClicked} mess={mess} setMess={setMess}  customer_ID={customer_ID} setCustomer_ID={setCustomer_ID} handle={handle} clicked={clicked} /> 
              </HistoryUserMessages>
              </UserMessages>

              </HistoryListing>
              </VistorListing>
              </MinimizeProvider>
              </SocketContext.Provider>
              </Switch>
            </Router>
       </UserProvider>
     </> 
  );
}

export default App;
