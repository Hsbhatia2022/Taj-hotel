import React from 'react';
import "./styles/home.css"

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Taj Hotel Website</div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Hotel</h1>
        <p>Experience the best hospitality in town</p>
        <button>Book A Stay </button>
      </section>

      {/* Content Section */}
      <section className="content">
        {/* Add content here */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <h3>Get in Touch</h3>
          <p>Phone: +91 XYZ</p>
          <p>Email: [info@hotel.com](mailto:info@hotel.com)</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Taj Hotel Management Website</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
