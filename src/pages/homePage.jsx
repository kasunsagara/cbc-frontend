import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
                <p className="text-lg mb-6">
                    Explore a world of possibilities with our services. We are here to make your life easier and more enjoyable.
                </p>
                <button
                    onClick={() => alert('Button Clicked!')}
                    className="px-6 py-3 mb-4 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                >
                    Get Started
                </button>
                <div>
                    <Link
                        to="/login"
                        className="inline-block px-6 py-3 font-semibold text-purple-600 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
