import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
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
        <div className="mt-6 text-gray-700 space-y-3">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-secondary"/>
            <span>0771670585</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-secondary"/>
            <span>kasunsagara689@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-secondary"/>
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
      </div>
    </div>
  );
};
