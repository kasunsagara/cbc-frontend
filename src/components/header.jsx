import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaPhone, FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="bg-primary w-full h-[100px] flex items-center shadow-lg px-6 lg:px-12">
            
            {/* Logo Section */}
            <img 
                src="/logo1.png" 
                className="cursor-pointer h-full rounded-full" 
                alt="Logo"
            />
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-20 ml-auto">
                <Link to="/" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                <FaHome /> Home
                </Link>

                <Link to="/products" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                <FaShoppingBag /> Products
                </Link>

                <Link to="/about" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                <FaInfoCircle /> About Us
                </Link>

                <Link to="/contact" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                <FaPhone /> Contact Us
                </Link>

                <Link to="/cart" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    <FaShoppingCart /> Cart
                </Link>

                <Link to="/login" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    <FaSignInAlt /> Login
                </Link>
                
                <Link to="/signup" className="text-secondary font-bold text-xl flex items-center gap-2 hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    <FaUserPlus /> Signup
                </Link>
            </nav>
        </header>
    );
}