// components/Footer.tsx
"use client";

import { Instagram, MessageCircle, MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <div>
                <h2 className="text-2xl font-cursive font-bold">Fleur Stays BNB</h2>
                <p className="text-teal-300 text-sm">Luxury Vacation Rentals</p>
              </div>
            </Link>
            <p className="text-teal-200 mb-6">
              Experience unparalleled luxury and comfort in our carefully curated vacation rentals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/fleurstaysbnb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@fleurstaysbnb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 11.58-3.35v-7a8.16 8.16 0 0 0 4.21 1.19v-3.4a4.85 4.85 0 0 1-1-.15z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/254798158768"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-teal-200 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/units" className="text-teal-200 hover:text-gold transition-colors">
                  Our Units
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-teal-200 hover:text-gold transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-teal-200 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-teal-200 hover:text-gold transition-colors">
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+254798158768" className="text-teal-200 hover:text-gold transition-colors">
                    +254 798 158 768
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:bookings@fleurstaysbnb.com" className="text-teal-200 hover:text-gold transition-colors">
                    bookings@fleurstaysbnb.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-teal-200">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Stay Updated</h3>
            <p className="text-teal-200 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 focus:border-gold focus:outline-none text-white"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-gold-dark text-teal-900 font-bold py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-12 pt-8 text-center">
          <p className="text-teal-300">
            © {new Date().getFullYear()} Fleur Stays BNB. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-teal-400">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;