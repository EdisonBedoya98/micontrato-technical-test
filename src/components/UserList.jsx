import React from "react";
import "@styles/UserList.css";
import { connect } from "react-redux";
import UserCard from "./Card";

const UserList = (props) => {
  const putCards = () => props.users.map((user) => <UserCard  key={user.id} user={user} />);

  return <div className="list">{putCards()}</div>;
};
const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(UserList);
