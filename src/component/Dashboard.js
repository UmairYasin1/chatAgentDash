
// import { copyProperties } from '@amcharts/amcharts4/.internal/core/utils/Object';
import React,{useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


import ChatTimingGraph from './ChatTimingGraph';
import getStorage from './getStorage';
import Graph from './Graph';
import Header from './Header';
import Navbar from './Navbar'
import RatingGraph from './RatingGraph';


const Dashboard = () => {
  const [userlog] = useContext(UserContext);





 

// useEffect(() => {
//   let mounted = true
       
           
      

//         return function cleanup() {
//             mounted = false
//         }
// }, [])




if(getStorage())
    return(
        <div>
          
         
                 <div className="col-md-10 mainBody">
             <Header  /> 
        <div className="row">
            <div className="headingFilter">
            <div className="col-md-6">
                <h3>Total Client’s <span className="clientCount">(24)</span> </h3>
                </div>
                <div class="col-md-6">
                <div class="bothSelect">

             {/* <span class="form-group posRel SearchChat">
                       <i class="fas fa-search"></i>
                        <input type="text" class="form-control" />
                 </span>
             
                 
          
              <span class="SelectFilter">
                  <div class="dropdown styled">
                    <a href={() => false} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Group By Activity
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Group By Activity</a></li>
                      <li><a href="#">Group By Activity</a></li>
                      <li><a href="#">Group By Activity</a></li>
                    </ul>
                  </div>
              </span>
            
              
               <span class="SelectFilter">
                  <div class="dropdown styled">
                    <a href={() => false} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">List view
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">List view</a></li>
                      <li><a href="#">List view</a></li>
                      <li><a href="#">List view</a></li>
                    </ul>
                  </div>
              </span> */}
              
        
                  <div className="positionAbsoluteIn">
                  <div className="expendableList list1">
                      <a href={() => false}className="selector">Group By Activity <i className="fa fa-chevron-down"></i></a>
                      <ul>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                      </ul>
                      
                  </div>
                   <div className="expendableList list2">
                      <a href={() => false} className="selector">Group By Activity <i className="fa fa-chevron-down"></i></a>
                      <ul>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                          <li><a href={() => false}>Group By Activity</a></li>
                      </ul>
                      
                  </div>
                  </div>
              
                  <div class="selectOverlay"></div>
              </div>
        
              </div>
              
            </div>
            
        </div>
        
        <div className="dashboardElements">
        <div className="row">
            <div className="col-md-3">
                <div className="genericDashboardBox">
                    
                        <div className="media">
                          <div className="media-left">
                              <div className="leftdata green">
                                  700
                              </div>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Satisfaction Ratings</h4>
                            <p>See a list of all your web visitors and chat..</p>
                          </div>
                        </div>
                </div>
            </div>
         
            
            <div className="col-md-3">
                <div className="genericDashboardBox">
                
                        <div className="media green">
                          <div className="media-left">
                              <div className="leftdata ">
                                  700
                              </div>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Chats Served <i className="far fa-long-arrow-up"></i></h4>
                            <p>See a list of all your web visitors and chat..</p>
                          </div>
                        </div>
                </div>
              
            </div>
        
            
            <div className="col-md-3">
                <div className="genericDashboardBox">
                
                        <div className="media red">
                          <div className="media-left">
                              <div className="leftdata">
                                  600
                              </div>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Chats Missed <i className="far fa-long-arrow-down"></i></h4>
                            <p>See a list of all your web visitors and chat..</p>
                          </div>
                        </div>
                </div>
        
            </div>
        
            
            <div className="col-md-3">
                <div className="genericDashboardBox">
         
                        <div className="media green">
                          <div className="media-left">
                              <div className="leftdata">
                                  30s
                              </div>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Waiting Time  <i className="far fa-long-arrow-up"></i></h4>
                            <p>See a list of all your web visitors and chat..</p>
                          </div>
                        </div>
                </div>
              
            </div>
        
        </div>
        
        
        <br/>
        <div className="row">
             <RatingGraph />
             <ChatTimingGraph />
        </div>
        <br />
             <div className="row">
         <Graph /> 
        
        </div>
        
        </div> 
        </div>
        </div> 
     
     
    ) 
    
    else
   return <Redirect to="/" />
   
}


export default Dashboard;