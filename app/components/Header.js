'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#howitworks' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleMenuClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl">Scalaryn</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-16 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <button className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}