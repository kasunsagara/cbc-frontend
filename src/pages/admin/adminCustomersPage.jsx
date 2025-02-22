import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminCustomersPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>User data not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Customers</h1>
      </div>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="px-6 py-3">Profile Picture</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">User Type</th>
              <th className="px-6 py-3">Account Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <img
                  src={userData.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </td>
              <td className="px-6 py-4">{`${userData.firstName} ${userData.lastName}`}</td>
              <td className="px-6 py-4">{userData.email}</td>
              <td className="px-6 py-4">{userData.type}</td>
              <td className="px-6 py-4">{userData.isBlocked ? "Blocked" : "Active"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
