import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsCart4, BsPeopleFill } from "react-icons/bs";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="w-full h-screen flex">

      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-secondary flex flex-col items-center py-8 space-y-6 shadow-lg">

        <h1 className="text-white text-2xl font-bold">Admin Panel</h1>

        <Link
          className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-accent rounded-lg w-[80%] transition ease-in-out duration-200"
          to="/admin/dashboard"
        >
          <BsGraphUp size={20} />
          <span className="text-lg">Dashboard</span>
        </Link>

        <Link
          className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-accent rounded-lg w-[80%] transition ease-in-out duration-200"
          to="/admin/products"
        >
          <BsBoxSeam size={20} />
          <span className="text-lg">Products</span>
        </Link>

        <Link
          className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-accent rounded-lg w-[80%] transition ease-in-out duration-200"
          to="/admin/orders"
        >
          <BsCart4 size={20} />
          <span className="text-lg">Orders</span>
        </Link>

        <Link
          className="flex flex-row items-center text-white space-x-3 px-4 py-2 hover:bg-accent rounded-lg w-[80%] transition ease-in-out duration-200"
          to="/admin/customers"
        >
          <BsPeopleFill size={20} />
          <span className="text-lg">Customers</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen bg-primary p-6 overflow-auto">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full h-full flex justify-center items-center">
                  <h1 className="text-5xl font-extrabold text-secondary">
                    Welcome to the Admin Page
                  </h1>
                </div>
              }
            />
            <Route path="/dashboard" element={<h1 className="text-xl font-medium">Dashboard</h1>} />
            <Route path="/products" element={<AdminProductsPage />} />
            <Route path="/products/addProduct" element={<AddProductForm />} />
            <Route path="/orders" element={<h1 className="text-xl font-medium">Orders</h1>} />
            <Route path="/customers" element={<h1 className="text-xl font-medium">Customers</h1>} />
            <Route path="/*" element={<h1 className="text-xl font-medium text-red-500">404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
