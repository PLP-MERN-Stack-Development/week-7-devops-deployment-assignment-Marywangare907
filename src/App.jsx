// App.jsx
import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Chat from "./pages/chat";
import About from "./pages/About";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const location = useLocation();

  return (
    <div className="bg-gradient-to-br from-[#fffaf5] via-[#fbe6d5] to-[#e7bfa0] text-dark font-sans min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold text-primary">FundiConnect</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-dark hover:text-primary font-medium">Home</Link>
          <Link to="/book" className="text-dark hover:text-primary font-medium">Book</Link>
          <Link to="/chat" className="text-dark hover:text-primary font-medium">Chat</Link>
          <Link to="/about" className="text-dark hover:text-primary font-medium">About</Link>
        </nav>
        <div className="space-x-2">
          <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hoverbrown">Login</Link>
          <Link to="/signup" className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-hoverbrown hover:text-white">Sign Up</Link>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        <div className="animate-fade-in px-4 md:px-8">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
