import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Authenction/Login";
import Register from "../Pages/Authenction/Register";
import Shop from "../Pages/Shop/Shop";
import SingleShop from "../Pages/Shop/SingleShop";
import Loader from "../Components/Loader/Loader";
import Wishlist from "../Pages/Wishlist/wishlist";
import Dashboard from "../Layout/Dashboard";
import MyOrder from "../Pages/Dashboard/UserDashboard/MyOrder";
import MyProfile from "../Pages/Dashboard/UserDashboard/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop?category=/:Name",
        element: <Shop />,
      },
      {
        path: "/product-details/:id",
        element: <SingleShop />,
        loader: ({ params }) =>
          `http://localhost:5173/product-details/${params.id}`,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my_orders",
        element: <MyOrder />,
      },
      {
        path: "my_profile",
        element: <MyProfile />,
      },
    ],
  },
]);

export default router;
