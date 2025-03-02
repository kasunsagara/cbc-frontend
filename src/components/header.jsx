import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaInfoCircle, FaPhone, FaShoppingCart, FaSignInAlt, FaUserPlus, FaUserCircle, FaUser, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const profileRef = useRef(null);

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
    setShowProfileDropdown(false);
    toast.success("Logged out successfully!");
  }

  // Hide dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-secondary w-full h-[100px] flex items-center shadow-lg px-6 lg:px-12">
      <img src="/logo1.png" className="cursor-pointer h-full rounded-full" alt="Logo" />

      <nav className="flex items-center gap-20 ml-auto">
        <Link
          to="/"
          className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/products"
          className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
        >
          <FaShoppingBag /> Products
        </Link>
        <Link
          to="/about"
          className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
        >
          <FaInfoCircle /> About Us
        </Link>
        <Link
          to="/contact"
          className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
        >
          <FaPhone /> Contact Us
        </Link>
        <Link
          to="/cart"
          className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
        >
          <FaShoppingCart /> Cart
        </Link>

        {isLoggedIn ? (
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
            >
              <FaUserCircle /> Profile
            </button>

            {showProfileDropdown && (
              <div
                className="absolute right-0 mt-2 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-md rounded-lg p-2 w-48 z-50"
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                <button
                  onClick={() => setShowDetailsModal(true)}
                  className="flex items-center gap-2 text-white font-bold hover:bg-secondary p-2 rounded-md w-full text-left"
                >
                  <FaUser /> Account
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-white font-bold hover:bg-secondary p-2 rounded-md w-full text-left"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}

            {showDetailsModal && userData && (
              <div className="absolute top-full right-0 mt-2 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 p-6 rounded-lg shadow-lg w-80 z-50">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-400"
                >
                  <FaTimes size={20} />
                </button>
                <h2 className="text-xl font-bold mb-4 text-secondary">User Details</h2>
                <p className="text-gray-700">
                  <strong>Profile Picture:</strong>
                </p>
                <img
                  src={userData.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <p className="text-gray-700"><strong>Full Name:</strong> {`${userData.firstName} ${userData.lastName}`}</p>
                <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
                <p className="text-gray-700"><strong>User Type:</strong> {userData.type}</p>
                <p className="text-gray-700"><strong>Account Status:</strong> {userData.isBlocked ? "Blocked" : "Active"}</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
            >
              <FaSignInAlt /> Login
            </Link>
            <Link
              to="/signup"
              className="text-white font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-white transition-all duration-200"
            >
              <FaUserPlus /> Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
