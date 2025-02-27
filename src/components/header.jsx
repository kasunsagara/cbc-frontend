import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaInfoCircle, FaPhone, FaShoppingCart, FaSignInAlt, FaUserPlus, FaUserCircle, FaUser, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return; // Don't fetch if no token is found
        }

        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false);
      }
    };

    fetchUserData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData(null);
  }

  return (
    <header className="bg-primary w-full h-[100px] flex items-center shadow-lg px-6 lg:px-12">
      <img src="/logo1.png" className="cursor-pointer h-full rounded-full" alt="Logo" />

      <nav className="flex items-center gap-20 ml-auto">
        <Link
          to="/"
          className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/products"
          className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
        >
          <FaShoppingBag /> Products
        </Link>
        <Link
          to="/about"
          className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
        >
          <FaInfoCircle /> About Us
        </Link>
        <Link
          to="/contact"
          className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
        >
          <FaPhone /> Contact Us
        </Link>
        <Link
          to="/cart"
          className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
        >
          <FaShoppingCart /> Cart
        </Link>

        {isLoggedIn ? (
          <div className="relative group">
            <button className="text-secondary font-bold text-xl flex items-center gap-2">
              <FaUserCircle /> Profile
            </button>
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
              <button
                onClick={() => setShowDetailsModal(!showDetailsModal)}
                className="flex items-center gap-2 text-secondary font-bold hover:bg-gray-100 p-2 rounded-md"
              >
                <FaUser /> Account
              </button>
              {showDetailsModal && userData && (
                <div className="absolute top-full right-0 mt-2 bg-white p-6 rounded-lg shadow-lg w-80 z-50 border border-gray-300">
                  <button 
                  onClick={() => setShowDetailsModal(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" 
                  >
                    <FaTimes size={20} />
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-secondary">User Details</h2>
                  <p className="text-gray-700"><strong>Name:</strong> {userData.name}</p>
                  <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
                  <p className="text-gray-700"><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
                </div>
              )}
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
            <Link
              to="/login"
              className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
            >
              <FaSignInAlt /> Login
            </Link>
            <Link
              to="/signup"
              className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200"
            >
              <FaUserPlus /> Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}