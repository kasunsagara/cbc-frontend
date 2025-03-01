import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import ProductIngredients from "../../components/productIngredients";
import ProductFeatures from "../../components/productFeatures";
import ProductPrecautions from "../../components/productPrecautions";
import ProductBenefits from "../../components/productBenefits";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-full flex flex-col items-center overflow-y-scroll relative"
            style={{
                backgroundImage: "url('/background1.png')", // Change this to your desired background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative w-full flex items-center justify-between px-16 py-12">
                <div className="w-1/2 pl-24 space-y-6">
                    <h1 className="text-6xl font-extrabold text-secondary leading-tight drop-shadow-lg">
                        Welcome to <br />
                        KSW Beauty Care
                    </h1>
                    <p className="text-xl text-gray-200 font-medium italic">
                        Where Radiance Meets Care and Beauty Blossoms Every Day
                    </p>
                    <button 
                        onClick={() => navigate("/products")}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold p-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        Shop Now
                    </button>
                </div>

                <div className="w-1/2 flex justify-center">
                    <img src="/head1.png" alt="KSW Beauty Care 1" className="relative"/>
                </div>
            </div>

            {/* Product Sections */}
            <ProductIngredients />
            <ProductFeatures />
            <ProductPrecautions />
            <ProductBenefits />

            {/* Footer */}
            <footer className="relative bg-secondary w-full py-8 mt-14 shadow-lg">
                <div className="w-3/4 mx-auto flex flex-wrap justify-between items-center">
                    <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
                        <h4 className="text-2xl font-bold text-white text-center mb-4">Get in Touch</h4>
                        <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-gray-500 transition duration-300">
                            <FaWhatsapp className="text-2xl text-gray-600" />
                            <span>WhatsApp</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-gray-500 transition duration-300">
                            <FaFacebook className="text-2xl text-gray-600" />
                            <span>Facebook</span>
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
                        <h4 className="text-2xl font-bold text-white text-center mb-4">Explore More</h4>
                        <Link to="/about" className="text-gray-800 hover:text-gray-500 transition duration-300">About Us</Link>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-500 transition duration-300">Contact Us</Link>
                    </div>

                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <h4 className="text-2xl font-bold text-white text-center mb-4">Find Our Location</h4>
                        <div className="flex justify-center">
                            <iframe 
                                src="https://www.google.com/maps/embed?..." 
                                width="350" 
                                height="350" 
                                allowFullScreen="" 
                                loading="lazy"
                                className="border-0 rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-600">
                    <p>© 2025 KSW Beauty Care. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
