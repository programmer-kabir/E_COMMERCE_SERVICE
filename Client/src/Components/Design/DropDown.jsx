import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
const DropDown = ({ name, items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative inline-block text-left">
      <div className="w-full text-[#525258] group hover:text-[#F62977] inline-block">
        <button className="py-2 flex justify-between  items-center">
          <p className="mr-1 font-medium">{name}</p>
          <VscTriangleDown className="font-thin transition-transform duration-300 transform rotate-0 group-hover:rotate-180" />
        </button>

        <ul className="absolute hidden group-hover:block pt-2 py-3 w-56 bg-white  rounded-lg shadow-md">
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href="#"
                className={`flex items-center hover:text-[#F62977] gap-1 px-4 py-1 text-base text-[#525258] transition-transform duration-300 ${
                  hoveredItem === index ? "hover:transform translate-x-2" : ""
                }`}
              >
                {hoveredItem === index && <FaMinus />}
                <span className={hoveredItem === index ? "ml-0" : ""}>
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;