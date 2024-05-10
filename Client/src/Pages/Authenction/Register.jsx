import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../Components/Hooks/useAuth";
import { RegisterUser } from "../../Components/Apis/userApis";
// import { RegisterUser } from "../../Components/Apis/userApis";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  const { createUser, updateUserProfile } = useAuth();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  // Const from value;
  // console.log(import.meta.env.VITE_LOCALHOST_KEY);
  const onSubmit = (data) => {
    const name = data.FirstName + " " + data.LastName;
    // if (data.password !== data.PasswordConfirmation) {
    //   toast.error("Password and Confirm Password do not match");
    //   return;
    // }
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(name)
        .then((data) => {
          RegisterUser(user);
        });
        toast.success("Registration successful! You can now log in.");
        navigate('/')
      })
      .catch((error) => {
        // Check if the error is due to email already in use
        // if (error.code === 'auth/email-already-in-use') {
        //   toast.error('Email is already in use. Please use a different email.');
        // } else {
          toast.error(error.message);
        // }
      });
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-100 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://i.ibb.co/tPQngDq/register-image.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </section>

          <main className="flex  justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative  ">
                <h1 className=" text-2xl font-bold primaryColor sm:text-3xl md:text-4xl">
                  Don’t have an account?
                </h1>

                <p className="mt-4 leading-relaxed primaryColor">
                  You can signup with you social account below
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8  space-y-4">
                <div className="lg:flex w-full gap-4 space-y-4 md:space-y-0">
                  <div className="w-full">
                    <label
                      htmlFor="FirstName"
                      className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                    >
                      <input
                        type="text"
                        id="FirstName"
                        {...register("FirstName", { required: true })}
                        placeholder="FirstName"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        First Name <span className="text-red-700">*</span>
                      </span>
                    </label>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="LastName"
                      className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                    >
                      <input
                        type="text"
                        id="LastName"
                        {...register("LastName", { required: true })}
                        placeholder="LastName"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute font-medium  start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        Last Name <span className="text-red-700">*</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email <span className="text-red-700">*</span>
                    </span>
                  </label>
                </div>

                <div className="lg:flex w-full gap-4 space-y-4 md:space-y-0">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password", { required: true })}
                      placeholder="password"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password <span className="text-red-700">*</span>
                    </span>

                    <span
                      className="absolute top-3 end-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {/* Add your eye icon here */}
                      {showPassword ? (
                        <FaEye size={18} />
                      ) : (
                        <FaEyeSlash size={18} />
                      )}
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="PasswordConfirmation"
                      {...register("PasswordConfirmation", { required: true })}
                      placeholder="PasswordConfirmation"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 font-medium -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password Confirmation{" "}
                      <span className="text-red-700">*</span>
                    </span>
                    <span
                      className="absolute top-3 end-3 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {/* Add your eye icon here */}
                      {showConfirmPassword ? (
                        <FaEye size={18} />
                      ) : (
                        <FaEyeSlash size={18} />
                      )}
                    </span>
                  </label>
                </div>
                </div>

                <div className="">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm primaryColor">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="">
                  <p className="text-sm primaryColor">
                    By creating an account, you agree to our
                    <Link className="secondaryColor px-1 underline">
                      terms and conditions
                    </Link>
                    and
                    <Link className="secondaryColor pl-1 underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="md:flex items-center gap-5">
                  <button
                    className={`inline-block shrink-0 rounded-md border ${
                      isCheckboxChecked
                        ? "bg-[#F62977] hover:bg-[#080921] "
                        : "border-gray-300 bg-gray-300 cursor-not-allowed"
                    } px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-blue-500`}
                    disabled={!isCheckboxChecked}
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm primaryColor sm:mt-0">
                    Already have an account?
                    <Link
                      to="/login"
                      className="secondaryColor font-medium pl-1 underline"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
