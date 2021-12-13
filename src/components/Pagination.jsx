import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as usersActions from "@actions/usersActions";
import "@styles/Pagination.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    props.getUsers(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Anterior
        </button>
        {[...Array(props.totalPages).keys()].map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item + 1 ? "active" : null
            }`}
          >
            <span>{item + 1}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${
            currentPage === props.totalPages ? "disabled" : ""
          }`}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

const mapStateToprops = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToprops, usersActions)(Pagination);
