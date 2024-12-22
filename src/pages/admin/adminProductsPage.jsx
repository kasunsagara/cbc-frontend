import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([
        {
            "_id": "674cca343a649c3cfbda8c36",
            "productId": "BC202401",
            "productName": "Hydrating Face Cream",
            "altNames": ["Moisturizing Cream", "Daily Face Lotion"],
            "images": [
                "https://example.com/images/face-cream-front.jpg",
                "https://example.com/images/face-cream-back.jpg"
            ],
            "price": 18.5,
            "lastPrice": 22.99,
            "stock": 75,
            "description": "A lightweight, non-greasy face cream enriched with hyaluronic acid and vitamin E, suitable for all skin types.",
            "__v": 0
        },
        {
            "_id": "67555424825281c0c80ae4c5",
            "productId": "BC202402",
            "productName": "Rose Glow Serum",
            "altNames": ["Facial Serum", "Brightening Serum"],
            "images": [
                "https://example.com/images/rose-glow-serum-front.jpg",
                "https://example.com/images/rose-glow-serum-ingredients.jpg"
            ],
            "price": 30,
            "lastPrice": 35.99,
            "stock": 50,
            "description": "A luxurious serum infused with rosehip oil and natural antioxidants to brighten skin and reduce fine lines.",
            "__v": 0
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Admin Products Page</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                src={product.images[0]}
                                alt={product.productName}
                                className="h-40 w-40 object-cover rounded-md"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {product.productName}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-bold text-green-600">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.lastPrice && (
                                <span className="text-sm line-through text-gray-500">
                                    ${product.lastPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                            Stock: {product.stock}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
