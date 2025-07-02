import React from "react";

export default function FundiConnectPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Hero Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">FundiConnect</h1>
        <p className="text-lg mt-4 text-gray-700 max-w-xl mx-auto">
          Find trusted plumbers, electricians, cleaners, and more — book reliable fundis near you in minutes.
        </p>
        <a
          href="#chatbot"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700"
        >
          Find a Fundi Now
        </a>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-blue-600">Verified Fundis</h2>
          <p className="text-gray-600 mt-2">We connect you with reliable professionals in your area.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-blue-600">Simple Chat Interface</h2>
          <p className="text-gray-600 mt-2">Use our chatbot to quickly find and book services.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-blue-600">Affordable & Fast</h2>
          <p className="text-gray-600 mt-2">Get help fast at fair prices — no middlemen.</p>
        </div>
      </section>

      {/* Chatbot Embed */}
      <section id="chatbot" className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Chat With Our AI Assistant</h2>
        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/YOUR_BOT_ID_HERE"
            title="FundiConnect AI Bot"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="clipboard-write"
          ></iframe>
        </div>
      </section>

      <footer className="mt-16 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} FundiConnect. Built with ❤️ for the Vibe Hackathon.
      </footer>
    </div>
  );
}
