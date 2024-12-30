import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios.get("http://localhost:5000/api/products").then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setProductsLoaded(true);
      })
    }
  }, [productsLoaded]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Products Page</h1>
        <Link
          to={"/admin/products/addProduct"}
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all"
        >
          <FaPlus />
        </Link>
      </div>

      {productsLoaded ? (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3">Product ID</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Last Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 transition-all ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4">{product.productId}</td>
                  <td className="px-6 py-4">{product.productName}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">${product.lastPrice}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.description}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      title="Delete"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => {
                        const token = localStorage.getItem("token");

                        axios
                          .delete(
                            `http://localhost:5000/api/products/${product.productId}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res.data);
                            toast.success("Product deleted successfully");
                            setProductsLoaded(false);
                          });
                      }}
                    >
                      <FaTrash />
                    </button>
                    <button
                      title="Edit"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaPencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-64 flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
