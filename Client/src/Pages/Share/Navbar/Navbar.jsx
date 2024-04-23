import React, { useState } from "react";
import DropDown from "../../../Components/Design/DropDown";
import { Link } from "react-router-dom";

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
  const categoriesItems = ["Contact 1", "Contact 2", "Contact 3"];
  const ctItems = [
    "Ipad Phone & Tablets",
    "Planer & Virtual",
    "Wireless & Watches",
    "Computers Monitor & Laptop",
    "Exercise Bike & Shaver Clean",
    "Spinning Reel & Kettle",
    "Camera Bluetooth & Headset"
    
  ];
  const cegorytItems = ["Contact 1", "Contact 2", "Contact 3"];
  return (
    <section className="grid grid-cols-3 items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold ">MernShop</h2>
      </div>
      {/*  */}
      <div>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Shop</Link>
        <DropDown name="Pages" items={pageItems} />
        <DropDown name="Category" items={categoriesItems} />
        <DropDown name="Brand" items={contactItems} />
        <DropDown name="Store" items={contactItems} />
      </div>
      {/*  */}
      <div>
        <h2>Hlw</h2>
      </div>
    </section>
  );
};

export default Navbar;
