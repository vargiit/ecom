import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk(
  "fetch/Categories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return await response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
