import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

export default function AdminMessagePage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/contacts/all");
      setMessages(response.data);
    } catch (error) {
      toast.error("Failed to load messages.");
    }
  };

  const deleteMessage = async (name) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/${name}`);
      toast.success("Message deleted successfully");
      setMessages(messages.filter((msg) => msg.name !== name));
    } catch (error) {
      toast.error("Failed to delete message.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Messages</h1>
      </div>
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4">{msg.name}</td>
                  <td className="px-6 py-4">{msg.email}</td>
                  <td className="px-6 py-4">{msg.message}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteMessage(msg.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
