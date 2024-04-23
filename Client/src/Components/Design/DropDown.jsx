import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const DropDown = ({ name, items }) => {
  return (
    <div className="relative inline-block text-left">
      <div className="group hover:text-[#F62977] inline-block">
        <button className="py-2 hover:text-[#F62977] px-4 inline-flex items-center">
          <span className="mr-1 font-medium">{name}</span>
          <FaAngleDown className="font-thin"  />
        </button>
       
        <ul className="absolute hidden group-hover:block mt-0 py-1 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
