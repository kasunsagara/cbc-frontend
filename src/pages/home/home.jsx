import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
            <div className="w-full flex items-center justify-between px-16 py-12">
                <div className="w-1/2 pl-24 space-y-6">
                    <h1 className="text-6xl font-extrabold text-secondary leading-tight drop-shadow-lg">
                        Welcome to <br />
                        KSW Beauty Care
                    </h1>
                    <p className="text-xl text-gray-600 font-medium italic">
                        Where Radiance Meets Care and Beauty Blossoms Every Day
                    </p>
                    <button 
                        onClick={() => navigate("/products")}
                        className="mt-4 px-6 py-3 bg-secondary text-white hover:bg-accent font-bold text-lg rounded-lg shadow-md transition duration-300"
                    >
                        Shop Now
                    </button>
                </div>

                <div className="w-1/2 flex justify-center">
                    <img 
                        src="/head1.png" 
                        alt="KSW Beauty Care 1" 
                    />
                </div>
            </div>

            <div className="w-full flex flex-col items-center py-16 bg-primary">
                <h2 className="text-4xl font-bold text-secondary mb-6">What’s Inside Our Products?</h2>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                   <h3 className="text-2xl font-semibold text-accent">Hyaluronic Acid</h3>
                   <p className="text-gray-600 mt-2">Deeply hydrates and plumps the skin for a youthful glow</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                   <h3 className="text-2xl font-semibold text-accent">Vitamin C</h3>
                   <p className="text-gray-600 mt-2">Brightens the complexion and reduces dark spots</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                   <h3 className="text-2xl font-semibold text-accent">Aloe Vera</h3>
                   <p className="text-gray-600 mt-2">Soothes and calms irritated skin while providing hydration</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                   <h3 className="text-2xl font-semibold text-accent">Shea Butter</h3>
                   <p className="text-gray-600 mt-2">Deeply nourishes and protects the skin from dryness</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-accent">Green Tea Extract</h3>
                    <p className="text-gray-600 mt-2">Rich in antioxidants to fight premature aging</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-accent">Jojoba Oil</h3>
                    <p className="text-gray-600 mt-2">Balances natural oils and keeps skin soft and supple</p>
                </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center py-16 bg-primary">
                <h2 className="text-4xl font-bold text-secondary mb-6">Why Choose Our Products?</h2>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Premium Ingredients</h3>
                        <p className="text-gray-600 mt-2">We use only the finest natural and organic ingredients for your skin's health</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Dermatologist Approved</h3>
                        <p className="text-gray-600 mt-2">All our products are tested and recommended by skincare experts</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Eco-Friendly Packaging</h3>
                        <p className="text-gray-600 mt-2">We care about the planet as much as we care about your skin</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Cruelty-Free</h3>
                        <p className="text-gray-600 mt-2">Our products are never tested on animals, ensuring a kind approach to beauty</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Clinically Proven Results</h3>
                        <p className="text-gray-600 mt-2">Our products deliver real, visible improvements backed by clinical studies</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Customizable Solutions</h3>
                        <p className="text-gray-600 mt-2">We offer tailored products to meet your unique skin care needs</p>
                    </div>
                </div>
            </div>

            
            <div className="w-full flex flex-col items-center py-16 bg-primary">
            <h2 className="text-4xl font-bold text-secondary mb-6">Benefits of Using Our Products</h2>
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Deep Hydration</h3>
                <p className="text-gray-600 mt-2">Keeps your skin moisturized and plump all day.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Brightens Skin</h3>
                <p className="text-gray-600 mt-2">Enhances your natural glow and reduces dullness.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Soothes Irritation</h3>
                <p className="text-gray-600 mt-2">Calms redness and reduces sensitivity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Anti-Aging Properties</h3>
                <p className="text-gray-600 mt-2">Fights wrinkles and fine lines for youthful skin.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Protects Against Pollution</h3>
                <p className="text-gray-600 mt-2">Shields your skin from environmental damage.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-accent">Non-Greasy Formula</h3>
                <p className="text-gray-600 mt-2">Lightweight and fast-absorbing for all skin types.</p>
                </div>
            </div>
            </div>

            <div className="w-full flex flex-col items-center py-16 bg-primary">
                <h2 className="text-4xl font-bold text-secondary mb-6">Benefits of Protecting Your Skin</h2>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Prevents Premature Aging</h3>
                        <p className="text-gray-600 mt-2">Protecting your skin from sun damage helps keep it youthful and wrinkle-free for longer</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Reduces Risk of Skin Cancer</h3>
                        <p className="text-gray-600 mt-2">Proper skin protection minimizes your exposure to harmful UV rays, reducing cancer risks</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Maintains Even Skin Tone</h3>
                        <p className="text-gray-600 mt-2">Shielding your skin helps prevent dark spots, discoloration, and uneven skin tone</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Boosts Hydration</h3>
                        <p className="text-gray-600 mt-2">Protection from environmental factors helps your skin retain moisture and stay hydrated</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Supports Skin Healing</h3>
                        <p className="text-gray-600 mt-2">By preventing damage, your skin has a better ability to heal and regenerate</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold text-accent">Improves skin health</h3>
                        <p className="text-gray-600 mt-2">Regular protection promotes a balanced, healthy complexion and strengthens your skin's natural barrier</p>
                    </div>
                </div>
            </div>

            <footer className="bg-primary w-full py-8 mt-12 shadow-lg shadow-black">
                <div className="w-3/4 mx-auto flex flex-wrap justify-between items-center">

                    <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
                    <h4 className="text-2xl font-semibold text-secondary text-center mb-4">Get in Touch</h4>
                    <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-accent transition duration-300">
                        <FaWhatsapp className="text-2xl text-secondary" />
                        <span>WhatsApp</span>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-accent transition duration-300">
                        <FaFacebook className="text-2xl text-secondary" />
                        <span>Facebook</span>
                    </a>
                    </div>

                    <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
                    <h4 className="text-2xl font-semibold text-secondary text-center mb-4">Explore More</h4>
                    <Link to="/about" className="text-gray-600 hover:text-accent transition duration-300">About Us</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-accent transition duration-300">Contact Us</Link>
                    </div>

                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                    <h4 className="text-2xl font-semibold text-secondary text-center mb-4">Find Our Location</h4>
                    <div className="flex justify-center">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.239780932599!2d144.9537363153187!3d-37.81362797975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4412997c89%3A0x5045675218ce6e0!2sKSW%20Beauty%20Care!5e0!3m2!1sen!2sau!4v1611073005035!5m2!1sen!2sau" 
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
