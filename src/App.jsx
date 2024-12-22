import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
    <BrowserRouter>
    <Toaster />
    <Routes path="/*">
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin/*" element={<AdminHomePage />} />

        <Route path="/*" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
