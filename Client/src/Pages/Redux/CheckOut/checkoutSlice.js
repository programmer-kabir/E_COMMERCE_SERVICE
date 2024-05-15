import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCheckout = createAsyncThunk("class/fetchCheckout", async () => {
  const res = await axios.get("http://localhost:5000/checkout");
  return res.data;
});
const checkoutSlice = createSlice({
  name: "TShirts",
  initialState: {
    isLoading: false,
    checkouts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCheckout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCheckout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.checkouts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCheckout.rejected, (state, action) => {
      state.isLoading = false;
      state.checkouts = [];
      state.error = action.error.message;
    });
  },
});

export default checkoutSlice.reducer;
