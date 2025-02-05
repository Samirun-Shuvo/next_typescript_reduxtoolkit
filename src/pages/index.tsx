import Layout from "@/components/Layout";
import { fetchUsers } from "@/feature/action/userAction";
import { AppDispatch, RootState } from "@/feature/store";
import { User } from "@/feature/type/userType";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Ensure correct dispatch type
  const { users, loading, error } = useSelector((state: RootState) => state.user); // Properly type state

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div className="text-center pt-4">
        <b>User List:</b>
        <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Edit</th>
              <th className="border border-gray-300 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Home;
