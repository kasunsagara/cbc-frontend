import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);

  useEffect(() => {
    setCart(loadCart());
    console.log(loadCart());
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: loadCart(),
      })
      .then((res) => {
        console.log(res.data);
        setTotal(res.data.total);
        setLabeledTotal(res.data.labeledTotal);
      });
  }, []);

  function onOrderCheckOutClick() {
    const token = localStorage.getItem("token");
    if (token == null) {
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders",
        {
          orderedItems: cart,
          name: "John Doe",
          address: "123, Galle Road, Colombo 03",
          phone: "0771234567",
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      <table className="w-3/5 mx-auto border-collapse">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
          ))}
        </tbody>
      </table>
      <h1 className="text-3xl font-bold text-neutral-600 mt-4">
        Total: LKR. {labeledTotal.toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-neutral-600">
        Discount: LKR. {(labeledTotal - total).toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-neutral-600">
        Grand Total: LKR. {total}
      </h1>
      <button
        onClick={onOrderCheckOutClick}
        className="bg-secondary hover:bg-accent text-white font-semibold p-2 rounded-lg w-[300px] mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
