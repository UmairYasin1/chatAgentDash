
// import { copyProperties } from '@amcharts/amcharts4/.internal/core/utils/Object';
import React,{useContext,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
 import { UserContext } from '../context/UserContext';



// import ChatTimingGraph from './ChatTimingGraph';
import getStorage from './getStorage';
import Graph from './Graph';
// import Header from './Header';
// import Navbar from './Navbar'
// import RatingGraph from './RatingGraph';
// import LineChart from './GreenHighChart';


const Dashboard = () => {
  const [userlog] = useContext(UserContext);

if(getStorage())
    return(
      <>
       <div className="pageSection">
            <h3 className="dashboardPageHeading">Total Clients <span>(192)</span></h3>
            
            <div className="dashboardStats">
                <div className="row">
                   
                    <div className="col-md-3">
                        <div className="whiteBox">
                         <div className="media">
                          <div className="media-left">
                            <p className="stats">
                                700
                            </p>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Satisfaction Ratings</h4>
                            <p>See a list of all your web visitors and chat…</p>
                          </div>
                        </div>
                    
                        </div>
                   
                    </div>
                    
                    
                    <div className="col-md-3">
                      <div className="whiteBox">
                       <div className="media">
                        <div className="media-left">
                          <p className="stats">
                              700
                          </p>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Chat Served</h4>
                          <p>See a list of all your web visitors and chat…</p>
                        </div>
                      </div>
                  
                      </div>
                
                  </div>
               

                  <div className="col-md-3">
                    <div className="whiteBox">
                     <div className="media">
                      <div className="media-left">
                        <p className="stats">
                            700
                        </p>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Chats Missed</h4>
                        <p>See a list of all your web visitors and chat…</p>
                      </div>
                    </div>
               
                    </div>
                
                </div>
           

                <div className="col-md-3">
                  <div className="whiteBox">
                   <div className="media">
                    <div className="media-left">
                      <p className="stats">
                          700
                      </p>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">Waiting Time</h4>
                      <p>See a list of all your web visitors and chat…</p>
                    </div>
                  </div>
               
                  </div>
            
              </div>
         
                </div>
                
            </div>
           
            
            
            <h3 className="dashboardPageHeading">Total Chat Reports</h3>
            
            
            
            
            <div className="highchart">
              <div className="row">

                  <div className="col-md-8">
                        {/* <div className="chart">
                            <div className="graphPlot">
                              <div className="Graphcontainer" id="Graphcontainer"></div>
                            </div>
                        </div> */}
                       
         <Graph /> 
         {/* <LineChart/> */}
         {/* <RatingGraph />
             <ChatTimingGraph /> */}
                    </div>
                  
                    
                    
                <div className="col-md-4">
                  
                    <div className="dashboardStats">
                          <div className="col-md-12">
                              <div className="whiteBox">
                               <div className="media">
                                <div className="media-left">
                                  <p className="stats">
                                      700
                                  </p>
                                </div>
                                <div className="media-body">
                                  <h4 className="media-heading">Satisfaction Ratings</h4>
                                  <p>See a list of all your web visitors and chat…</p>
                                </div>
                              </div>
                             
                              </div>
                           
                          </div>
                     
                          <div className="col-md-12">
                              <div className="whiteBox">
                               <div className="media">
                                <div className="media-left">
                                  <p className="stats">
                                      700
                                  </p>
                                </div>
                                <div className="media-body">
                                  <h4 className="media-heading">Satisfaction Ratings</h4>
                                  <p>See a list of all your web visitors and chat…</p>
                                </div>
                              </div>
                            
                              </div>
                           
                          </div>
                     
                    </div>
                 
                    
                </div>
                
                    
                    
              </div>
                    
            </div>
           
            
            
            
            
            
        </div>
       
        
  
        </>
     
     
    ) 
    
    else
   return <Redirect to="/" />
   
}


export default Dashboard;