import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <div className="bg-primary">
    <BrowserRouter>
    <Toaster position="top-right"/>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Routes path="/*">
        <Route path="/*" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin/*" element={<AdminHomePage />} />
    </Routes>
    </GoogleOAuthProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
