import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../Components/Design/Breadcrumb";
import Content from "../../../Components/Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/User/userSlice";
import useAuth from "../../../Components/Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import { fetchTShirt } from "../../Redux/TShirt/tShirtSlice";
import { useLocation } from "react-router-dom";
import PriceInfo from "../../../Components/Design/PriceInfo";
import { FaPlus } from "react-icons/fa6";

const CheckOut = () => {
  const { user } = useAuth();
  const { isLoading: TShirtLoading, TShirts } = useSelector(
    (state) => state.TShirts
  );

  const { isLoading, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchTShirt());
  }, []);
 
  const FavoriteDataRaw = localStorage.getItem("cartTShirt");
  const FavoriteData = FavoriteDataRaw ? JSON.parse(FavoriteDataRaw) : [];
  const cartTShirts = TShirts.filter((shirt) =>
    FavoriteData.includes(shirt._id)
  );

  let firstName = "";
  let lastName = "";

  const currentUser = users.find((checkUser) => checkUser.email == user.email);
  if (currentUser) {
    const fullName = currentUser.name;
    [firstName, lastName] = fullName.split(" ");
  }
  const subtotal = cartTShirts.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  let delivery = 0;

//   if (cartTShirts.length === 1) {
//     delivery = 150;
//   } else if (cartTShirts.length > 1) {
//     delivery = 150 + (length - 1) * 150;
//   }
if (cartTShirts.length === 1) {
    delivery = 150;
  } else if (cartTShirts.length > 1) {
    delivery = 150 + (cartTShirts.length - 1) * 150;
  }
  const total = subtotal + delivery;
console.log(total);
  let discount = 0;
  if (total >= 3000) {
    discount = 150;
  } else if (total >= 6000) {
    discount = 300;
  } else if (total >= 9000) {
    discount = 500;
  }
  const discountedTotal = total - discount;
  const [showCheckOutBox, setShowCheckOutBox] = useState(false);

  return (
    <section className="p-2">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="h-[306px] bg-[#f1f1f1] flex flex-col items-center justify-center">
            <h2 className="text-7xl font-semibold pb-2">My WishList</h2>
            <Breadcrumb name={"CheckOut"} />
          </div>
          <Content>
            <section className="flex pt-12 gap-7">
              <div className="w-1/2">
                <h2 className="text-2xl border-b pb-2 font-semibold">
                  Billing Details
                </h2>
                <form className="space-y-5 pt-5">
                  {/* First Last name c */}
                  <div className="flex gap-5 w-full">
                    {/* First Name */}
                    <div className="space-y-2 w-full">
                      <p className="primaryColor font-medium text-sm">
                        First Name <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="First Name"
                        name=""
                        defaultValue={firstName}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                    {/* Last Name */}
                    <div className=" space-y-2 w-full">
                      <p className="primaryColor font-medium text-sm">
                        Last Name <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name=""
                        defaultValue={lastName}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                  </div>
                  {/* District  zilla */}
                  <div className="flex gap-5 w-full">
                    {/* District Name */}
                    <div className=" space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Division Name <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="District Name"
                        name=""
                        defaultValue={currentUser?.divison}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                    {/* zilla Name */}
                    <div className=" space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Zilla Name <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Zilla Name"
                        name=""
                        defaultValue={currentUser?.district}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                  </div>

                  <div className="flex gap-5 w-full">
                    {/* Up Zilla Name */}
                    <div className=" space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Up Zilla <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Up Zilla Name"
                        name=""
                        defaultValue={currentUser?.upZillah}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                    {/* Up Zilla Name */}
                    <div className=" space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Postcode / Zip <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Postcode / Zip "
                        name=""
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                  </div>

                  <div className="flex gap-5 w-full">
                    {/* Email Address  */}
                    <div className=" space-y-2 w-full">
                      <p className="primaryColor font-medium text-sm">
                        Email Address <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name=""
                        defaultValue={currentUser?.email}
                        disabled
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                    {/* Phone  */}
                    <div className=" space-y-2 w-full">
                      <p className="primaryColor font-medium text-sm">
                        Phone <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name=""
                        defaultValue={currentUser?.number}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-1/2 border-2 px-10 py-4">
                <h2 className="text-3xl border-b pb-2 font-semibold">
                  Your order
                </h2>
                <div className="flex justify-between pt-7 font-medium pb-2 border-b">
                  <h2>Product</h2>
                  <h2>Total</h2>
                </div>
                <div>
                  {cartTShirts.map((tShirt) => (
                    <div key={tShirt._id} className="flex justify-between pt-7 font-medium pb-2 border-b">
                      <h2>{tShirt?.title}</h2>
                      <h2>{tShirt?.price}</h2>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-7 font-medium pb-2 border-b">
                  <h2>Sub Subtotal </h2>
                  <h2>{subtotal}</h2>
                </div>
                <div className="flex justify-between pt-7 font-medium pb-2 border-b">
                  <h2>Shipping Cost /Delivery Charge </h2>
                  <h2>{delivery}</h2>
                </div>
                <div className="flex justify-between pt-7 font-medium pb-2 border-b">
                  <h2>Discount </h2>
                  <h2>{discount}</h2>
                </div>
                <div className="flex justify-between pt-7 font-medium pb-2 ">
                  <h2>Total Order </h2>
                  <h2>{discountedTotal}</h2>
                </div>
                <div  onClick={() => setShowCheckOutBox(!showCheckOutBox)} className="pt-10 px-5 hover:text-[#F62977] flex justify-between font-bold pb-2">
                    <p>Direct Bkash Transfer</p>
                    <FaPlus color="black"/>
                </div>
                {showCheckOutBox && <div>
                    <div className="flex gap-5 w-full">
                    {/* First Name */}
                    <div className="space-y-2 w-full">
                      
                      <input
                        type="text"
                        placeholder="First Name"
                        name=""
                        defaultValue={firstName}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id=""
                      />
                    </div>
                    
                  </div>
                    </div>}
              </div>
            </section>
          </Content>
        </>
      )}
    </section>
  );
};

export default CheckOut;
