import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Make sure to use 'chart.js/auto' for Chart.js v3
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../Redux/CheckOut/checkoutSlice";

const SalesChart = () => {
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
            label: "Sales",
            // data: checkoutsByMonth,
            data: [2, 9, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: "#10B981",
            borderColor: "#10B981",
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

export default SalesChart;
