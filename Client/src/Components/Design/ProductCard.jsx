import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare, FaRegEye } from "react-icons/fa6";
const ProductCard = () => {
    const [isHoveredHeart, setIsHoveredHeart] = useState(false);
    const [isHoveredEye, setIsHoveredEye] = useState(false);
    const [isHoveredCompare, setIsHoveredCompare] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <a href="#" className="group relative block">
        <div className="w-[261px] h-[305px]">
          {" "}
          {/* Fixed height for the image container */}
          <img
            src="https://next-frontend-ashen-psi.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FCB7zKR9%2Fproduct-26.jpg&w=1080&q=75"
            alt=""
            className="w-full h-[305px] object-cover transition group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="duration-500 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Link to="/checkout">
              <button className="primaryButton ">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>

        {/* Additional content */}
        <div className="right-2 absolute top-10">
          <div className="translate-x-8 duration-500  space-y-3 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
            <div
              className="bg-white hover:bg-[#F62977] p-2"
              style={{
               
                boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHoveredHeart(true)}
              onMouseLeave={() => setIsHoveredHeart(false)}
            >
              <FaRegHeart size={20} color={isHoveredHeart ? "white" : "#000"} />
            </div>
            <div
              className="bg-white hover:bg-[#F62977] p-2 shadow-lg"
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHoveredEye(true)}
              onMouseLeave={() => setIsHoveredEye(false)}
            >
              <FaRegEye size={20} color={isHoveredEye ? "white" : "#000"} />
            </div>
            <div
              className="bg-white rotate-90 hover:bg-[#F62977] p-2 shadow-lg"
              style={{
                boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHoveredCompare(true)}
              onMouseLeave={() => setIsHoveredCompare(false)}
            >
              <FaCodeCompare size={20} color={isHoveredCompare ? "white" : "#000 "} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
