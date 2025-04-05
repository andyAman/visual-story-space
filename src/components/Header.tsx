
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-gray-900">Portfolio</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo('home')} className="text-gray-700 hover:text-black font-medium">Home</button>
          <button onClick={() => scrollTo('work')} className="text-gray-700 hover:text-black font-medium">Work</button>
          <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-black font-medium">About</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-black font-medium">Contact</button>
        </nav>
        
        <Button
          onClick={() => scrollTo('contact')}
          className="hidden md:flex bg-gray-900 hover:bg-gray-800 text-white"
        >
          Get in Touch
        </Button>
        
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button onClick={() => scrollTo('home')} className="text-gray-700 hover:text-black font-medium py-2">Home</button>
          <button onClick={() => scrollTo('work')} className="text-gray-700 hover:text-black font-medium py-2">Work</button>
          <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-black font-medium py-2">About</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-black font-medium py-2">Contact</button>
          <Button
            onClick={() => scrollTo('contact')}
            className="bg-gray-900 hover:bg-gray-800 text-white w-full"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
