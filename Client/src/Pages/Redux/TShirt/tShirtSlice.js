import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTShirt = createAsyncThunk("class/fetchTShirt", async () => {
  const res = await axios.get("http://localhost:5000/all_t_shirt");
  return res.data;
});
const tShirtSlice = createSlice({
  name: "TShirts",
  initialState: {
    isLoading: false,
    TShirts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTShirt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTShirt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.TShirts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTShirt.rejected, (state, action) => {
      state.isLoading = false;
      state.TShirts = [];
      state.error = action.error.message;
    });
  },
});

export default tShirtSlice.reducer;
