import React from "react";
import { useSelector } from "react-redux";

function Users() {

  let users = useSelector(stateObj =>{
    return stateObj.users;
  })

  console.log(users)

  return (
    <div>
      <ul>
        <h1>Users!</h1>
        {users.map((userObj, index) => userObj.username)}
        <h2>How many users are there in the store?</h2>
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
