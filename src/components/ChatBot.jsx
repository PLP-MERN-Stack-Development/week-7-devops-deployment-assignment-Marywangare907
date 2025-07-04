// src/pages/ChatBot.jsx
import React, { useState } from "react";
import fundis from "../data/fundis.json";
 // adjust the path if needed

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Extract keyword from input
    const keyword = input.toLowerCase();
    const matches = fundis.filter((fundi) =>
      Object.values(fundi).some((val) =>
        String(val).toLowerCase().includes(keyword)
      )
    );

    let response;
    if (matches.length > 0) {
      response = matches
        .map(
          (f) =>
            `${f.name} (${f.gender}) - ${f.service} in ${f.location}, Rating: ${f.rating}, Price: KES ${f.price}, Available: ${f.availability ? "Yes" : "No"}`
        )
        .join("\n");
    } else {
      const available = fundis.find((f) => f.availability);
      response = available
        ? `No exact match. Closest available: ${available.name} (${available.service}) in ${available.location}.`
        : "Sorry, no fundis available right now.";
    }

    // Add bot response
    setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 h-96 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-primary text-white self-end ml-auto"
                  : "bg-gray-200 text-dark self-start mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex border-t p-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            placeholder="Ask me anything..."
          />
          <button
            onClick={handleSend}
            className="bg-primary text-white px-6 py-3 rounded-r-lg hover:bg-hoverbrown"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
