import axios from "axios";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const inputRefs = useRef([]);

    const handleKeyDown = (event, index) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    async function handleSubmit() {
        const altNames = alternativeNames.split(",");

        const promisesArray = [];

        for (let i = 0; i < imageFiles.length; i++) {
            promisesArray[i] = uploadMediaToSupabase(imageFiles[i]);
        }

        const imgUrls = await Promise.all(promisesArray);

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
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", product, {
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
        <div className="min-h-screen flex items-center justify-center">
            <form className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border-2">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Product Form</h1>
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Product ID</label>
                        <input
                            type="text"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 0)}
                            ref={(el) => (inputRefs.current[0] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Product ID"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 1)}
                            ref={(el) => (inputRefs.current[1] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Product Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Alternative Names</label>
                        <input
                            type="text"
                            value={alternativeNames}
                            onChange={(e) => setAlternativeNames(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 2)}
                            ref={(el) => (inputRefs.current[2] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Comma-separated names"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Image URLs</label>
                        <input
                            type="file"
                            onChange={(e) => { setImageFiles(e.target.files) }}
                            multiple
                            onKeyDown={(e) => handleKeyDown(e, 3)}
                            ref={(el) => (inputRefs.current[3] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Comma-separated URLs"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 4)}
                            ref={(el) => (inputRefs.current[4] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Price"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Last Price</label>
                        <input
                            type="text"
                            value={lastPrice}
                            onChange={(e) => setLastPrice(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 5)}
                            ref={(el) => (inputRefs.current[5] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Last Price"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Stock</label>
                        <input
                            type="text"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 6)}
                            ref={(el) => (inputRefs.current[6] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Stock"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, 7)}
                            ref={(el) => (inputRefs.current[7] = el)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Enter Description"
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}
