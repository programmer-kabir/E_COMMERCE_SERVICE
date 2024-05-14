import React, {  useContext, useEffect, useState } from "react";
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
import { WishListDataContext } from "../../../Components/Context/WishlistData";
import { AddToCartContext } from "../../../Components/Context/AddToCart";
const Navbar = () => {
  const {favoriteTShirtCount, setFavoriteTShirtCount}= useContext(WishListDataContext);
  const {cartTShirtCount, setCartTShirtCount}= useContext(AddToCartContext);
  const [letter, setLetter] = useState("");
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logOut, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
                  {favoriteTShirtCount}
                </span>
              </Link>
              <div className="flex relative items-center">
                <FiShoppingCart
                  size={23}
                  onClick={toggleSidebar}
                  className="primaryColor  hover:text-black cursor-pointer"
                />{" "}
                <span className="text-white  absolute mb-5 ml-3 flex text-[12px] font-bold items-center justify-center border-2 border-white bg-black rounded-full w-5 h-5 ">
                {cartTShirtCount}
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
                  className={`w-[360px]   bg-white h-full  transform transition-transform duration-500 ease-in-out ${
                    isSidebarOpen
                      ? "translate-x-0 overflow-auto transition-all duration-700 ease-in-out"
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
                  <div className="mt-32 border-b-2 pb-7 flex px-10 items-center flex-col justify-center ">
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
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, alias! Nobis provident sunt quod architecto tenetur praesentium, doloremque quos neque quaerat repellendus id accusamus pariatur ratione magnam accusantium ipsam animi? Voluptatum neque sapiente officiis dolor tempore et, magnam vel quia! Quos fugiat neque fuga quaerat vitae ducimus sunt est impedit reprehenderit, a quae aut accusamus maxime magnam suscipit veritatis, odit odio accusantium laboriosam quisquam voluptates. Eos odit accusantium saepe cumque unde excepturi nulla provident labore quia, pariatur impedit, numquam ab veniam debitis perferendis corrupti! Quis minima, quas eaque quibusdam perferendis dolorem non adipisci molestiae corrupti a earum, doloremque, aperiam culpa provident hic. Illum officia deserunt non ea corporis temporibus dolore repellat aliquid nesciunt dignissimos? Quas nisi pariatur necessitatibus sunt sit vitae dicta at quaerat impedit officia illum nam et, dolores qui commodi ipsam, sequi, minima eius totam veritatis soluta! Libero placeat blanditiis porro cumque animi tempora soluta sunt, minus eum?
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
