import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api_url = "https://fakestoreapi.com/products";

export const productsCategories = createAsyncThunk(
  "productsSlice/Categories",
  async () => {
    const res = await fetch(`${api_url}/categories`);
    const data = await res.json();
    return data;
  }
);

export const categoreisSlice = createSlice({
  initialState: [],
  name: "categoreisSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default categoreisSlice.reducer;
