import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";
import UserCard from "./UserCard";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleUserChange = (buttonData) => {
    // shoutout Marcus!
    setSelectedUser(users[buttonData - 1])
    console.log("Hello!");
    console.log(buttonData);
  }

  const newSelectedUser = users[`${selectedUser}`]
  console.log(newSelectedUser);
  console.log(users[1]);


  {users[0].tweets.filter(tweet => (
    console.log("Is this working?")
    ))}

  // console.log(users[`${selectedUser}`]);

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserChange={handleUserChange}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
            <TweetList user={selectedUser} />
            {/* <TweetList user={users[2]} /> */}
            {/* <TweetList user={newSelectedUser} /> */}
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
