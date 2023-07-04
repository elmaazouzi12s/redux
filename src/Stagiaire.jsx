import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { showUser } from "./redux/UserSlice";

const Header = () => {
    const stags = useSelector((state) => state.stags)
    const { id } = useParams();
    const dispatch = useDispatch();


  return (
    <div>
      {existUser && existUser.map((stags) => { 
        <img src="" alt="" />
       })}
    </div>
  );
};

export default Header;
