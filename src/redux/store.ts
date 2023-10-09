import { configureStore } from "@reduxjs/toolkit";
import api from "./api/apiSlice";

const sotre = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default sotre;
