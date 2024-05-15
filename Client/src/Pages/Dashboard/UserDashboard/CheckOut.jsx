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
import axios from "axios";
import District from "../../../Components/Apis/Distric";
import Division from "../../../Components/Apis/Division";
import upZillah from "../../../Components/Apis/upZillah";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";
import { generateOrderId } from "../../../Components/Ulitis/GenarateId";
const CheckOut = () => {
  const { user } = useAuth();

  const { isLoading:isCheckoutLoading, checkouts } = useSelector(
    (state) => state.checkouts
  );

  const { isLoading, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCheckout());
  }, []);
 
  const cartDataRaw = localStorage.getItem("cartTShirt");
  const cartData = cartDataRaw ? JSON.parse(cartDataRaw) : [];

  let firstName = "";
  let lastName = "";

  const currentUser = users.find((checkUser) => checkUser.email == user.email);
  if (currentUser) {
    const fullName = currentUser.name;
    [firstName, lastName] = fullName.split(" ");
  }
  // const subtotal = cartData.reduce(
  //   (acc, item) => acc + parseFloat(item?.price),
  //   0
  // );
  const subtotal = cartData.reduce(
    (acc, item) => acc + parseFloat(item?.price * item?.quantity),
    0
  );

  let delivery = 0;

  if (cartData.length === 1) {
    delivery = 150;
  } else if (cartData.length > 1) {
    delivery = 150 + (cartData.length - 1) * 150;
  }
  const total = subtotal + delivery;
  let discount = 0;
  if (total >= 5000) {
    discount = 150;
  } else if (total >= 10000) {
    discount = 300;
  } else if (total >= 15000) {
    discount = 450;
  }
  const discountedTotal = total - discount;
  const [showCheckOutBox, setShowCheckOutBox] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleToggleCheckOutBox = () => {
    setShowCheckOutBox(!showCheckOutBox);
    setIcon(!icon);
  };
  const [district] = District();
  const [division] = Division();
  const [upZillahs] = upZillah();
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpzillah, setSelectedUpzillah] = useState("");
  const selectedDivisionId = division.find(
    (div) => div.name === selectedDivision
  )?.id;
  // console.log("selectedDistrict", selectedDistrict);
  const districtsInSelectedDivision = selectedDivisionId
    ? district.filter((dist) => dist.division_id === selectedDivisionId)
    : [];

  // Upzillah
  const upzillahsInSelectedDistrict = selectedDistrict
    ? upZillahs.filter((upzillah) => upzillah.district_id === selectedDistrict)
    : [];
  useEffect(() => {
    // console.log("Divisions:", division);
  }, [division]);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
const orderId = generateOrderId()

    const selectedProduct = cartData.map((tShirt) => tShirt._id);
    const districtId = data.district;
    data.orderId = orderId,
    data.totalPrice = discountedTotal;
    data.productPrice = subtotal;
    data.status='Confirm Payment';
    data.deliveryCharge = delivery;
    data.productId = selectedProduct;
    const currentDistrict = district.find((dis) => dis.id === districtId);
    data.district = currentDistrict ? currentDistrict.name : "";

    console.log(data);
    axios
      .post(`${import.meta.env.VITE_LOCALHOST_KEY}/CheckOut`, data)
      .then((data) => {
        console.log(data);
      });
   
  };
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex pt-12 gap-7"
            >
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
                    <div className="space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Divison Name <span className="text-red-600">*</span>
                      </p>
                      <label
                        htmlFor="division"
                        className="block bg-[#f5f5f8]   overflow-hidden px-3 shadow-sm outline-none "
                      >
                        <select
                          id="division"
                          {...register("divison", { required: true })}
                          value={selectedDivision}
                          onChange={(e) => setSelectedDivision(e.target.value)}
                          className=" py-4 w-full border-none bg-transparent p-0 placeholder-transparent text-base outline-none"
                        >
                          <option value="" disabled>
                            Select Division
                          </option>
                          {division.map((divisions) => (
                            <option key={divisions.id} value={divisions.name}>
                              {divisions.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    {/* zilla Name */}
                    <div className="space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Zilla Name <span className="text-red-600">*</span>
                      </p>
                      <label
                        htmlFor="district"
                        className="block bg-[#f5f5f8]   overflow-hidden  px-3 shadow-sm outline-none "
                      >
                        <select
                          id="district"
                          {...register("district", { required: true })}
                          value={selectedDistrict}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                          className="   py-4 w-full border-none bg-transparent p-0 placeholder-transparent text-base outline-none"
                        >
                          <option value="" disabled>
                            Select Zilla
                          </option>
                          {districtsInSelectedDivision.map((district) => (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-5 w-full">
                    {/* Up Zilla Name */}
                    <div className="space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Up Zilla Name <span className="text-red-600">*</span>
                      </p>
                      <label
                        htmlFor="upZillah"
                        className="block  bg-[#f5f5f8]   overflow-hidden px-3 shadow-sm outline-none "
                      >
                        <select
                          id="upZillah"
                          {...register("upZillah", { required: true })}
                          value={selectedUpzillah}
                          onChange={(e) => setSelectedUpzillah(e.target.value)}
                          className="  text-base  py-4 w-full border-none bg-transparent p-0 placeholder-transparent  outline-none"
                        >
                          <option value="" disabled>
                            Select Up Zilla
                          </option>
                          {upzillahsInSelectedDistrict.map((upzillah) => (
                            <option key={upzillah.id} value={upzillah.name}>
                              {upzillah.name}
                            </option>
                          ))}
                        </select>
                      </label>
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
                  {/* Village */}
                  <div>
                    <div className=" space-y-2  w-full">
                      <p className="primaryColor font-medium text-sm">
                        Village Name <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Your Village Name "
                        {...register("village", { required: true })}
                        className="w-full text-base py-4 px-5 focus:border-[#F62977] focus:border border border-[#f5f5f8] focus:bg-transparent outline-none bg-[#f5f5f8] "
                        id="village"
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
                      {...register("notes")}
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
                  {cartData.map((tShirt) => (
                    <div
                      key={tShirt?._id}
                      className="flex justify-between pt-7 font-medium pb-2 border-b"
                    >
                      <h2 className="font-semibold flex gap-1 items-center">
                        {tShirt?.title}
                        <FaPlus className="rotate-45" size={17} />
                        {tShirt.quantity}
                      </h2>
                      <h2>{tShirt ? tShirt.price * tShirt.quantity : 0}</h2>
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
                  <h2 className="secondaryColor font-medium">
                    {discountedTotal}
                  </h2>
                </div>
                <div
                  onClick={handleToggleCheckOutBox}
                  className="pt-10 px-5 hover:text-[#F62977] flex justify-between font-bold pb-2"
                >
                  <p>Apply Coupon Code</p>
                  {showCheckOutBox ? (
                    <FaMinus color="red" />
                  ) : (
                    <FaPlus color="black" />
                  )}
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
                      <button className="secondaryButton w-full py-4">
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
