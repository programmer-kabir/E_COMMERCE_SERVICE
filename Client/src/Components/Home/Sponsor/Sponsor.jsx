import React from "react";
import Content from "../../Content/Content";
import { GoArrowRight } from "react-icons/go";
import { MdCreditScore, MdOutlineLocalShipping } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
const Sponsor = () => {
  return (
    <Content>
      <div
        className="relative bg-cover bg-center h-[450px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/1RT19bq/i-phone.jpg')",
        }}
      >
        <div class="absolute inset-0 flex items-center ">
          <div class="lg:pl-24 space-y-3">
            <p class="primaryColor font-medium">Apple iPhone 12 Pro</p>
            <h2 class="text-5xl font-bold mb-2">
              The wait is on: <br /> iphone 12 max pro
            </h2>
            <p class="primaryColor pb-5">
              Last call for up to{" "}
              <span className="text-[24px] t text-black font-medium">32%</span>{" "}
              off!
            </p>
            <button
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
              class="bg-white text-sm text-black flex transition-colors hover:text-white 0.3s ease-in-ou items-center gap-2 hover:bg-[#F62977] font-medium py-3 px-5"
            >
              Buy Now <GoArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 items-center mt-10">
        {/* 1 */}
        <div className="flex gap-5">
          <div className="border rounded-full p-4 h-[64px] w-[64px]">
            <MdOutlineLocalShipping className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Free Shipping</h2>
            <p className="text-[15px] primaryColor">
              Free Shipping for orders over $120
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-5">
          <div className="border rounded-full h-[64px] w-[64px] p-4">
            <HiOutlineCurrencyDollar className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Refund</h2>
            <p className="text-[15px] primaryColor">
              Within 30 days for an exchange.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-5">
          <div className="border rounded-full h-[64px] w-[64px] p-4">
            <BiSupport className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Support</h2>
            <p className="text-[15px] primaryColor">
              24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex gap-5">
          <div className="border rounded-full h-[64px] w-[64px] p-4">
            <MdCreditScore className="w-[30px] h-[30px]" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Payment</h2>
            <p className="text-[15px] primaryColor">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Sponsor;
