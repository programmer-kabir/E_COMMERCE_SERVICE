import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaArrowRightToBracket, FaCodeCompare } from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../../assets/LOGO/logo.svg";
import DropDown from "../../../Components/Design/DropDown";
import { RxCross2 } from "react-icons/rx";
import MobileDropDown from "../../../Components/Design/MobileDropDown";
import { MdArrowForwardIos } from "react-icons/md";
import useAuth from "../../../Components/Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import { getData } from "../../../Components/Context/GetAllLocalStoargeItem";
const Navbar = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const [letter, setLetter] = useState("");
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logOut, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const data = getData();
  useEffect(() => {
    const data = getData();
    setFavoriteCount(data);
  }, [getData]);
 
  const handleNav = () => {
    setNav(!nav);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

  if (loading) {
    <Loader />;
  }
  useEffect(() => {
    if (user && user.email) {
      const firstLetter = user.email.charAt(0).toUpperCase();
      setLetter(firstLetter);
    } else {
      console.log("User email not available");
    }
  }, [user]);

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
          location.pathname === "/" ? (scrolled ? "shadow-sm" : "") : "shadow"
        } text-black`}
      >
        <div className="mx-auto">
          <div className="z-50 px-5 bg-white md:px-8 py-3 md:py-0 flex justify-between items-center text-white">
            <Link to="/" className="flex items-center gap-2">
              <img className=" " src={logo} alt="" />
            </Link>
            <div className="hidden md:flex gap-8 items-center  p-4 text-[15px] font-medium">
              <Link to="/" className=" primaryColor hover:text-[#F62977]">
                Home
              </Link>
              <Link className=" primaryColor hover:text-[#F62977] ">About</Link>
              <Link className=" primaryColor hover:text-[#F62977] ">
                Contact
              </Link>
              <Link
                to={"/shop"}
                className=" primaryColor hover:text-[#F62977] "
              >
                Shop
              </Link>
              <DropDown name="Category" items={categoriesItems} />
              <DropDown name="Brand" items={brandItems} />
            </div>

            <div className="hidden md:flex  items-center space-x-5">
              {/* <FiSearch
                  size={22}
                  className="primaryColor hover:text-black cursor-pointer"
                /> */}
              <div className="w-64 py-2 flex items-center gap-3 bg-gray-200 rounded-full">
                {" "}
                <div className="pl-4">
                  <FiSearch className="primaryColor" size={23} />
                </div>
                <input
                  type="search"
                  name=""
                  placeholder="Search"
                  id=""
                  className={`outline-none primaryColor bg-transparent ${
                    nav ? "hidden" : ""
                  }`}
                />
              </div>
              <div className="">
                {user ? (
                  <Link to="/dashboard/my_profile">
                    <div className="rounded-full flex  justify-center items-center w-8 h-8 text-center p-1 font-semibold border-black border primaryColor">
                      <p>{letter}</p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <FiUser
                        size={23}
                        className="primaryColor hover:text-black cursor-pointer"
                      />
                    </Link>
                  </>
                )}
              </div>

              <Link to="/wishlist" className="flex relative items-center">
                <FaRegHeart
                  size={23}
                  className="primaryColor  hover:text-black cursor-pointer"
                />{" "}
                <span className="text-white  absolute mb-5 ml-3 flex text-[12px] font-bold items-center justify-center border-2 border-white bg-black rounded-full w-5 h-5 ">
                  {favoriteCount?.length}
                </span>
              </Link>
              <div className="flex relative items-center">
                <FiShoppingCart
                  size={23}
                  onClick={toggleSidebar}
                  className="primaryColor  hover:text-black cursor-pointer"
                />{" "}
                <span className="text-white  absolute mb-5 ml-3 flex text-[12px] font-bold items-center justify-center border-2 border-white bg-black rounded-full w-5 h-5 ">
                  {favoriteCount?.length}
                </span>
              </div>

              {/* <FiShoppingCart
                  size={23}
                  onClick={toggleSidebar}
                  className="primaryColor hover:text-black cursor-pointer" */}
              {/* /> */}
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
                      className="primaryColor cursor-pointer hover:text-white border p-2 transition-background transition-text  duration-300 ease-in-out  hover:bg-[#F62977] rounded-full "
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center items-start pt-10 font-medium space-y-3 ">
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] ">
                    Home
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] ">
                    About
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] ">
                    Contact
                  </Link>
                  <Link className="w-full pb-2 border-b text-start  text-black hover:text-[#F62977] ">
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
          <div className="flex justify-end">
            {isSidebarOpen && (
              <div className="fixed top-0 bottom-0 flex justify-end left-0 right-0 bg-black bg-opacity-50 z-50 transition-opacity ease-in-out duration-500">
                <div
                  className={`w-[380px] overflow-auto   bg-white h-full  transform transition-transform duration-500 ease-in-out ${
                    isSidebarOpen
                      ? "translate-x-0 transition-all duration-700 ease-in-out"
                      : "translate-x-full transition-all 0.3s ease-in-out"
                  }`}
                >
                  <div className="flex justify-between p-5">
                    <h2 className="text-base font-medium">SHOPPING CART</h2>
                    <button
                      className="flex items-center gap-2 hover:text-blue-500"
                      onClick={toggleSidebar}
                    >
                      <span className="text-base">close</span>
                      <FaArrowRightToBracket size={20} />
                    </button>
                  </div>
                  <div className="mt-40 border-b-2 pb-7 flex px-10 items-center flex-col justify-center ">
                    <img
                      className="p-2"
                      src="https://i.ibb.co/8XZwct2/empty-cart.png"
                      alt=""
                    />
                    <p className="py-5 font-medium ">Your Cart is empty</p>
                    <button className="primaryButton w-[140px]">
                      Go To Shop
                    </button>
                  </div>
                  {booked.length > 0 && (
                  <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                      <dl className="space-y-0.5 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Discount:</span>
                          <span className="font-bold text-gray-900">
                            {discount.toFixed(2)} TK
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="font-bold text-gray-900">
                            {subtotal.toFixed(2)} TK
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            VAT ({(vatRate * 100).toFixed(0)}%):
                          </span>
                          <span className="font-bold text-gray-900">
                            {(subtotal * vatRate).toFixed(2)} TK
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total:</span>
                          <span className="font-bold text-gray-900">
                            {discountedTotal.toFixed(2)} TK
                          </span>
                        </div>
                      </dl>
                      
                      <div className="flex justify-end">
                        {discount > 0 && (
                          <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="-ms-1 me-1.5 h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                              />
                            </svg>
                            <p className="whitespace-nowrap text-xs">
                              {discount} TK Discount Applied
                            </p>
                          </span>
                        )}
                </div>
              </div>
              </div>
            )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
