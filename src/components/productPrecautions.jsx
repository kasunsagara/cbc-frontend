import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const precautions = [
    { title: "Patch Test First", description: "Always perform a patch test before full application to avoid allergic reactions" },
    { title: "Avoid Eye Contact", description: "Keep products away from the eyes to prevent irritation or discomfort" },
    { title: "Store Properly", description: "Keep in a cool, dry place to maintain product effectiveness and longevity" },
    { title: "Sun Sensitivity", description: "Some ingredients may increase sun sensitivity; use sunscreen daily" },
    { title: "Discontinue if irritated", description: "Stop using immediately if redness, itching, or irritation develops" },
    { title: "Check Ingredients", description: "Ensure ingredients align with your skin type and avoid known allergens" }
  ];

export default function ProductPrecautions() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % precautions.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + precautions.length) % precautions.length);
  };

  // Auto-slide effect with reset on manual interaction
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center py-16 relative top-[51px]">
        <div className="absolute inset-0 bg-black/40"></div>
      {/* Title fixed at the top with even more space */}
      <h2 className="absolute top-33 text-4xl font-bold text-secondary mb-8 drop-shadow-md z-20">
      Things to Be Careful About
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
              const currentIndex = (index + offset + precautions.length) % precautions.length;
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
                  <h3 className="text-2xl font-semibold text-accent">{precautions[currentIndex].title}</h3>
                  <p className="text-gray-600 mt-2">{precautions[currentIndex].description}</p>
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

