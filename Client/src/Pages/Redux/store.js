import { configureStore } from "@reduxjs/toolkit";
import tShirtSlice from "./TShirt/tShirtSlice";
import userSlice from "./User/userSlice";
import reviewsSlice from "./Reviews/reviewsSlice";


const store = configureStore({
  reducer: {
    TShirts: tShirtSlice,
    users: userSlice,
    reviews:reviewsSlice,
  },
});
export default store;