import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex items-center justify-between px-16">
        {/* Left Side: Welcome Text */}
        <div className="w-1/2 pl-24 mt-23 space-y-6">
  <h1 className="text-6xl font-extrabold text-secondary leading-tight drop-shadow-lg">
    Welcome to <br />
    KSW Beauty Care
  </h1>
  <p className="text-xl text-gray-600 font-medium italic">
    Where Radiance Meets Care and Beauty Blossoms Every Day
  </p>
   <button 
            onClick={() => navigate("/products")}
            className="mt-4 px-4 py-2 bg-secondary text-white hover:bg-accent font-bold text-lg rounded-lg shadow-md transition duration-300"
        >
            Shop Now
        </button>
</div>


        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center">
            <img 
                src="/head1.png" 
                alt="KSW Beauty Care 1" 
            />
        </div>
    </div>
    );
}