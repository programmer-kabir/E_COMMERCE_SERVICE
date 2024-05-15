import { configureStore } from "@reduxjs/toolkit";
import tShirtSlice from "./TShirt/tShirtSlice";
import userSlice from "./User/userSlice";
import reviewsSlice from "./Reviews/reviewsSlice";
import checkoutSlice from "./CheckOut/checkoutSlice";


const store = configureStore({
  reducer: {
    TShirts: tShirtSlice,
    users: userSlice,
    reviews:reviewsSlice,
    checkouts:checkoutSlice,
  },
});
export default store;