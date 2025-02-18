// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";

// Import your slices here (we will create them next)
import userReducer from "../feature/slice/userSlice";
import productReducer from "../feature/slice/productSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer, // Add your slices to the store here
    product: productReducer, // Add your slices to the store here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

// Custom hook to access typed dispatch