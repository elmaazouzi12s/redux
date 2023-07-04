import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import Users from "./Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
