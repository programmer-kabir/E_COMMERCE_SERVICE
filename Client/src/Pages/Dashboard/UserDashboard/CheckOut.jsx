import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../Components/Design/Breadcrumb";
import Content from "../../../Components/Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/User/userSlice";
import useAuth from "../../../Components/Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import { fetchTShirt } from "../../Redux/TShirt/tShirtSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
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
  }, [ ]);

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

  if (cartTShirts.length === 1) {
    delivery = 150;
  } else if (cartTShirts.length > 1) {
    delivery = 150 + (cartTShirts.length - 1) * 150;
  }
  const total = subtotal + delivery;
  let discount = 0;
  if (total >= 4000) {
    discount = 150;
  } else if (total >= 8000) {
    discount = 300;
  } else if (total >= 12000) {
    discount = 450;
  }
  const discountedTotal = total - discount;
  const [showCheckOutBox, setShowCheckOutBox] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleToggleCheckOutBox = () => {
    setShowCheckOutBox(!showCheckOutBox);
    setIcon(!icon);
  };
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex pt-12 gap-7">
              <div className="w-1/2">
                <h2 className="text-2xl border-b pb-2 font-semibold">
                  Billing Details
                </h2>
                <div className="space-y-5 pt-5">
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
                        {...register("firstName", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="firstName"
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
                        {...register("lastName", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="lastName"
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
                        {...register("divison", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="divison"
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
                        {...register("district", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="district"
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
                        {...register("upZillah", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="upZillah"
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
                        {...register("postCode", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="Postcode"
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
                        {...register("email", { required: true })}
                        value={user?.email}
                        // disabled
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="email"
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
                        name="number"
                        {...register("number", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="number"
                      />
                    </div>
                  </div>
                  <div className=" space-y-2 w-full">
                    <p className="primaryColor font-medium text-sm">
                      Order Notes
                    </p>
                    <textarea
                      type="text"
                      rows={5}
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      name=""
                      {...register("notes", { required: true })}
                      className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                      id="notes"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`w-1/2 border-2 px-10 py-4 transition-height ease-in-out duration-500 ${
                  showCheckOutBox ? "h-[890px]" : "h-[806px]"
                }`}
              >
                <h2 className="text-3xl border-b pb-2 font-semibold">
                  Your order
                </h2>
                <div className="flex justify-between pt-7 font-medium pb-2 border-b">
                  <h2>Product</h2>
                  <h2>Total</h2>
                </div>
                <div>
                  {cartTShirts.map((tShirt) => (
                    <div
                      key={tShirt._id}
                      className="flex justify-between pt-7 font-medium pb-2 border-b"
                    >
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
                <div
                  onClick={handleToggleCheckOutBox}
                  className="pt-10 px-5 hover:text-[#F62977] flex justify-between font-bold pb-2"
                >
                  <p>Apply Coupon Code</p>
                  {showCheckOutBox ? <FaMinus color="red" /> : <FaPlus color="black" />}
                </div>
                <div>
                  <div className="flex gap-5 w-full">
                    {/* First Name */}
                    <div className="space-y-3 pt-2 w-full">
                      {showCheckOutBox && (
                        <div className="transition-all  ease-in-out duration-500 w-full top-0  overflow-auto ">
                          <div className="space-y-2 w-full">
                            <p className="primaryColor font-medium text-sm">
                              Coupon Code
                              <span className="text-red-600">*</span>
                            </p>
                            <input
                              type="text"
                              placeholder="Enter Coupon Code"
                              name=""
                              
                              {...register("coupon")}
                              className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                              id="coupon"
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <p className="primaryColor font-medium text-sm">
                          transaction Id <span className="text-red-600">*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Your Transaction Id"
                          name=""
                          {...register("transaction", { required: true })}
                          className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                          id="transaction"
                        />
                      </div>
                      <button  className="secondaryButton w-full py-4">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Content>
        </>
      )}
    </section>
  );
};

export default CheckOut;
