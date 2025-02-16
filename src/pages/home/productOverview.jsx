import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../../components/imgeSlider";
import { addToCart } from "../../utils/cartFunction";
import toast from "react-hot-toast";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // not-found, found
  const navigate = useNavigate();
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

  function onAddtoCartClick(){
    addToCart(product.productId,1)
    toast.success(product.productId+" Added to cart")
  }

  function onBuyNowClick(){
    navigate("/shipping",{
      state:{
        items: [
          {
            productId: product.productId,
            qty: 1
          }
        ]
      }
    })
  }

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="max-w-5xl p-5 rounded-lg shadow-lg shadow-gray-500 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        {
          status === "loading" && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-accent border-b-4"></div>
            </div>
          )
        }
        {
          status === "not-found" && (
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Product not found</p>
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-2 bg-secondary hover:bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all"
                >
                  Go Back
                </button>
              </div>
            </div>
          )
        }
        {
          status === "found" && (
            <div className="w-full h-full flex items-center justify-center p-4"> 
              <div className="w-[37%] h-full p-4">
                <ImageSlider images={product.images} />
              </div>
              <div className="w-[63%] h-full p-4"> 
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.productName}</h1>
                <h1 className="text-3xl font-bold text-gray-500 mb-6">{product.altNames.join(" | ")}</h1>
                <p className="text-xl text-black mb-6">
                  {(product.price > product.lastPrice) && (
                    <span className="line-through text-gray-500">LKR. {product.price}</span>
                  )}
                  <span>{" LKR. " + product.lastPrice}</span>
                </p>
                <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
                <button onClick={onAddtoCartClick} className="bg-secondary hover:bg-accent text-white font-semibold p-2 rounded-lg mr-2">
                Add to cart
                </button>
                <button onClick={onBuyNowClick} className="bg-secondary hover:bg-accent text-white font-semibold p-2 rounded-lg">
                Buy Now
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
