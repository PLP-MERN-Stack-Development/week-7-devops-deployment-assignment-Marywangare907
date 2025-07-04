// components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="mt-20 text-center bg-dark text-light py-6 text-sm">
      &copy; {new Date().getFullYear()} FundiConnect. Built with 💖 for the Vibe Hackathon.
    </footer>
  );
}

export default Footer;
