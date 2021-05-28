
// import { copyProperties } from '@amcharts/amcharts4/.internal/core/utils/Object';
import React,{useContext,memo, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import {isEqual} from "lodash";


// import ChatTimingGraph from './ChatTimingGraph';
import getStorage from './getStorage';
import Graph from './Graph';
// import Header from './Header';
// import Navbar from './Navbar'
// import RatingGraph from './RatingGraph';
// import LineChart from './GreenHighChart';


const Dashboard = ({webname}) => {
  const [userlog] = useContext(UserContext);
  const [totalCount,setTotalCount]=useState('')
  console.log("Dashboard")
  
  useEffect(()=>{
(webname==="")? 
axios.get(`http://173.254.252.226:5001/dashboardstats/getBrandVisitorsCount?brand_id=0`)
.then((res)=>{
  //console.log("response",res.data.visitorsCountList)
  console.log("webname -->",webname)
  localStorage.setItem("total-client",res.data.visitorsCountList)
  const totalClient = JSON.parse(localStorage.getItem("total-client"));
  setTotalCount(totalClient)
}):
axios.get(`http://173.254.252.226:5001/dashboardstats/getBrandVisitorsCount?brand_id=${webname}`)
.then((res)=>{
  //console.log("response",res.data.visitorsCountList)
  console.log("webname -->",webname)
  localStorage.setItem("total-client",res.data.visitorsCountList)
  const totalClient = JSON.parse(localStorage.getItem("total-client"));
  setTotalCount(totalClient)
})
  },[])
if(getStorage())
    return(
      <>
       <div className="pageSection">
            {/* <h3 className="dashboardPageHeading">Total Clients <span>(1700)</span></h3> */}
            
            {/* <div className="dashboardStats">
                <div className="row">
                   
                    <div className="col-md-3">
                        <div className="whiteBox">
                         <div className="media">
                          <div className="media-left">
                            <p className="stats">
                            {totalClient}
                            </p>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">VisitorsCount</h4>
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
                              800
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
                          900
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
                          600
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
                
            </div> */}
           
            
            
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
                                  {JSON.parse(localStorage.getItem("total-client"))}
                                  </p>
                                </div>
                                <div className="media-body">
                                  <h4 className="media-heading">Visitor Count</h4>
                                  {/* <p>See a list of all your web visitors and chat…</p> */}
                                </div>
                              </div>
                             
                              </div>
                           
                          </div>
                          <div className="col-md-12">
                              <div className="whiteBox">
                               <div className="media">
                                <div className="media-left">
                                  <p className="stats">
                                      500
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
                                      400
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


export default memo(Dashboard,isEqual);