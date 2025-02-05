// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";

// Import your slices here (we will create them next)
import userReducer from "../feature/slice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Add your slices to the store here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
