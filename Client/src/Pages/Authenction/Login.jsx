import React, { useState } from "react";
import Content from "../../Components/Content/Content";
import logo from "../../assets/LOGO/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../Components/Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import toast from 'react-hot-toast'
const Login = () => {
  const { singIn,setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      toast.success('login successful')
      navigate(from , {replace:true})
      setLoading(false);
    });
  };
  return (
    <Content>
      <section className="bg-white ">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-100 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://i.ibb.co/YPM5kr1/login.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </section>

          <main className="flex md:mt-10  justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative ">
                <div className=" flex items-center gap-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                  Welcome to{" "}
                  <span>
                    {" "}
                    <img className="w-28 pb-2 " src={logo} alt="" />
                  </span>
                </div>

                <p className="mt-4 leading-relaxed primaryColor">
                Enter your credentials to acces your account.


                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8"
              >
                <div className="space-y-6">
                <div className="">
                  <label
                    htmlFor="email"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </div>

                <div className="">
                  <label
                    htmlFor="password"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="password"
                      {...register("password", { required: true })}
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs primaryColor transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password
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
                </div>
                <Link>
                
                <p className="text-red-700 text-sm flex justify-end underline">Forgot Password?</p>
                </Link>
                <div className="py-5">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm primaryColor ">
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

                <div className="lg:flex lg:gap-4 pt-5">
                  <button
                    className={`inline-block shrink-0 rounded-md border ${
                      isCheckboxChecked
                        ? "bg-[#F62977] hover:bg-[#080921]"
                        : "border-gray-300 bg-gray-300 cursor-not-allowed"
                    } px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring `}
                    disabled={!isCheckboxChecked}
                  >
                    Login
                  </button>

                  <p className="mt-4  text-sm primaryColor sm:mt-0">
                    Already have an account?
                    <Link
                      to="/register"
                      className="secondaryColor font-medium pl-2 underline"
                    >
                      Create New Account
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Content>
  );
};

export default Login;