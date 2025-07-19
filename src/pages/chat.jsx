// pages/Chat.jsx
import React from "react";
import ChatBot from "../components/ChatBot";

function Chat() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-primary text-center mb-4">
          Chat with Our AI Assistant
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Describe the service you need. Our assistant will recommend the best available fundi near you.
        </p>
        <ChatBot />
      </div>
    </section>
  );
}

export default Chat;
