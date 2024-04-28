import React from "react";
import svg from "../../assets/Error/404.svg";
import './Error.css'
const Error = () => {
  return (
    <div>
      <div className="error-img pt-10 flex flex-col justify-center items-center h-[80vh]">
        <img className="w-full h-full" src={svg} alt="svg" />
        <button className="bg-[#F50963] hover:bg-[#03041C] font-medium px-10 py-3 text-white transition-colors duration-300 ease-in-out">Back to Home</button>
      </div>
    </div>
  );
};

export default Error;
