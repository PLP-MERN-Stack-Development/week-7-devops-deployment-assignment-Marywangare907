// pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">About FundiConnect</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FundiConnect is built to make life easier for both fundis and clients.
        In Kenya and beyond, many local service providers lack visibility and consistent work.
        We're solving that by connecting them to nearby customers through a simple, fast, and AI-supported platform.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you're a homeowner looking for a reliable electrician, or a skilled fundi seeking steady gigs,
        FundiConnect is here for you. Built during the Vibe Hackathon with a mission to empower communities
        and create income opportunities — we believe in tech for good.
      </p>
      <div className="mt-6">
        <a
          href="/book"
          className="inline-block bg-primary hover:bg-hoverbrown text-light px-6 py-3 rounded-full shadow-md transition"
        >
          Book a Fundi Now
        </a>
      </div>
    </section>
  );
}

export default About;
