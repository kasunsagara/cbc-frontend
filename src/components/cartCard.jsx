import axios from "axios";
import { useEffect, useState } from "react";
import { deleteItem } from "../utils/cartFunction";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export default function CartCard({ productId, qty, onItemDelete, onQtyChange }) {
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(qty); // Local state for quantity

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((response) => {
        if (response.data) {
          setProduct(response.data);
          setLoaded(true);
        } else {
          handleDelete();
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  const handleDelete = () => {
    deleteItem(productId);
    onItemDelete(); // Update cart in parent component
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQtyChange(productId, quantity + 1); // Update quantity in parent component
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQtyChange(productId, quantity - 1); // Update quantity in parent component
    }
  };

  return (
    <>
      {!loaded ? (
        <tr>
          <td colSpan="7" className="text-center p-4">Loading...</td>
        </tr>
      ) : (
        <tr className="hover:bg-accent hover:text-white">
          <td className="p-2 border border-gray-200">
            <img
              src={product?.images?.[0] || "/placeholder.jpg"} // Fallback image
              className="w-[90px] h-[90px] object-cover mx-auto"
              alt="Product"
            />
          </td>
          <td className="text-center p-2 border border-gray-200">
            {product?.productName}
          </td>
          <td className="text-center p-2 border border-gray-200">{productId}</td>
          <td className="text-center p-2 border border-gray-200">
            {/* Adjusting the qty with icons */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={handleDecrease}
                className="text-gray-600 hover:text-gray-400"
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="text-gray-600 hover:text-gray-400"
              >
                <FaPlus />
              </button>
            </div>
          </td>
          <td className="text-center p-2 border border-gray-200">
            LKR. {product?.lastPrice?.toFixed(2)}
          </td>
          <td className="text-center p-2 border border-gray-200">
            LKR. {(product?.lastPrice * quantity).toFixed(2)}
          </td>
          <td className="text-center p-2 border border-gray-200">
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-400"
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
