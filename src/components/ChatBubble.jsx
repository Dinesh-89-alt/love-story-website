// src/components/ChatBubble.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ChatBubble({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center my-6"
    >
      <div
        className="max-w-2xl px-6 py-4 text-lg font-medium 
                   text-white bg-gradient-to-r from-pink-500 via-red-400 to-purple-500
                   rounded-2xl shadow-xl text-center"
      >
        {text}
      </div>
    </motion.div>
  );
}


