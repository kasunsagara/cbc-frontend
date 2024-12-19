import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminHomePage() {
    return (
        <div className="bg-gray-100 w-full h-screen flex">

            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-blue-600 flex flex-col items-center py-8 space-y-6 shadow-lg">

                <h1 className="text-white text-2xl font-bold">Admin Panel</h1>

                <Link 
                    className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-blue-700 rounded-lg w-[80%] transition ease-in-out duration-200" 
                    to="/admin/dashboard"
                >
                    <GoGraph size={20} />
                    <span className="text-lg">Dashboard</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-blue-700 rounded-lg w-[80%] transition ease-in-out duration-200" 
                    to="/admin/products"
                >
                    <FiPackage size={20} />
                    <span className="text-lg">Products</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-blue-700 rounded-lg w-[80%] transition ease-in-out duration-200" 
                    to="/admin/orders"
                >
                    <AiOutlineShoppingCart size={20} />
                    <span className="text-lg">Orders</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-blue-700 rounded-lg w-[80%] transition ease-in-out duration-200" 
                    to="/admin/customers"
                >
                    <AiOutlineUser size={20} />
                    <span className="text-lg">Customers</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="w-[80%] h-screen bg-white p-6 overflow-auto">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Admin Panel</h1>
                    <p className="text-gray-600 mt-2">Manage your store efficiently and effectively!</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <Routes path="/*">
                        <Route path="/dashboard" element={<h1 className="text-xl font-medium">Dashboard</h1>} />
                        <Route path="/products" element={<AdminProductsPage />} />
                        <Route path="/orders" element={<h1 className="text-xl font-medium">Orders</h1>} />
                        <Route path="/customers" element={<h1 className="text-xl font-medium">Customers</h1>} />
                        <Route path="/*" element={<h1 className="text-xl font-medium text-red-500">404 - Page Not Found</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
