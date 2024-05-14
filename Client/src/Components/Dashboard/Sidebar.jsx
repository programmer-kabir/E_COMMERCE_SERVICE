import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Heading from "./Heading";
import { FaArrowLeftLong, FaArrowRightToBracket } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/LOGO/logo.svg";
const Sidebar = () => {
  const { user,logOut } = useAuth();

  const isAdmin = false;

  // console.log(isAdmin);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const activeLinkClass = "text-[#F62977] bg-[#FEF1F6] rounded";
  const handleLogout = () =>{
    logOut()
  }
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
        <div className="pt-10 px-5 space-y-3">
          <h2 className="text-base  font-medium text-gray-700 pb-5">MENU</h2>

          {isAdmin && (
            <div className="space-y-5 pt-2  pb-2">
              <NavLink
                to="manage_user"
                className={({ isActive }) =>
                  `font-medium transition-all text-base hover:text-[#F62977] text-[#6D7080]  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-[#6D7080]"
                  }`
                }
              >
                {/* <FaCircleUser className="w-5 h-5" /> */}
                <span>Manage User</span>
              </NavLink>
              <NavLink
                to="add-product"
                className={({ isActive }) =>
                  `font-medium transition-all text-base hover:text-[#F62977] text-[#6D7080]  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-[#6D7080]"
                  }`
                }
              >
                {/* <FaCircleUser className="w-5 h-5" /> */}
                <span>Add Product</span>
              </NavLink>
            </div>
          )}
          {!isAdmin && (
            <div className="space-y-2">
              <NavLink
                to="my_orders"
                className={({ isActive }) =>
                  `font-medium transition-all py-3 text-base hover:text-[#F62977] text-[#6D7080]  w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : ""
                  }`
                }
              >
                {/* <FaUser className="w-5 h-5" /> */}
                <span>My Orders</span>
              </NavLink>
            </div>
          )}

          <NavLink onClick={handleLogout} className="font-medium transition-all text-base hover:text-[#F62977] text-[#6D7080]  w-full flex items-center  gap-2 px-5 capitalize">
            <span>Log out</span>
            <FaArrowRightToBracket className="w-5 h-5" />
          </NavLink>
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
