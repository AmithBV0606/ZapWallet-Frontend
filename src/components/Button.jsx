import React from "react";
import { Link } from "react-router-dom";

function Button({ label, onClick, to }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" w-full text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {label}
    </button>
  );
}

export default Button;