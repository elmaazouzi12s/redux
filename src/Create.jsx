import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: data[data.length - 1].id + 1, name: name, email: email }));
    navigate('/')
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
