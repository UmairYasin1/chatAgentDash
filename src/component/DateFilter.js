import React, { useContext, useState } from 'react';
import {
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

import 'moment/locale/ru';
import { SocketContext } from '../context/SocketProvider';



    const DateFilter = () => {
      const [socket] = useContext(SocketContext)
      const [filterRange,setFilterRange] = useState(
     {
      
         datesRange: ''
        }
    )  
      
     
       const  handleChange = (event, {name, value}) => {
        
          if (filterRange.hasOwnProperty(name)) {
            setFilterRange({ [name]: value });
            
          }
        }
     
      
         const blurDates =( ) =>{
            
             const dateRanges = filterRange.datesRange.split(" - ");
        
             const formADate = new Date(dateRanges[0]);
            //  let userTimezoneOffset = formADate.getTimezoneOffset() * 60000
            //  const offsetfromADate = new Date(formADate.getTime() + userTimezoneOffset)
             const toADate = new Date(dateRanges[1]);
            //  userTimezoneOffset = toADate.getTimezoneOffset() * 60000
            //  const offsettoADate = new Date(toADate.getTime() + userTimezoneOffset)
           //console.log('from',formADate,'to',toADate)
           var ranges= {formADate:formADate,toADate:toADate}
           socket.emit("Dateranges",ranges,function(response){

           })
         }  
          return (

            <form>
              
              <DatesRangeInput
                type='text'
                name="datesRange"
                placeholder="Search By Date 'From - To'"
                value={filterRange.datesRange}
                iconPosition="lft"
                onChange={handleChange}
                dateFormat={"MM/DD/YYYY"}
                onBlur={blurDates}
                style={{width:"100%"}}
                className="componentOverWrite"
              
              />
            </form>
          );
      
      }
  
  export default DateFilter;