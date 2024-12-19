import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">

            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-4 space-y-4">

                <Link 
                    className="flex flex-row items-center text-white space-x-2 hover:text-gray-200" 
                    to="/admin/dashboard"
                >
                    <GoGraph size={20} />
                    <span>Dashboard</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-2 hover:text-gray-200" 
                    to="/admin/products"
                >
                    <FiPackage size={20} />
                    <span>Products</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-2 hover:text-gray-200" 
                    to="/admin/orders"
                >
                    <AiOutlineShoppingCart size={20} />
                    <span>Orders</span>
                </Link>

                <Link 
                    className="flex flex-row items-center text-white space-x-2 hover:text-gray-200" 
                    to="/admin/customers"
                >
                    <AiOutlineUser size={20} />
                    <span>Customers</span>
                </Link>
            </div>

            <div className="w-[80%] h-screen bg-red-600">
                <Routes path="/*">
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/products" element={<h1>Products</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/customers" element={<h1>Customers</h1>} />
                    <Route path="/*" element={<h1>404 not found the admin page</h1>} />
                </Routes>
            </div>

        </div>
    );
}
