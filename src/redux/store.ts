import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    main: ProductSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
