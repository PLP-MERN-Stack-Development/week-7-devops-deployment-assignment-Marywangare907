// src/pages/Book.jsx
import React, { useState } from "react";

function Book() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, service, location }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("❌ Failed to submit: " + errorData.message);
        return;
      }

      const data = await res.json();
      console.log("✅ Booking submitted:", data);
      alert("Booking submitted successfully!");

      // Clear fields after success
      setName("");
      setService("");
      setLocation("");
    } catch (err) {
      console.error("❌ Network Error:", err.message);
      alert("Network error: " + err.message);
    }
  };

  return (
    <section className="mt-16 px-6 py-10 bg-[#fefefe] max-w-3xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">
        Quick Booking Form
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Service Needed (e.g., plumber, cleaner)"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-hoverbrown text-light px-6 py-3 rounded-md w-full shadow-lg"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
}

export default Book;
