import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ meal }) => {
  return (
    <div
      className="relative h-[400px] w-52 border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 shadow-lg hover:scale-105
    transition duration-200 hover:shadow-xl"
    >
      <img src={meal.strMealThumb} width="200px" className="rounded-xl" />
      <h3>{meal.strMeal}</h3>
      <Link to={`/detail/${meal.idMeal}`}>
        <button
          className="text-white bg-blue-500 px-10 py-2 rounded-xl absolute 
        bottom-4 left-14"
        >
          <AiFillEye className="text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default Card;
