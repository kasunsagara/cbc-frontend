import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MessageSlideshow({ messages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [messages]);

  return (
    <div className="relative w-full max-w-4xl mt-8 mb-8 p-6 text-center">
      <h3 className="text-2xl font-semibold text-secondary mb-4">Submitted Messages</h3>
      <div className="relative w-full max-w-4xl mt-8 mb-8 p-6 shadow-lg rounded-lg text-center bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
        {messages.length === 0 ? (
          <p className="text-gray-600">No messages yet.</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 border rounded-lg shadow-md"
            >
              <p className="text-lg font-medium text-secondary">{messages[index].name}</p>
              <p className="text-gray-800 mt-2">{messages[index].message}</p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
