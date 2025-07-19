// src/pages/Login.jsx
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("❌ " + data.message || "Login failed");
        return;
      }

      alert("✅ Login successful");
      // Optional: Save token or redirect user
      // localStorage.setItem("token", data.token);
      // window.location.href = "/"; // Redirect to home
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate-slide-up">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Login to FundiConnect</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-hoverbrown text-light px-6 py-3 rounded-md w-full shadow-md"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;
