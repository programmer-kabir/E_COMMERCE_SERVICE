import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Heading from "./Heading";
import { FaArrowLeftLong, FaArrowRightToBracket } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/LOGO/logo.svg";
import useAdmin from "../Hooks/useAdmin";
import { BsGrid } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import productIcon from '../../assets/Dashboard/productIcon.svg'
const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleNavLinkClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const [isAdmin] = useAdmin();

  // console.log(isAdmin);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const activeLinkClass = "text-[#F62977] bg-[#FEF1F6] rounded";
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="flex">
      <div
        className={`bg-white border-r shadow-lg md:w-1/4 fixed  w-[70%] h-screen md:block ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="border-b h-16 border-black/20 flex md:block items-center justify-around">
          <Link to={"/"} className="pt-5">
            <img
              className="h-full w-full px-4 py-3  mx-auto"
              src={logo}
              alt=""
            />
          </Link>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaArrowLeftLong color="white" size={25} />
          </button>
        </div>
        {/* Left side Content */}
        <div className="pt-5 px-5 space-y-1">
          
          {isAdmin && (
            <div className="space-y-1  ">
             
              <NavLink
                to="admin_board"
                className={({ isActive }) =>
                  `font-medium transition-all py-3 text-base hover:text-black text-black   w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-black"
                  }`
                }
              >
                {/* <FaCircleUser className="w-5 h-5" /> */}
                <span className="flex items-center gap-2 ">
                  <BsGrid size={20}/>
                  Dashboard</span>
              </NavLink>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  `font-medium transition-all py-3 text-base hover:text-black text-black  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-black"
                  }`
                }
              >
                
                <span className="flex items-center gap-2 ">
                  <AiOutlineFileDone size={20}/>
                  Orders</span>
              </NavLink>
              <div className="px-5 cursor-pointer font-medium py-2">
      <div
       
        className={({ isActive }) =>
          `font-medium transition-all py-3  text-base hover:text-black text-black w-full flex items-center gap-4 px-5 capitalize ${
            isActive ? "bg-transparent" : "text-black"
          }`
        }
        onClick={handleNavLinkClick}
      >
        <span className="flex items-center gap-2">
          {/* <AiOutlineFileDone size={20}/> */}
          <img src={productIcon} alt="Product Icon" />
          Products
        </span>
      </div>
      {isSubMenuOpen && (
        <ul className="pl-6 pt-2">
          <li>
            <NavLink
              to="product-list"
              className="font-medium  text-sm transition-all   hover:text-black text-black w-full flex items-center gap-4 px-5 capitalize"
            >
              Product List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add-product"
              className="font-medium transition-all py-2 text-sm hover:text-black text-black w-full flex items-center gap-4 px-5 capitalize"
            >
              Add Product
            </NavLink>
          </li>
        </ul>
      )}
    </div>
              <NavLink
                to="manage_user"
                className={({ isActive }) =>
                  `font-medium transition-all py-3 text-base hover:text-black text-black  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-black"
                  }`
                }
              >
                {/* <FaCircleUser className="w-5 h-5" /> */}
                <span>Manage User</span>
              </NavLink>
            </div>
          )}
          {!isAdmin && (
            <div className="space-y-1">
              <NavLink
            to="my_profile"
            className={({ isActive }) =>
              `font-medium transition-all py-3 text-base hover:text-black text-black  w-full flex items-center gap-4 px-5 capitalize ${
                isActive ? activeLinkClass : ""
              }`
            }
          >
            {/* <FaUser className="w-5 h-5" /> */}
            <span>My Profile</span>
          </NavLink>
              <NavLink
                to="my_orders"
                className={({ isActive }) =>
                  `font-medium transition-all py-3 text-base hover:text-black text-black  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : ""
                  }`
                }
              >
                {/* <FaUser className="w-5 h-5" /> */}
                <span>My Orders</span>
              </NavLink>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="font-medium transition-all text-base hover:text-black text-black  w-full flex items-center pt-1  gap-2 px-5 capitalize"
          >
            <span>Log out</span>
            <FaArrowRightToBracket className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="md:flex-1 w-[100%] ">
        {/* Heading */}
        <div className="h-16">
          <Heading toggleSidebar={toggleSidebar} />
        </div>
        <div className="md:w-3/4  w-full ml-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
