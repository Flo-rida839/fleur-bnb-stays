"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Shield, Key } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3571459/pexels-photo-3571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3457881/pexels-photo-3457881.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  const features = [
    { icon: Shield, text: 'Secure Digital Check-in' },
    { icon: Key, text: 'Smart Lock Access' },
    { icon: Star, text: 'Premium Netflix Included' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-700/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Luxury Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-white font-semibold">⭐️ Luxury Experience Guaranteed</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            Experience{' '}
            <span className="font-cursive text-gold italic">
              Unforgettable
            </span>{' '}
            Stays
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-xl leading-relaxed font-light">
            Discover premium vacation rentals with stunning views, luxury amenities, 
            and personalized service that redefines comfort.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
              >
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-white text-sm sm:text-base font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="group bg-gradient-to-r from-gold to-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-lift"
            >
              <span>Book Your Luxury Stay</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/units"
              className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white/30 transition-all duration-300 hover-lift"
            >
              <span>Explore Our Units</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5 Rating</span>
            </div>
            <div className="text-white/80">
              <span className="font-semibold">500+</span> Happy Guests
            </div>
            <div className="text-white/80">
              <span className="font-semibold">24/7</span> Concierge
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Image Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage
                  ? 'bg-gold scale-125'
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-rotate indicator */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <div className="flex items-center space-x-2 text-white/70 text-sm">
          <div className="w-3 h-3 rounded-full border border-white/50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></div>
          </div>
          <span>Auto-rotate</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;