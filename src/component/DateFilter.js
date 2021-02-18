import React, { useContext, useState } from 'react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
import moment from 'moment';
import 'moment/locale/ru';
import { SocketContext } from '../context/SocketProvider';

//  const DateFilter = () =>{

    const DateFilter = () => {
      const [socket] = useContext(SocketContext)
      const [filterRange,setFilterRange] = useState(
     {
        //  date: '',
        //  time: '',
        //  dateTime: '',
         datesRange: ''
        }
    )  
      
     
       const  handleChange = (event, {name, value}) => {
        
          if (filterRange.hasOwnProperty(name)) {
            setFilterRange({ [name]: value });
             //console.log('state',filterRange);
          }
        }
     
      
         const blurDates =( ) =>{
            
             const dateRanges = filterRange.datesRange.split(" - ");
             //console.log(dateRanges)
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
              {/* <DateInput
                name="date"
                placeholder="Date"
                value={filterRange.date}
                iconPosition="left"
                onChange={handleChange}
              />
              <TimeInput
                name="time"
                placeholder="Time"
                value={filterRange.time}
                iconPosition="left"
                onChange={handleChange}
              />
              <DateTimeInput
                name="dateTime"
                placeholder="Date Time"
                value={filterRange.dateTime}
                iconPosition="left"
                onChange={handleChange}
              /> */}
              <DatesRangeInput
                type='date'
                name="datesRange"
                placeholder="Search By Date 'From - To'"
                value={filterRange.datesRange}
                iconPosition="left"
                onChange={handleChange}
                dateFormat={"MM/DD/YYYY"}
                onBlur={blurDates}
                style={{width:"100%"}}
                className="componentOverWrite"
              
              />
            </form>
          );
      
      }
    //   Also you can build a form with inline pickers as inputs. Just set inline prop on input element and it will be displayed as inline picker:
      
//       class DateTimeFormInline extends React.Component {
//        handleChange = (event, {name, value}) => {
//           if (this.state.hasOwnProperty(name)) {
//             this.setState({ [name]: value });
//           }
//         }
      
//         render() {
//           return (
//             <Form>
//               <DateInput
//                 inline
//                 name='date'
//                 value={this.state.date}
//                 onChange={this.handleDateChange}
//               />
//             </Form>
//           );
//         }
//       }
//  }
  export default DateFilter;