import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartData();
  }, []);

  async function fetchCartData() {
    const updatedCart = loadCart() || []; // Ensure cart is an array
    setCart(updatedCart);

    if (updatedCart.length === 0) {
      setTotal(0);
      setLabeledTotal(0);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`,
        { orderedItems: updatedCart }
      );

      if (response.data?.total != null) {
        setTotal(parseFloat(response.data.total) || 0);
        setLabeledTotal(parseFloat(response.data.labeledTotal) || 0);
      }
    } catch (error) {
      console.error("Error fetching cart total:", error);
    }
  }

  function handleItemDelete() {
    fetchCartData(); // Refresh cart after deletion
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center p-4 relative"
      style={{
        backgroundImage: 'url("/background3.png")', // Ensure this file is in 'public'
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Cart Table */}
      {cart.length > 0 ? (
        <table className="relative w-3/5 mx-auto border border-gray-400 border-collapse bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="border border-gray-200 text-gray-700 bg-yellow-500 text-lg font-semibold">
              <th className="border border-gray-200 p-2">Image</th>
              <th className="border border-gray-200 p-2">Product Name</th>
              <th className="border border-gray-200 p-2">Product ID</th>
              <th className="border border-gray-200 p-2">Qty</th>
              <th className="border border-gray-200 p-2">Price</th>
              <th className="border border-gray-200 p-2">Total</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartCard
                key={item.productId}
                productId={item.productId}
                qty={item.qty}
                onItemDelete={handleItemDelete}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="relative text-2xl font-semibold text-white mt-10">
          Your cart is empty!
        </h2>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="relative mt-6 text-center bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 p-6 rounded-lg shadow-md w-1/3">
          <h1 className="text-2xl font-bold text-gray-700">
            Total: LKR. {labeledTotal.toFixed(2)}
          </h1>
          <h1 className="text-2xl font-bold text-gray-700">
            Discount: LKR. {(labeledTotal - total).toFixed(2)}
          </h1>
          <h1 className="text-2xl font-bold text-gray-700">
            Grand Total: LKR. {total.toFixed(2)}
          </h1>
          <button
            onClick={() => navigate("/shipping", { state: { items: cart } })}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-white font-semibold p-3 rounded-lg w-[300px] mt-4 shadow-md transition-transform transform hover:scale-105"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
