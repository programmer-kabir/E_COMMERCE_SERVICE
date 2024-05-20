import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Make sure to use 'chart.js/auto' for Chart.js v3
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";

const OrderChart = () => {
  const { isLoading, checkouts } = useSelector((state) => state.checkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckout());
  }, [dispatch]);

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    const checkoutsByMonth = Array(12).fill(0);

    checkouts.forEach((checkout) => {
      const date = new Date(checkout.orderDate);
      const month = date.getMonth();
      if (checkout.status === "delivered") {
        // Condition to count only delivered checkouts
        checkoutsByMonth[month] += 1;
      }
    });
    chartInstance.current = new Chart(chartContainer.current, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Orders",
            // data: checkoutsByMonth,
            data: [0, 1, 9, 45, 7, 98, 85, 77, 25, 8, 91, 56],
            fill: false,
            backgroundColor: "#F97316",
            borderColor: "#F97316",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup function to destroy the chart instance on unmount
      chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default OrderChart;
