import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imgeSlider";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // not-found, found

  useEffect(() => {
    console.log(productId);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((res) => {
        console.log(res.data);
        //if null
        if (res.data == null) {
          setStatus("not-found");
        }
        if (res.data != null) {
          setProduct(res.data);
          setStatus("found");
        }
      });
  }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        {
          status === "loading" && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-accent border-b-4"></div>
            </div>
          )
        }
        {
          status === "not-found" && (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Oops! Product not found.</p>
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all"
                >
                  Go Back
                </button>
              </div>
            </div>
          )
        }
        {
          status === "found" && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[35%] h-full">
                <ImageSlider images={product.images} />
              </div>
              <div className="w-[65%] h-full p-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
                <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>
                <p className="text-xl text-gray-600">
                  {(product.price > product.lastPrice) && (
                    <span className="line-through text-red-500">LKR.{product.price}</span>
                  )}
                  <span>{" LKR." + product.lastPrice}</span>
                </p>
                <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
