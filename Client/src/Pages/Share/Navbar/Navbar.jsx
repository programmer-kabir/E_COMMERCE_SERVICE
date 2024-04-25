import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaCodeCompare, FaMinus } from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../../assets/LOGO/logo.svg";
import DropDown from "../../../Components/Design/DropDown";
import { RxCross2 } from "react-icons/rx";
import MobileDropDown from "../../../Components/Design/MobileDropDown";
import { MdArrowForwardIos } from "react-icons/md";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut, loading } = false;
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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
  const activeLink = "bg-cyan-500 px-5 py-1 rounded-md";
  return (
    <div className="">
      <nav
        className={`w-[100%] fixed  border-b  z-50 mx-auto ${
          location.pathname === "/"
           ? scrolled
              ? "shadow-sm"
              : ""
            : "shadow"
        } text-black`}
      >
        <div className="mx-auto">
          <div className="z-50 px-5 bg-white md:px-8 py-3 md:py-0 flex justify-between items-center text-white">
            <Link to="/" className="flex items-center gap-2">
              <img className=" " src={logo} alt="" />
              {/* <h2 className="text-2xl text-black font-semibold ">MernShop</h2> */}
            </Link>
            <div className="hidden md:flex gap-8 items-center font-medium p-4">
              {/* <div className="flex items-center space-x-7 "> */}
              <Link className=" text-[#525258] hover:text-[#F62977] font-medium">
                Home
              </Link>
              <Link className=" text-[#525258] hover:text-[#F62977] font-medium">
                About
              </Link>
              <Link className=" text-[#525258] hover:text-[#F62977] font-medium">
                Contact
              </Link>
              <Link className=" text-[#525258] hover:text-[#F62977] font-medium">
                Shop
              </Link>
              <DropDown name="Pages" items={pageItems} />
              <DropDown name="Category" items={categoriesItems} />
              <DropDown name="Brand" items={brandItems} />
              <DropDown name="Store" items={storeItems} />
            </div>

            <div className="hidden md:flex  items-center space-x-5">
              <FiSearch
                size={22}
                className="text-[#525258] hover:text-black cursor-pointer"
              />
              <FiUser
                size={22}
                className="text-[#525258] hover:text-black cursor-pointer"
              />
              <FaRegHeart
                size={22}
                className="text-[#525258] hover:text-black cursor-pointer"
              />
              <FaCodeCompare
                size={22}
                className="text-[#525258] hover:text-black cursor-pointer rotate-90"
              />
              <FiShoppingCart
                size={22}
                className="text-[#525258] hover:text-black cursor-pointer"
              />
            </div>

            <div onClick={handleNav} className="block  md:hidden">
              {nav ? (
                <p />
              ) : (
                <div className="flex items-center gap-2 font-semibold">
                  <HiOutlineMenuAlt3
                    size={25}
                    className="text-black cursor-pointer"
                  />
                </div>
              )}
            </div>
            <div
              className={
                nav
                  ? "fixed right-0  top-0 w-full overflow-auto  h-full text-center md:hidden bg-white  border-r-gray-900 ease-in-out duration-500"
                  : "ease-in-out duration-500 w-full h-full top-0 fixed overflow-auto right-[-100%]"
              }
            >
              <div className="px-5 text-left pb-16">
                <div className="flex items-center justify-between py-3 ">
                  <Link to="/" className="">
                    <img className=" " src={logo} alt="" />
                    {/* <h2 className="text-2xl text-black font-semibold ">MernShop</h2> */}
                  </Link>
                  <button onClick={handleNav}>
                    <RxCross2
                      size={40}
                      className="text-[#525258] cursor-pointer hover:text-white border p-2 transition-background transition-text  duration-300 ease-in-out  hover:bg-[#F62977] rounded-full "
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center items-start pt-10 space-y-3 ">
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] font-medium">
                    Home
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] font-medium">
                    About
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] font-medium">
                    Contact
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] font-medium">
                    Shop
                  </Link>
                  <MobileDropDown name="Pages" items={pageItems} />
                  <MobileDropDown name="Category" items={categoriesItems} />
                  <MobileDropDown name="Brand" items={brandItems} />
                  <MobileDropDown name="Store" items={storeItems} />
                </div>
                <button className="bg-[#F50963] mt-8 flex gap-2 items-center px-5 py-3">
                  <p className=" font-medium">Getting Started </p>
                  <MdArrowForwardIos size={20} />
                </button>
                {/*  */}
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
