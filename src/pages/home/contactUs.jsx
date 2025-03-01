import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [messages, setMessages] = useState([]);

  // Refs for the input fields
  const nameRef = useRef(null);
  const messageRef = useRef(null);

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
      setMessages([...messages, formData]);
      setFormData({ name: "", message: "" });
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center relative"
      style={{
        backgroundImage: 'url("/background2.png")', // Ensure this file is in the 'public' folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contact Info */}
      <div className="relative mt-6 text-gray-100 space-y-5 text-lg p-2">
        <h3 className="text-2xl font-semibold text-accent mb-4 text-center">Reach Out to Us</h3>
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
          <a href="#" className="flex items-center space-x-2 hover:text-accent transition duration-300">
            <FaWhatsapp className="text-secondary" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 hover:text-accent transition duration-300">
            <FaFacebook className="text-secondary" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <h3 className="relative text-2xl font-semibold text-accent mb-4 p-4">We’d Love to Hear from You</h3>
      <div className="relative bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, messageRef)}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              ref={messageRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              rows="2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-lg text-lg font-semibold hover:bg-accent transition duration-300 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 p-3  mt-4 shadow-md transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Display Messages Table */}
      <div className="relative w-full max-w-4xl mt-8 mb-8">
        <h3 className="text-2xl font-semibold text-accent mb-4 p-4 text-center">Submitted Messages</h3>
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet.</p>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-4">{msg.name}</td>
                    <td className="px-6 py-4">{msg.message}</td>
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
