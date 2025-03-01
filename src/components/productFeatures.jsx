import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const features = [
    { title: "Premium Ingredients", description: "We use only the finest natural and organic ingredients for your skin's health" },
    { title: "Dermatologist Approved", description: "All our products are tested and recommended by skincare experts" },
    { title: "Eco-Friendly Packaging", description: "We care about the planet as much as we care about your skin" },
    { title: "Cruelty-Free", description: "Our products are never tested on animals, ensuring a kind approach to beauty" },
    { title: "Clinically Proven Results", description: "Our products deliver real, visible improvements backed by clinical studies" },
    { title: "Customizable Solutions", description: "We offer tailored products to meet your unique skin care needs" }
  ];

export default function ProductFeatures() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-slide effect with reset on manual interaction
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center py-16 relative top-[48px]">
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Title fixed at the top with even more space */}
      <h2 className="absolute top-33 text-4xl font-bold text-secondary mb-8 drop-shadow-md z-20">
      Why Choose Our Products?
      </h2>

      {/* Cards and Buttons Container */}
      <div className="relative w-full max-w-3xl flex items-center justify-center mt-48">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 text-secondary bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-transform transform hover:scale-110 z-10"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Ingredient Cards Container */}
        <div className="relative w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {[-1, 0, 1].map((offset) => {
              const currentIndex = (index + offset + features.length) % features.length;
              return (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, x: offset * 120 }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.6, // reduce opacity for the side cards
                    scale: offset === 0 ? 1.1 : 0.85, // reduce scale for the side cards
                    x: offset * 150
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: offset * -100 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute w-72 p-6 bg-white rounded-xl shadow-xl text-center transition-all border-2 ${
                    offset === 0
                      ? "z-20 shadow-2xl"
                      : "z-10 opacity-60"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-accent">{features[currentIndex].title}</h3>
                  <p className="text-gray-600 mt-2">{features[currentIndex].description}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 text-secondary bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-transform transform hover:scale-110 z-10"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

