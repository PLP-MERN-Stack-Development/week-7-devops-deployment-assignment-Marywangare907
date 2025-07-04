// pages/Home.jsx
import React from "react";

function Home() {
  return (
    <div>
      {/* 🌟 Hero Section */}
      <header className="relative text-center py-20 px-6 bg-light animate-fade-in overflow-hidden">
        {/* 💫 Top-left Glow */}
        <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

        {/* 💫 Bottom-right Glow */}
        <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 bg-hoverbrown opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

        {/* 🌟 Hero Content */}
        <h1 className="text-5xl font-extrabold text-primary drop-shadow-sm tracking-wide animate-pop">
          FundiConnect
        </h1>
        <p className="text-lg mt-4 max-w-xl mx-auto text-gray-700 animate-fade-in">
          Book trusted local fundis — plumbers, electricians, and more — right from your phone.
        </p>
        <a
          href="/book"
          className="mt-6 inline-block bg-primary hover:bg-hoverbrown transition text-light px-8 py-3 rounded-full shadow-lg text-lg animate-slide-up"
        >
          Book a Fundi
        </a>
      </header>

      {/* 🔧 Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto mt-12">
        {["Verified Fundis", "Fast Booking", "Affordable"].map((title, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-4 border-primary animate-fade-in"
          >
            <h2 className="text-xl font-bold text-primary">{title}</h2>
            <p className="mt-2 text-gray-700">
              {title === "Verified Fundis"
                ? "Professionals are vetted and reviewed by the community."
                : title === "Fast Booking"
                ? "Use our AI chatbot to instantly find available fundis."
                : "No hidden costs — you pay directly and fairly."}
            </p>
          </div>
        ))}
      </section>

      {/* 💬 Testimonials */}
      <section className="mt-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-primary text-center mb-10 animate-slide-up">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Saved me so much time! Highly recommend.",
            "Quick response and the electrician was great!",
          ].map((quote, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 border border-primary animate-fade-in"
            >
              <p className="text-gray-700 italic">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
