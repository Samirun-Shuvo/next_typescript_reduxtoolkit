/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../type/productType";

export const fetchProducts = createAsyncThunk<
  ProductType[], // Return type is ProductType[]
  void,
  { rejectValue: string }
>("product/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json(); // Placeholder response

    // Map the post data to ProductType with mock fields
    return data.map((product: any) => ({
      id: product.id,
      name: product.title, // Assuming post title is product name
      category: "General", // Placeholder category
      price: Math.floor(Math.random() * 100) + 10, // Random price for testing
      inStock: Math.random() > 0.5, // Random inStock status for testing
    }));
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
