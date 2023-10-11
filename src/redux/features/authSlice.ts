import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/globalTypes";

interface authState {
  isAuthenticated: boolean;
  userCredential: IUser | null;
}
const initialState: authState = {
  isAuthenticated: false,
  userCredential: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isAuthenticated = true), (state.userCredential = action.payload);
    },
    logout: (state) => {
      (state.isAuthenticated = false), (state.userCredential = null);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
