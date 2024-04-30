import React from "react";
import logo from "../../../assets/LOGO/logo.svg";
import { Link } from "react-router-dom";
import FooterItem from "../../../Components/Design/FooterItem";
const Footer = () => {
  const companyItems = [
    "About us",
    "Careers",
    "Store Locations",
    "Our Blog",
    "Reviews"
  ];
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <img src={logo} alt="" />
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                The home and elements needed to create beautiful products.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              {/* <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Company</p>
                <div className="mt-8 space-y-4 text-sm">
                  <Link>About us</Link>
                  <Link>Careers</Link>
                  <Link>Store Locations</Link>
                  <Link>Our Blog</Link>
                  <Link>Reviews</Link>
                </div>
              </div> */}
              <FooterItem name={'Company'} items={companyItems}/>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Shop</p>

                <div className="mt-8 space-y-4 text-sm">
                  <Link>Game & Video</Link>
                  <Link>Phone &Tablets</Link>
                  <Link>Computers & Laptop</Link>
                  <Link>Sport Watches</Link>
                  <Link>Discounts</Link>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Support</p>
                <div className="mt-8 space-y-4 text-sm">
                  <Link>FAQs</Link>
                  <Link>Reviews</Link>
                  <Link>Store Locations</Link>
                  <Link>Our Blog</Link>
                  <Link>Reviews</Link>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Talk To Us</p>
                <div className="mt-8 space-y-4 text-sm">
                  <p>Find a location nearest you. See Our Stores</p>
                  <h2>+624 423 26 72</h2>
                  <h2>support@MernShop.com</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
