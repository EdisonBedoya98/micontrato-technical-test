import React from "react";

import * as usersActions from "@actions/usersActions";
import Pagination from "@components/Pagination";
import { connect } from "react-redux";
import UserList from "@components/UserList";
import Spinner from "@components/Spinner";
import { useNavigate } from "react-router-dom";

const Users = (props) => {

  const title = "< Usuarios />";
  const navigate = useNavigate();
  const putContent = () => {
    if (props.loading) {
      return <Spinner />;
    }
    if (props.error) {
      return navigate("/error");
    }

    return <UserList />;
  };

  return (
    <>
      <h1 className="home__title"> {title}</h1>
      <Pagination />
    
      {putContent()}
    </>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};
export default connect(mapStateToProps, usersActions)(Users);
