import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Meals from "./Meals";
import Detail from "./Detail";
import Navbar from "./Navbar";
import { RiRestaurant2Line } from "react-icons/ri";
const App = () => {
  return (
    <div className="container mx-auto relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
