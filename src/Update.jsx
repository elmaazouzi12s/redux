import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./redux/UserSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const existingUser = users.filter((user) => {
    return user.id == id;
  });
  const { name, email } = existingUser[0];
  const [username, setUsername] = useState(name);
  const [useremail, setUseremail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
        id: id,
        name: username,
        email: useremail
    }));
    navigate('/')
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={useremail}
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-info mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
