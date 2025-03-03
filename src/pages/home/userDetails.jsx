import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
        <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 rounded-full h-32 w-32 bg-gradient-to-tr from-accent to-secondary opacity-30 blur-lg"></div>
      
          {/* Spinner */}
          <div className="animate-spin rounded-full h-32 w-32 border-[6px] border-gray-300 border-t-accent border-t-8 shadow-lg"></div>
        </div>
      </div>      
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
          <p className="text-gray-600 mt-2">Please log in to view your details.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r p-6 relative"
      style={{
        backgroundImage: 'url("/background3.png")', // Ensure this file is in 'public'
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative p-8 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 w-full max-w-lg rounded-lg">
        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">User Details</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-gray-700"><strong>Profile Picture:</strong></p>
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="text-xl text-gray-700"><strong>Full Name:</strong> {`${userData.firstName} ${userData.lastName}`}</p>
            <p className="text-xl text-gray-700"><strong>Email:</strong> {userData.email}</p>
            <p className="text-xl text-gray-700"><strong>User Type:</strong> {userData.type}</p>
            <p className="text-xl text-gray-700"><strong>Account Status:</strong> {userData.isBlocked ? "Blocked" : "Active"}</p>
        </div>
      </div>
    </div>
  );
}