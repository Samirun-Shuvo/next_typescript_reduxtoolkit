import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUser, User } from "../type/userType";

// Async thunk to fetch users from an API
export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("user/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: ApiUser[] = await response.json(); // Ensure correct typing
    return data.map((user) => ({
      id: user.id, // ✅ Ensure `id` is included
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
