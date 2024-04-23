import React, { useState } from "react";
import DropDown from "../../../Components/Design/DropDown";
import { Link } from "react-router-dom";
import { FaCodeCompare } from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  const pageItems = [
    "FAQs",
    "Privacy & Policy",
    "Terms & Conditions",
    "Login",
    "Register",
    "Forgot Password",
    "My Cart",
    "My Wishlist",
    "My Compare",
    "Checkout",
    "Error 404",
  ];

  const categoriesItems = [
    "Ipad Phone & Tablets",
    "Planer & Virtual",
    "Wireless & Watches",
    "Computers Monitor & Laptop",
    "Exercise Bike & Shaver Clean",
    "Spinning Reel & Kettle",
    "Camera Bluetooth & Headset",
  ];
  const brandItems = [
    "Logitech",
    "Deepcool",
    "Apple",
    "Sony",
    "Samsung",
    "Lenovo",
  ];
  const storeItems = [
    "Amazon",
    "Flipkart",
    "Alibaba",
    "Daraz",
    "Zomata",
    "Fedex",
  ];
  return (
    <section className="w-full border border-b py-3   flex  items-center justify-around">
      <div>
        <h2 className="text-2xl font-semibold ">MernShop</h2>
      </div>
      {/*  */}
      <div className="flex items-center space-x-7">
        <Link className=" text-[#525258] hover:text-[#F62977] font-medium">Home</Link>
        <Link className=" text-[#525258] hover:text-[#F62977] font-medium">About</Link>
        <Link className=" text-[#525258] hover:text-[#F62977] font-medium">Contact</Link>
        <Link className=" text-[#525258] hover:text-[#F62977] font-medium">Shop</Link>
        <DropDown name="Pages" items={pageItems} />
        <DropDown name="Category" items={categoriesItems} />
        <DropDown name="Brand" items={brandItems} />
        <DropDown name="Store" items={storeItems} />
      </div>
      {/*  */}
      <div className="flex items-center space-x-5">
      <FiSearch size={22} className="text-[#525258] hover:text-black cursor-pointer"/>
      <FiUser size={22} className="text-[#525258] hover:text-black cursor-pointer"/>
      <FaRegHeart size={22} className="text-[#525258] hover:text-black cursor-pointer"/>
      <FaCodeCompare size={22} className="text-[#525258] hover:text-black cursor-pointer rotate-90"/>
      <FiShoppingCart size={22} className="text-[#525258] hover:text-black cursor-pointer"/>
      </div>
    </section>
  );
};

export default Navbar;
