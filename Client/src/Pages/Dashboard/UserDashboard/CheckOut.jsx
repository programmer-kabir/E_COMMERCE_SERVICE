import React from "react";
import Breadcrumb from "../../../Components/Design/Breadcrumb";
import { FaFolderClosed } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CheckOut = () => {
  return (
    <section className="p-7">
      <Breadcrumb name={"Dashboard/CheckOut"} />
      <section className="px-12">
        <div className="flex justify-between gap-10 items-center pt-10">
          <div className="w-[50%] flex items-center text-sm gap-4 pt-2 px-2 border-t-[3px] border-[#F62977]">
            <FaFolderClosed />
            <div>
              <span>Returning customer? </span>
              <button className="font-semibold">Click here to login</button>
            </div>
          </div>
          <div className="w-[50%] flex items-center text-sm gap-4 pt-2 px-2 border-t-[3px] border-[#F62977]">
            <FaFolderClosed />
            <div>
              <span>Have a coupon? </span>
              <button className="font-semibold">
                Click here to enter your code
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckOut;
