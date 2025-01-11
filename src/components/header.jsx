import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary w-full h-[100px] shadow-lg relative flex justify-center items-center">
      {/* Logo */}
      <img
        src="/logo1.png"
        alt="Logo"
        className="cursor-pointer h-[80px] w-[80px] rounded-full absolute left-[20px] border-4 border-secondary shadow-md"
      />

      {/* Navigation Links */}
      <nav className="h-full flex items-center w-[600px] justify-between">
        <Link
          to="/"
          className="text-secondary font-semibold text-lg hover:text-white transition duration-300 hover:bg-secondary py-2 px-4 rounded-lg"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="text-secondary font-semibold text-lg hover:text-white transition duration-300 hover:bg-secondary py-2 px-4 rounded-lg"
        >
          Products
        </Link>

        <Link
          to="/about"
          className="text-secondary font-semibold text-lg hover:text-white transition duration-300 hover:bg-secondary py-2 px-4 rounded-lg"
        >
          About Us
        </Link>

        <Link
          to="/contact"
          className="text-secondary font-semibold text-lg hover:text-white transition duration-300 hover:bg-secondary py-2 px-4 rounded-lg"
        >
          Contact Us
        </Link>
      </nav>

      {/* Decorative Accent Line */}
      <div className="absolute bottom-0 w-full h-[4px] bg-accent shadow-md"></div>
    </header>
  );
}
