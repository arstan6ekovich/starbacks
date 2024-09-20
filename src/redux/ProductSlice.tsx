import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const ProductSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    AddProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { AddProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
