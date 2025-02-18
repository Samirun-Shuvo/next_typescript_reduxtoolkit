import { fetchProducts } from "@/feature/action/productAction";
import { RootState, useAppDispatch } from "@/feature/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useAppDispatch(); // Use the custom typed dispatch hook
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the async action
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error}</div>; // Error handling

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-lg font-bold mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 p-2 border-b">
            {product.name} {/* Display product name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
