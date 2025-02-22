import axios from "axios";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/contacts/all");
      setMessages(response.data); // Assuming response.data is an array of messages
    } catch (error) {
      toast.error("Failed to load messages.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/contacts/submit", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(response.data.message);
      setMessages([...messages, formData]); // Add new message to the table
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      {/* Contact Info */}
      <div className="mt-6 text-gray-700 space-y-5 text-lg p-2">
        <h3 className="text-2xl font-semibold text-accent mb-4 flex flex-col items-center">Reach Out to Us</h3>
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-secondary" />
          <span>0771670585</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-secondary" />
          <span>kasunsagara689@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-secondary" />
          <span>74 A, Ridivita, Hiramadagama, Kahawaththa</span>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-secondary hover:text-accent">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-secondary hover:text-accent">
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <h3 className="text-2xl font-semibold text-accent mb-4 p-4">We’d Love to Hear from You</h3>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-lg text-lg font-semibold hover:bg-accent transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Display Messages Table */}
      <div className="w-full max-w-4xl mt-8">
        <h3 className="text-2xl font-semibold text-accent mb-4 p-4 flex flex-col items-center">Submitted Messages</h3>
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          <div>
            <table className="w-3/7 mx-auto border border-gray-400 border-collapse">
              <thead>
                <tr className="bg-gray-200 border border-gray-400">
                  <th className="border border-gray-400 p-2">Name</th>
                  <th className="border border-gray-400 p-2">Email</th>
                  <th className="border border-gray-400 p-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index} className="hover:bg-accent hover:text-white cursor-pointer border border-gray-400">
                    <td className="p-2 border border-gray-400">{msg.name}</td>
                    <td className="p-2 border border-gray-400">{msg.email}</td>
                    <td className="p-2 border border-gray-400">{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
