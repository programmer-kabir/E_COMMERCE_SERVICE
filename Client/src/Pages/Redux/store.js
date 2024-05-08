import { configureStore } from "@reduxjs/toolkit";
import tShirtSlice from "./TShirt/tShirtSlice";


const store = configureStore({
  reducer: {
    TShirts: tShirtSlice,
  },
});
export default store;