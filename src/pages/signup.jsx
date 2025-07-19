// src/pages/Signup.jsx
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Signup successful! You can now login.");
        localStorage.setItem("token", data.token); // Optional
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setMessage("❌ Error connecting to server.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate-slide-up">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Create Your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-hoverbrown text-light px-6 py-3 rounded-md w-full shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* 🔔 Success/Error Message */}
        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
