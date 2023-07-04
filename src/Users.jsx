import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/UserSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  if (users.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <button onClick={(e) => dispatch(getData())}>Fetch Users</button>
      {users.data && users.data.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  );
};

export default Users;
