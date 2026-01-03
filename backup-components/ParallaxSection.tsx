"use client";

import { useEffect, useRef } from 'react';
import { Sparkles, Zap, Shield, Wifi } from 'lucide-react';

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        ref={sectionRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/parallax-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-700/60 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-white font-semibold">Next-Level Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Smart Home <span className="font-cursive text-gold">Technology</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Experience the future of hospitality with our smart home integration. 
            Control everything from your smartphone.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Zap className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="text-white font-semibold">Smart Lighting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Wifi className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="text-white font-semibold">WiFi 6</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="text-white font-semibold">Smart Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;