import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import Users from "./Users";
import Header from "./Stagiaire";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route path="/" element={<Header />} />
        <Route>
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />}/>
          <Route path="/show/:id" element={<Show />}/>
          <Route path="/users" element={<Users />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
