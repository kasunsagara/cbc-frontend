import { useLocation, useNavigate } from "react-router-dom";
import ShippingCard from "../../components/shippingCard";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShippingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.items;
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!cart) {
      toast.error("No items received");
      navigate("/cart");
      return;
    }
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: cart,
      })
      .then((res) => {
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch order quote. Please try again.");
        console.error(err);
      });
  }, [cart, navigate]);

  function validateInputs() {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!address.trim()) {
      toast.error("Please enter your address.");
      return false;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  }

  function createOrder() {
    if (!validateInputs()) return;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }
    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders",
        {
          orderedItems: cart,
          name,
          address,
          phone,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart) {
    return null;
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-4">
      <table className="w-3/5 mx-auto border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-200 border border-gray-400">
            <th className="border border-gray-400 p-2">Image</th>
            <th className="border border-gray-400 p-2">Product Name</th>
            <th className="border border-gray-400 p-2">Product ID</th>
            <th className="border border-gray-400 p-2">Qty</th>
            <th className="border border-gray-400 p-2">Price</th>
            <th className="border border-gray-400 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <ShippingCard key={item.productId} productId={item.productId} qty={item.qty} />
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-neutral-600 mt-4">
          Total: LKR. {labeledTotal.toFixed(2)}
        </h1>
        <h1 className="text-3xl font-bold text-neutral-600">
          Discount: LKR. {(labeledTotal - total).toFixed(2)}
        </h1>
        <h1 className="text-3xl font-bold text-neutral-600">
          Grand Total: LKR. {total.toFixed(2)}
        </h1>
      </div>

      <div className="w-3/5 bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            onKeyDown={(e) => e.key === "Enter" && document.getElementById("address").focus()}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Address</label>
          <textarea
            id="address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            onKeyDown={(e) => e.key === "Enter" && document.getElementById("phone").focus()}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            onKeyDown={(e) => e.key === "Enter" && createOrder()}
          />
        </div>
        <button
          className="bg-secondary hover:bg-accent text-white font-semibold p-2 rounded-lg w-full"
          onClick={createOrder}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}