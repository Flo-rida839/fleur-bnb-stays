"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Instagram, Video } from 'lucide-react';
import Link from 'next/link';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '+254798158768';
  const defaultMessage = 'Hello! I\'m interested in booking a stay at Fleur Stays BNB.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          💬
        </div>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-800 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">F</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Fleur Stays BNB</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-200 text-sm">Online • Usually replies instantly</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Message Preview */}
            <div className="p-4 bg-green-50">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-700 mb-2">
                  💬 Hi! We're here to help. Ask us anything about bookings, amenities, or check-in!
                </p>
                <p className="text-xs text-gray-500">
                  Typically replies within 1 minute
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-xl hover:shadow-md transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Call Now</span>
                </button>
                <Link
                  href="https://instagram.com/fleurstaysbnb"
                  target="_blank"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-md transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </Link>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none resize-none"
                  rows={3}
                />
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Available dates?',
                  'Check-in process?',
                  'Smart lock code?',
                  'Parking available?',
                  'Netflix included?'
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() => setMessage(text)}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-teal-300 hover:bg-teal-50 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 p-4">
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Video tour available</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="text-green-300 text-sm hover:text-green-200"
                >
                  +254 798 158 768
                </a>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-green-100"></div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;