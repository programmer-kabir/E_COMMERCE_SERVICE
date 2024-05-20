import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import todayOrder from "../../../assets/Icon/DashboardIcon/TodayOrder.svg";
import yesterDayOrder from "../../../assets/Icon/DashboardIcon/YeasteDayOrder.svg";
import monthlyOrder from "../../../assets/Icon/DashboardIcon/MonthlyOrder.svg";
import TotalOrder from "../../../assets/Icon/DashboardIcon/TotalOrder.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";
import SalesChart from "./SalesChart";
import Loader from "../../../Components/Loader/Loader";
import OrderChart from "./OrderChart";

const AdminBoard = () => {
  const { user } = useAuth();
  const { isLoading, checkouts } = useSelector((state) => state.checkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckout());
  }, []);
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  console.log(currentMonth);
  const formattedCurrentDate = formatDate(currentDate);
  // Get previous Date
  const previousDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);
  const formattedPreviousDate = formatDate(previousDate);
  console.log(formattedPreviousDate);
  // Filter checkouts with a valid orderDate and format them
  const formattedCheckouts = checkouts
    .filter((checkout) => checkout.orderDate)
    .map((checkout) => {
      const date = new Date(checkout.orderDate);
      const formattedDate = formatDate(date);
      return {
        ...checkout,
        orderDate: formattedDate,
        orderMonth: date.getMonth(),
        orderYear: date.getFullYear(),
      };
    });
  if (isLoading) {
    <Loader />;
  }

  // Find checkouts with the current date
  const currentDateData = formattedCheckouts.filter(
    (checkout) =>
      checkout.orderDate === formattedCurrentDate &&
      checkout.status !== "delivered"
  );
  // console.log(currentDateData.length);

  // Find checkouts with the Previous date
  const previousDataData = formattedCheckouts.filter(
    (checkout) =>
      checkout.orderDate === formattedPreviousDate &&
      checkout.status !== "delivered"
  );
  // console.log(previousDataData.length);

  // Find checkouts with the Month
  const currentMonthOrders = formattedCheckouts.filter(
    (checkout) =>
      checkout.orderMonth === currentMonth && checkout.status !== "delivered"
  );
  // console.log(currentMonthOrders.length);
  const [activeTabs, setActiveTabs] = useState("Sales")
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
                <h2 className="text-base font-semibold">
                  {currentDateData.length}
                </h2>
                <p className="text-sm">Today Orders </p>
              </div>
              <div className="bg-[#50CD89] text-white rounded-full p-3">
                <img className="text-white" src={todayOrder} alt="" />
              </div>
            </div>
            <div className="flex  items-center justify-between bg-white shadow rounded-md px-6 w-full py-5">
              <div className="space-y-1 ">
                <h2 className="text-base font-semibold">
                  {previousDataData.length}
                </h2>
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
                <h2 className="text-base font-semibold">
                  {currentMonthOrders.length}
                </h2>
                <p className="text-sm">Total Orders</p>
              </div>
              <div className="bg-[#50CD89] text-white rounded-full p-3">
                <img className="text-white" src={TotalOrder} alt="" />
              </div>
            </div>
          </section>
          {/* Chart */}
          <section className="bg-white p-7 rounded-md mt-5  shadow">
              <h2 className="text-xl font-medium">Sales Statistics</h2>
              <div className="border-b font-semibold text-base flex space-x-4">
        <button
          onClick={() => setActiveTabs('Sales')}
          className={`py-2 ${activeTabs === 'Sales' ? 'text-[#50CD89] shadow-sm ' : 'primaryColor'}`}
        >
          Sales
        </button>
        <button
          onClick={() => setActiveTabs('Orders')}
          className={`py-2 ${activeTabs === 'Orders' ? 'text-[#F97316] shadow-sm' : 'primaryColor'}`}
        >
          Orders
        </button>
      </div>
      <div className="mt-4">
        {activeTabs === 'Sales' && <div><SalesChart /></div>}
        {activeTabs === 'Orders' && <div><OrderChart /></div>}
      </div>
              {/* <LineChart /> */}
          </section>
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default AdminBoard;
