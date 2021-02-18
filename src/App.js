import React,{useState} from 'react';
import Dashboard from './component/Dashboard';
import Visitor from './component/Visitor';
import History from './component/History' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import { UserProvider } from './context/UserContext';
import { VistorListing } from './context/UserList';
 import { HistoryListing } from './context/UserListHistory';
// import { io } from 'socket.io-client';
import  { SocketContext } from './context/SocketProvider';
// import {  UserMessages } from './context/MessageContext';

import useSocket from 'use-socket.io-client';
import Navbar from './component/Navbar';
import UserChatPopUp from './component/UserChatPopUp';
import { MessageCounter } from './context/MessageCounter';
import ChatWidget from './component/ChatWidget';
import { UserMessages } from './context/MessageContext';



const  App = () => {
  const socket = useSocket('http://10.1.30.146:5001/chat');
  const[mess,setMess] = useState(false)
  const [count , setCount] = useState(0)
  //const [visits,dispatch] = useContext(UserList)
 //  const [visits,dispatch] = useContext(UserList);
  const [clicked,setClicked] = useState(false);
  const [readmsg ,setReadmsg] = useState(false)
  const [customer_ID, setCustomer_ID] = useState({id : ''});
  const handle =()=>{
   setClicked(false);
 }

 
  // console.log('socekt',socket)
  return (

  <>
          
       <UserProvider>
            <Router>
              <Switch> 
               <Route path="/" component={()=><Login  />  }  exact /> 
               <SocketContext.Provider  value={socket}>
                 <MessageCounter.Provider value={[count,setCount]}>
               <VistorListing>
               <HistoryListing>
   
              <Navbar  setClicked={setClicked} setReadmsg={setReadmsg} />
              <UserMessages>
               {/* <Route path="/dashboard" component={()=><Dashboard  /> } exact />  */}
               <Route path="/visitors"  component={()=><Visitor handle={handle} mess={mess} setMess={setMess}  clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}  />} exact />
      
               <Route path="/history"  component={()=><History    handle={handle} mess={mess} setMess={setMess}  clicked={clicked} setClicked={setClicked} customer_ID={customer_ID} setCustomer_ID={setCustomer_ID}/>} exact />
              {/* {(readmsg === true) ?  */}
            
              <ChatWidget  clicked={clicked} setClicked={setClicked} />
          
              <UserChatPopUp socket={socket} setClicked={setClicked} mess={mess} setMess={setMess}  customer_ID={customer_ID} setCustomer_ID={setCustomer_ID} handle={handle} clicked={clicked} /> 
              </UserMessages>
              {/* //: false }  */}
              </HistoryListing>
              </VistorListing>
              </MessageCounter.Provider>
              </SocketContext.Provider>
              </Switch>
            </Router>
           
       </UserProvider>
     </>
  
  );
}

export default App;
