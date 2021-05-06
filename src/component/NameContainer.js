import React,{useState} from 'react';
import ReactPaginate from "react-paginate";

const NameContainer = ({names,chnageActiveUser,isActive,customer_ID}) => {
const [pageNumber , setPageNumber] = useState(0)


const UserPerPage = 9
const pagesVisited = pageNumber * UserPerPage


const displayUser = names.slice(0,names.length).sort((a,b) => new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1).slice(pagesVisited,pagesVisited + UserPerPage).map((item)=>{
   
   return(
       
<tr className={item.visitor_id === customer_ID.id ? 'active': null}  key={item.visitor_id}>
{/* <td><input type="checkbox" /></td> */}
<td onClick={()=>chnageActiveUser(item.visitor_id)}><a href={() => false} className="showUserDetailsSideBar">
<span className="userAgent"><img src="assets/images/avatar.jpg" alt="-" className="img-responsive" /></span>
<span className="displayinblock" >{item.visitor_name}</span></a></td>
<td><a href={() => false}><span className={`fflag fflag-${item.country} ff-md`}></span></a><a href={() => false}><span className={`browser ${item.browser}`}></span></a><a href={() => false}><span className={`platform ${item.platform}`}></span></a><a href={() => false}><span className={`operating-system ${item.os}`}></span></a></td>
<td>{item.agent_name}</td>
<td>{item.totaltimeshort}</td>
<td>-</td>
{/* <td>
<p className="maxWidth">Hi there! Welcome back! Would you be interest in Mobile application for your business in just $3999? </p>
</td> */}
</tr>
    )
})

const pageCount = Math.ceil(names.length / UserPerPage)
const changePage = ({selected})=>{
    setPageNumber(selected)
}

  return(
      <>
       <tbody>
           {displayUser}
    </tbody>
    
   <div className="paginationHistory">
    <ReactPaginate 
    previousLable={"Previous"}
    nextLabel={"Next"}
    pageCount = {pageCount}
    onPageChange={changePage}
    containerclassName={"paginationBttns"}
    previousLinkclassName={"previousBttn"}
    nextLinkclassName={"nextBttn"}
    disabledclassName={"paginationDisabled"}
    activeclassName={"paginationActive"}
    disableInitialCallback={true}
    />
 </div>
   </>
    )
}

export default NameContainer ;