import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
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

  extraReducers: (builders) => {
    builders.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;
