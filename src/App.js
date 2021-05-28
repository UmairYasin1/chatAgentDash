import React,{useState,useEffect,useContext,useCallback,memo, useLayoutEffect} from 'react';
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
import { MinimizeContext } from './context/MinimizeContext';

const  App = () => {

const socket = useSocket('http://173.254.252.226:5001/chat');
const [webname ,setWebname] =useState('')
const [clicked,setClicked] = useState(false);
const [customer_ID, setCustomer_ID] = useState({id : ''});
const [minimizeUser,setMinimizeUser] = useState([]);


//paste this function anywhere above render()
const removeItem = ()=> {
  localStorage.removeItem("Current-Vistor");
}
 useLayoutEffect(()=>{
  let elem = document.querySelector('body');
  elem.classList.remove( 'bgPic');
},[])

  return (
  <>   
       <UserProvider>
            <Router>
              <Switch> 
               <Route path="/" component={()=><Login  />  }  exact /> 
               <SocketContext.Provider  value={socket}>
               <MinimizeContext.Provider value={[minimizeUser,setMinimizeUser]}>
               <VistorListing>
               <HistoryListing>
                 
              <Navbar   />
              <UserMessages customer_ID={customer_ID}>
              <HistoryUserMessages>
               
               <div className="mainBody" onLoad={removeItem}>
               <Header webname={webname} setWebname={setWebname}/>
               <Route path="/dashboard" component={()=><Dashboard webname={webname} /> } exact /> 
               <Route path="/visitors"  component={()=><Visitor  webname={webname}  clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}  />} exact />
               <Route path="/history"   component={()=><History webname={webname}  clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}  />} exact />
               {(minimizeUser.length == 0 ) ? false: <ChatWidget setCustomer_ID={setCustomer_ID} clicked={clicked} setClicked={setClicked} />}
              </div>
              <UserChatPopUp webname={webname}setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID} clicked={clicked} /> 

              </HistoryUserMessages>
              </UserMessages>
              </HistoryListing>
              </VistorListing>
              </MinimizeContext.Provider>
              </SocketContext.Provider>
              </Switch>
            </Router>
       </UserProvider>
     </> 
  );
}

export default memo(App);
