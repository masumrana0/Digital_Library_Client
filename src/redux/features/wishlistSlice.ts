import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../types/globalTypes";

interface IWislist {
  Wislistbooks: IBook[];
  ReadingListBooks: IBook[];
  FinishedListBooks: IBook[];
  total: number;
}

const initialState: IWislist = {
  Wislistbooks: [],
  ReadingListBooks: [],
  FinishedListBooks: [],
  total: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      state.Wislistbooks.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.Wislistbooks = state.Wislistbooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
    addToReadingList: (state, action: PayloadAction<IBook>) => {
      state.ReadingListBooks.push(action.payload);
      state.Wislistbooks = state.Wislistbooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
    removeFromReadingList: (state, action: PayloadAction<IBook>) => {
      state.ReadingListBooks = state.ReadingListBooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
    addToFinishedList: (state, action: PayloadAction<IBook>) => {
      state.FinishedListBooks.push(action.payload);
      state.ReadingListBooks = state.ReadingListBooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
    removeFromFinishedList: (state, action: PayloadAction<IBook>) => {
      state.FinishedListBooks = state.FinishedListBooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  addToReadingList,
  removeFromReadingList,
  addToFinishedList,
  removeFromFinishedList,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
