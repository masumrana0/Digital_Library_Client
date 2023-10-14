import { configureStore } from "@reduxjs/toolkit";
import api from "./api/bookSlice";
import authReducer from "./features/authSlice";
import wishlistReducer from "./features/wishlistSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    wislist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
