// src/components/ChoiceButtons.jsx
import React from "react";

export default function ChoiceButtons({ options, onSelect }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(option.nextId)}
          className="px-5 py-2 rounded-full font-semibold
                     bg-gradient-to-r from-pink-400 to-red-400 text-white 
                     shadow-md hover:scale-110 hover:from-red-400 hover:to-pink-400
                     transition-all duration-300"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
