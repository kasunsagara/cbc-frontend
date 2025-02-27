import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaInfoCircle, FaPhone, FaShoppingCart, FaSignInAlt, FaUserPlus, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload(); // Refresh the page to reflect logout
  }

  return (
    <header className="bg-primary w-full h-[100px] flex items-center shadow-lg px-6 lg:px-12">
      {/* Logo Section */}
      <img src="/logo1.png" className="cursor-pointer h-full rounded-full" alt="Logo" />

      {/* Navigation Links */}
      <nav className="flex items-center gap-20 ml-auto">
        <Link to="/" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
          <FaHome /> Home
        </Link>

        <Link to="/products" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
          <FaShoppingBag /> Products
        </Link>

        <Link to="/about" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
          <FaInfoCircle /> About Us
        </Link>

        <Link to="/contact" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
          <FaPhone /> Contact Us
        </Link>

        <Link to="/cart" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
          <FaShoppingCart /> Cart
        </Link>

        {isLoggedIn ? (
          <div className="relative group">
            <button className="text-secondary font-bold text-xl flex items-center gap-2">
              <FaUserCircle /> Profile
            </button>
            {/* Logout Dropdown */}
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
            <button
                className="flex items-center gap-2 text-secondary font-bold hover:bg-gray-100 p-2 rounded-md"
              >
                <FaUser /> Account
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-secondary font-bold hover:bg-gray-100 p-2 rounded-md"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
              <FaSignInAlt /> Login
            </Link>

            <Link to="/signup" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
              <FaUserPlus /> Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
