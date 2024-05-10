import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchReviews = createAsyncThunk("class/fetchReviews", async () => {
  const res = await axios.get("http://localhost:5000/reviews");
  return res.data;
});
const reviewsSlice = createSlice({
  name: "TShirts",
  initialState: {
    isLoading: false,
    reviews: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
      state.error = null;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.reviews = [];
      state.error = action.error.message;
    });
  },
});

export default reviewsSlice.reducer;
