import axios from 'axios';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { BsGoogle } from 'react-icons/bs';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  // References for input fields to handle "Enter" key navigation
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const profilePictureRef = useRef(null);

  // Function to handle form input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Function to handle "Enter" key navigation
  function handleKeyDown(event, nextInputRef) {
    if (event.key === 'Enter') {
      nextInputRef?.current?.focus();
    }
  }

  // Function to handle standard email/password signup
  function signup() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users", {
        ...formData,
        profilePicture:
          formData.profilePicture ||
          'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg',
      })
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.message);
          return;
        }
        toast.success('Account created successfully!');
        window.location.href = '/login'; // Redirect to login page after signup
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        console.error(err);
      });
  }

  const googleSignup = useGoogleLogin({
    onSuccess: (res) => {
        axios
            .post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
                token: res.access_token
            })
            .then((response) => {
                if (response.data.message === "User created") {
                    toast.success("Your account has been created! Please log in with Google.");
                    window.location.href = response.data.redirect; // Redirect to login
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error("Google signup error:", error);
                toast.error("Google signup failed. Please try again.");
            });
    }
});

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/background3.png')] bg-cover bg-center relative">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative w-[450px] p-8 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <img src="/logo2.png" alt="Logo" className="rounded-full w-[80px] shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h1>
        <form className="space-y-4">
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
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              ref={lastNameRef}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              required
            />
          </div>
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
              onKeyDown={(e) => handleKeyDown(e, passwordRef)}
              ref={emailRef}
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
            className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 p-3  mt-4 shadow-md transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>

          <div className="mt-6 text-center">
          <span className="text-sm text-gray-700">Already have an account?</span>
          <Link to="/login" className="ml-1 text-secondary hover:text-accent font-semibold transition-all duration-200">
            Login
          </Link>
          </div>

          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600 font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button 
            onClick={() => googleSignup()} 
            type="button" 
            className="w-full flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white bg-secondary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 p-3  mt-4 shadow-md transition-transform transform hover:scale-105"
          >
            <BsGoogle className="text-lg" />
            Sign up with Google
          </button>
        </form>

      </div>
    </div>
  );
}
