import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
// import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* Make About Me the default route */}
          <Route path="/" element={<About />} index={true} />
          {/* Add a default route or a "not found" route */}
          {/* <Route path="Error." element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}