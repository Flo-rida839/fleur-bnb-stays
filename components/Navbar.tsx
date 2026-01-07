"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Units', href: '/units' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Locations', href: '#locations' },
    { label: 'Book Now', href: '/booking' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect py-2 shadow-xl border-b border-teal-100/50' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-gold rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <div>
                <h1 className="text-3xl font-cursive font-bold text-teal-900 group-hover:text-gold transition-colors">
                  Fleur Stays
                </h1>
                <p className={`text-xs uppercase tracking-widest font-bold transition-colors ${scrolled ? 'text-teal-600' : 'text-teal-200'}`}>
                  Luxury Estates
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-teal-800 hover:text-gold font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <a
                href="tel:+254798158768"
                className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+254 798 158 768</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-teal-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-effect mt-3 rounded-b-2xl shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-teal-800 hover:text-gold text-lg font-medium py-2 border-b border-teal-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:+254798158768"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;