import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageUrls, setImageUrls] = useState("");
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        const altNames = alternativeNames.split(",");
        const imgUrls = imageUrls.split(",");

        const product = {
            productId: productId,
            productName: productName,
            altNames: altNames,
            images: imgUrls,
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description,
        };

        const token = localStorage.getItem("token");
        try {
            await axios.post("http://localhost:5000/api/products", product, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            navigate("/admin/products");
            toast.success("Product added successfully");
        } catch (err) {
            toast.error("Failed to add product");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Product Form</h1>
                <div className="space-y-4">

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Product ID</label>
                        <input
                            type="text"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product ID"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product Name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Alternative Names</label>
                        <input
                            type="text"
                            value={alternativeNames}
                            onChange={(e) => setAlternativeNames(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Comma-separated names"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Image URLs</label>
                        <input
                            type="text"
                            value={imageUrls}
                            onChange={(e) => setImageUrls(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Comma-separated URLs"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Price"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Last Price</label>
                        <input
                            type="text"
                            value={lastPrice}
                            onChange={(e) => setLastPrice(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Last Price"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Stock</label>
                        <input
                            type="text"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Stock"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-gray-600 mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Description"
                        ></textarea>
                    </div>
                    
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}
