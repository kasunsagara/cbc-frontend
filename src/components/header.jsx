import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-primary w-full h-[100px] relative flex justify-center items-center shadow-lg">

            {/* Logo Section */}
            <img src="/logo1.png" className="cursor-pointer h-full rounded-full absolute left-[10px] sm:left-[30px] lg:left-[50px]" alt="Logo"/>

            {/* Navigation Links */}
            <div className="h-full flex items-center w-full max-w-[900px] justify-between px-24">

                <Link to="/" className="text-secondary font-bold text-xl hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    Home
                </Link>

                <Link to="/products" className="text-secondary font-bold text-xl hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    Products
                </Link>

                <Link to="/about" className="text-secondary font-bold text-xl hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    About Us
                </Link>

                <Link to="/contact" className="text-secondary font-bold text-xl hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    Contact Us
                </Link>
                <Link to="/cart" className="text-secondary font-bold text-xl hover:border-b-4 hover:border-b-accent transition-all duration-200">
                    Cart
                </Link>

            </div>

        </header>
    );
}
