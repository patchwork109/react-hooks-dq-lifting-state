import React from "react";
import UserCard from "./UserCard";

function UserList(props) {

  console.log(props.handleUserChange);


  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => console.log(user)}
          {...user}
          handleUserChange={props.handleUserChange}
        />
      ))}
    </div>
  );
}

export default UserList;
