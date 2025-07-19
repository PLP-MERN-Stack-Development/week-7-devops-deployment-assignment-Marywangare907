// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-primary">
        FundiConnect
      </Link>

      <div className="space-x-6 text-sm md:text-base">
        <Link to="/" className="hover:text-primary font-medium">
          Home
        </Link>
        <Link to="/book" className="hover:text-primary font-medium">
          Book
        </Link>
        <Link to="/chat" className="hover:text-primary font-medium">
          Chat
        </Link>
        <Link to="/about" className="hover:text-primary font-medium">
          About
        </Link>
        <Link to="/login" className="hover:text-primary font-medium">
          Login
        </Link>
        <Link to="/signup" className="hover:text-primary font-medium">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
