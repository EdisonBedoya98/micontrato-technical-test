import React from "react";
import "@styles/UserCard.css";

const UserCard = ({user}) => {
  return (
    <div className="usercard">
      <img className="usercard__avatar" src={user.avatar} alt="React Icon" />
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UserCard;
