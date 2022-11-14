import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "fetchAll/Products",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return await response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      (state.loading = true), (state.value = action.payload);
    });
  },
});

export default productsSlice.reducer;
