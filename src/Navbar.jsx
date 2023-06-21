import React from "react";
import { RiRestaurant2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 my-8">
        <RiRestaurant2Line className="text-3xl text-pink-500" />
        <p className="text-2 text-gray-500 font-semibold">Foodie</p>
      </div>
    </Link>
  );
};

export default Navbar;
