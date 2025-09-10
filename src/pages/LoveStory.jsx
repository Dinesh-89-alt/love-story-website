import React, { useState, useEffect } from "react";
import ChatBubble from "../components/ChatBubble";
import { storyFlow } from "../data/storyFlow";

export default function LoveStory() {
  const [currentId, setCurrentId] = useState(1);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const step = storyFlow.find((m) => m.id === currentId);
    if (step) {
      setMessages((prev) => [...prev, step]);
    }
  }, [currentId]);

  const handleNext = (nextId) => {
    setCurrentId(nextId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-pink-200">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="animate-fadeIn">
              <ChatBubble text={msg.text} />

              {/* If it's a choice, show her buttons */}
              {msg.type === "choice" && (
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {msg.options.map((opt, index) => (
                    <button
                      key={index}
                      onClick={() => handleNext(opt.nextId)}
                      className="flex-1 px-6 py-3 rounded-xl border border-pink-300 
                                 text-white font-semibold 
                                 bg-gradient-to-r from-pink-500 via-rose-400 to-red-500 
                                 shadow-lg 
                                 hover:scale-105 hover:shadow-xl hover:border-rose-500 
                                 transform transition duration-300 ease-in-out"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}

              {/* If it's a plain text with nextId */}
              {msg.type === "text" && msg.nextId && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => handleNext(msg.nextId)}
                    className="px-6 py-2 rounded-lg text-sm font-medium 
                               text-pink-700 border border-pink-300 
                               bg-pink-100 hover:bg-pink-200 hover:scale-105 
                               hover:shadow-md transition"
                  >
                    Continue 💌
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
