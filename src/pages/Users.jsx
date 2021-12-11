import React, { useEffect } from "react";
import "@styles/Users.css";

import * as usersActions from "@actions/usersActions";
import Pagination from "@components/Pagination";
import { connect } from "react-redux";
import UserList from "@components/UserList";

const Users = (props) => {
  const title = "< Usuarios />";
  console.log(props);

  useEffect(() => {
    if (!props.users.length) {
      props.getUsers();
    }
  }, []);

  return (
    <>
      <h1 className="home__title"> {title}</h1>
      <UserList />

      <Pagination />
    </>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};
export default connect(mapStateToProps, usersActions)(Users);
