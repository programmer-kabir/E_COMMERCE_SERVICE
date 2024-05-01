import React from "react";
import logo from "../../../assets/LOGO/logo.svg";
import { Link } from "react-router-dom";
import FooterItem from "../../../Components/Design/FooterItem";
import footerImg from '../../../assets/Bank/footer-payment.webp'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  // console.log(currentYear);

  const companyItems = [
    "About us",
    "Careers",
    "Store Locations",
    "Our Blog",
    "Reviews",
  ];
  const shopItems = [
    "Game & Video",
    "Phone &Tablets",
    "Computers & Laptop",
    "Sport Watches",
    "Discounts",
  ];
  const supportItems = ["FAQs", "Reviews", "Contact Us", "Shipping", "Returns"];
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-start">
                <img src={logo} alt="" />
              </div>

              <p className="mt-6  leading-relaxed primaryColor ">
                The home and elements needed to create beautiful products.
              </p>
              <div className="flex gap-4 pt-4 primaryColor cursor-pointer">
              <FaFacebookF className="hover:text-[#F62977] " size={18}/>
              <FaTwitter className="hover:text-[#F62977] " size={18}/>
              <FaLinkedinIn className="hover:text-[#F62977] " size={18}/>
              <FaYoutube className="hover:text-[#F62977] " size={18}/>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <FooterItem name={"Company"} items={companyItems} />
              <FooterItem name={"Shop"} items={shopItems} />
              <FooterItem name={"Support"} items={supportItems} />
              <div className="">
                <p className="text-lg font-medium ">Talk To Us</p>
                <div className="mt-7 text-sm">
                  <p className="primaryColor text-base my-3">
                    Find a location nearest you. See{" "}
                    <Link className="secondaryColor underline">Our Stores</Link>
                  </p>
                  <h2 className="text-xl font-medium">+624 423 26 72</h2>
                  <h2 className="text-base primaryColor">
                    support@MernShop.com
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t  pt-6">
            <div className="sm:flex sm:justify-between text-start space-y-5">
            <p className="mt-4 primaryColor text-sm sm:mt-0">
                Copyright © {currentYear} by{" "}
                <span className="secondaryColor">HarriShop</span> All rights
                reserved.
              </p>
              <div className="cursor-pointer">
   <img src={footerImg} alt="" />
              </div>

             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
