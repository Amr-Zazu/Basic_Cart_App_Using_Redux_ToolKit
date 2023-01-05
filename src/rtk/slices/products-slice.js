import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api_url = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    return data;
  }
);

export const productsInCategory = createAsyncThunk(
  "productsSlice/ProductsInCategories",
  async (catName) => {
    const res = await fetch(`${api_url}/category/${catName}`);
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(productsInCategory.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default productsSlice.reducer;
