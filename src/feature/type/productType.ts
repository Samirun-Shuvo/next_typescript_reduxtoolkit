// Define the minimal structure of a Post (the API response format)
export interface Products {
  id: number;
  name: string;
  description?: string;
  category: string;
  price: number;
  stock: number;
  sku?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

export interface ProductState {
  products: ProductType[];
  loading: boolean;
  error: string | null;
}
