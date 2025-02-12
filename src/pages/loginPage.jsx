import axios from 'axios';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

export default function LoginPage() {

  const googleLogin = useGoogleLogin({
    onSuccess: (res)=>{
      console.log(res)
      axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/google",{
        token : res.access_token
      }).then(
        (res)=>{
          if(res.data.message == "User created"){
            toast.success("Your account is created now you can login via google.")
          }else{
            localStorage.setItem("token",res.data.token)
            if(res.data.user.type == "admin"){
              window.location.href = "/admin"
            }else{
              window.location.href = "/"
            }
          }
        }
      )
    }
  })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordInputRef = useRef(null);

  function handleKeyDown(event, nextInputRef) {
    if (event.key === 'Enter') {
      nextInputRef?.current?.focus();
    }
  }

  function login() {
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }

        localStorage.setItem('token', res.data.token);
        if (res.data.user.type == 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/';
        }
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="w-[450px] p-8 bg-white shadow-lg rounded-lg border border-accent">
        <div className="flex justify-center mb-6">
          <img src="/logo2.png" alt="Logo" className="rounded-full w-[80px] shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Welcome Back</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              onKeyDown={(e) => handleKeyDown(e, passwordInputRef)}
              className="w-full p-3 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') login();
              }}
              ref={passwordInputRef}
              className="w-full p-3 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <button
            onClick={login}
            type="button"
            className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Login
          </button>
          <button 
          onClick={()=>{googleLogin()}} 
          type="button" 
          className="w-full px-4 py-2 font-semibold text-white bg-secondary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Login with google
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Don’t have an account?</span>
          <Link
            to="/signup"
            className="ml-1 text-secondary hover:text-accent font-semibold transition-all duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
