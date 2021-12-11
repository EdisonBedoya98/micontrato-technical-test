import React, { useState } from "react";
import { connect } from "react-redux";
import '@styles/Pagination.css';

const Pagination = ({ totalPages }) => {
  // const totalPages = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  console.log(totalPages);
  function goToNextPage() {
    // not yet implemented
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    // not yet implemented
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    // not yet implemented
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    // not yet implemented
  };

  const getPaginationGroup = () => {
    // not yet implemented
  };

  // console.log(props)
  return (  <div>

   <div className="pagination">
     {/* previous button */}
     <button
       onClick={goToPreviousPage}
       className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
     >
       prev
     </button>

     {/* show page numbers */}
     {[...Array(totalPages).keys()].map((item, index) => (
       <button
         key={index}
         onClick={changePage}
         className={`paginationItem ${currentPage === item ? 'active' : null}`}
       >
         <span>{item}</span>
       </button>
     ))}

     {/* next button */}
     <button
       onClick={goToNextPage}
       className={`next ${currentPage === totalPages ? 'disabled' : ''}`}
     >
       next
     </button>
   </div>
 </div>);
};

const mapStateToprops = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToprops)(Pagination);
