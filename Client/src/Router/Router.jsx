import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Authenction/Login";
import Register from "../Pages/Authenction/Register";
import Shop from "../Pages/Shop/Shop";
import SingleShop from "../Pages/Shop/SingleShop";

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
        loader: ({ params }) => `http://localhost:5173/product-details/${params.id}`,

      },
    ],
  },
]);

export default router;
