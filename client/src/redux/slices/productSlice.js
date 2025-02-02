import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (userId, { rejectWithValue }) => {
    const url = userId
      ? `${API_BASE_URL}/products/user/${userId}`
      : `${API_BASE_URL}/products`;

    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
