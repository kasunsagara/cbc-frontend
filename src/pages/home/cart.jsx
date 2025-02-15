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
    setCart(loadCart());
    console.log(loadCart());
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: loadCart(),
      })
      .then((res) => {
        console.log(loadCart());
        console.log(res.data);
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      });
  }, []);

  function onOrderCheckOutClick() {
    navigate("/shipping", {
      state: {
        items: loadCart(),
      },
    });
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
            <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
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
        <button
          onClick={onOrderCheckOutClick}
          className="bg-secondary hover:bg-accent text-white font-semibold p-2 rounded-lg w-[300px] mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
