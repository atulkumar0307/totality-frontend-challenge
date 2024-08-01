import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="/">RentEase</a>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
