import React, { useEffect, useRef } from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import todayOrder from "../../../assets/Icon/DashboardIcon/TodayOrder.svg";
import yesterDayOrder from "../../../assets/Icon/DashboardIcon/YeasteDayOrder.svg";
import monthlyOrder from "../../../assets/Icon/DashboardIcon/MonthlyOrder.svg";
import TotalOrder from "../../../assets/Icon/DashboardIcon/TotalOrder.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";
import LineChart from "./Chart";
import Loader from "../../../Components/Loader/Loader";

const AdminBoard = () => {
  const { user } = useAuth();
  const { isLoading, checkouts } = useSelector((state) => state.checkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckout());
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <>
          <div className="p-7 bg-[#F1F5F9]">
            <div className="space-y-1">
              <h2 className="text-2xl font-medium">Dashboard</h2>
              <p className="text-sm">
                Welcome to your dashboard {user?.displayName}
              </p>
            </div>
            {/* Calculate Order  */}
            <section className="flex pt-8 items-center gap-7 justify-between">
              <div className="flex  items-center justify-between bg-white shadow rounded-md px-6 w-full py-5">
                <div className="space-y-1 ">
                  <h2 className="text-base font-semibold">0</h2>
                  <p className="text-sm">Today Orders</p>
                </div>
                <div className="bg-[#50CD89] text-white rounded-full p-3">
                  <img className="text-white" src={todayOrder} alt="" />
                </div>
              </div>
              <div className="flex  items-center justify-between bg-white shadow rounded-md px-6 w-full py-5">
                <div className="space-y-1 ">
                  <h2 className="text-base font-semibold">0</h2>
                  <p className="text-sm">Yesterday Orders</p>
                </div>
                <div className="bg-[#50CD89] text-white rounded-full p-3">
                  <img className="text-white" src={yesterDayOrder} alt="" />
                </div>
              </div>
              <div className="flex  items-center justify-between bg-white shadow rounded-md px-6 w-full py-5">
                <div className="space-y-1 ">
                  <h2 className="text-base font-semibold">0</h2>
                  <p className="text-sm">Monthly Orders</p>
                </div>
                <div className="bg-[#50CD89] text-white rounded-full p-3">
                  <img className="text-white" src={monthlyOrder} alt="" />
                </div>
              </div>
              <div className="flex  items-center justify-between bg-white shadow rounded-md px-6 w-full py-5">
                <div className="space-y-1 ">
                  <h2 className="text-base font-semibold">0</h2>
                  <p className="text-sm">Total Orders</p>
                </div>
                <div className="bg-[#50CD89] text-white rounded-full p-3">
                  <img className="text-white" src={TotalOrder} alt="" />
                </div>
              </div>
            </section>
            {/* Chart */}
            <section className="bg-white mt-5 shadow rounded-sm">
              <h2 className="text-xl font-medium">Sales Statistics</h2>
              <section className="bg-white mt-5 shadow rounded-sm p-5">
                <h2 className="text-xl font-medium">Sales Statistics</h2>
                <LineChart />
              </section>
            </section>
          </div>
        </>
      {/* )} */}
    </>
  );
};

export default AdminBoard;
