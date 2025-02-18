import axios from 'axios';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    profilePicture: '',
  });

  // References for each input field
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const profilePictureRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleKeyDown(event, nextInputRef) {
    if (event.key === 'Enter') {
      nextInputRef?.current?.focus();
    }
  }

  function signup() {
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users", {
      ...formData,
      profilePicture: formData.profilePicture || 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg',
    })
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.message);
          return;
        }
        toast.success('Account created successfully!');
        window.location.href = '/login';
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        console.error(err);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="w-[450px] p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <img src="/logo2.png" alt="Logo" className="rounded-full w-[80px] shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              onKeyDown={(e) => handleKeyDown(e, firstNameRef)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
              ref={firstNameRef}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              onKeyDown={(e) => handleKeyDown(e, passwordRef)}
              ref={lastNameRef}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              onKeyDown={(e) => handleKeyDown(e, profilePictureRef)}
              ref={passwordRef}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-800 mb-1">
              Profile Picture (URL)
            </label>
            <input
              id="profilePicture"
              name="profilePicture"
              type="text"
              value={formData.profilePicture}
              onChange={handleChange}
              placeholder="Enter your profile picture URL"
              onKeyDown={(e) => {
                if (e.key === 'Enter') signup();
              }}
              ref={profilePictureRef}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            onClick={signup}
            className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>
          <Link
            to="/login"
            className="ml-1 text-secondary hover:text-accent font-semibold transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
