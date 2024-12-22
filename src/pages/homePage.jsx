import { Link, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LoginPage from './loginPage'
import SignupPage from './signupPage'

export default function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 text-white">

            {/* Header Section */}
            <div className="w-full h-[10%] flex items-center justify-between px-8 py-4 bg-white bg-opacity-20 shadow-lg backdrop-blur-md">
                <div className="text-lg font-bold">
                <img src="/cbc.jpg" alt="Logo" className="rounded-full w-[50px] h-[50px] shadow-md object-cover" />
                </div>

                <div className="flex space-x-8 ml-auto">
                    <Link to="/" className="text-lg font-semibold hover:underline">
                        <span>Home</span>
                    </Link>

                    <Link to="/contacts" className="text-lg font-semibold hover:underline">
                        <span>Contact</span>
                    </Link>

                    <Link to="/products" className="text-lg font-semibold hover:underline">
                        <span>Product</span>
                    </Link>

                    <Link to="/login">
                        <button className="px-4 py-2 bg-blue-600 font-semibold rounded-md shadow hover:bg-blue-700">
                            Login
                        </button>
                    </Link>

                    <Link to="/signup">
                        <button className="px-4 py-2 bg-blue-600 font-semibold rounded-md shadow hover:bg-blue-700">
                            Signup
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full flex-1 flex items-center justify-center">
                <Routes path="/*">
                    <Route path="/" element={<h1 className="text-4xl font-bold">Welcome to the Home Page</h1>} />
                    <Route path="/contacts" element={<h1 className="text-4xl font-bold">Get in Touch with Us</h1>} />
                    <Route path="/products" element={<h1 className="text-4xl font-bold">Explore Our Products</h1>} />
                    <Route path="/loginPage" element={<LoginPage />} />
                    <Route path="/signupPage" element={<SignupPage />} />
                </Routes>
            </div>
        </div>
    )
}
