"use client";

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Shield, Wifi, Thermometer, Coffee, Music, Tv, Lock, Battery } from 'lucide-react';

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    duration: number;
    delay: number;
  }> | null>(null);

  const smartFeatures = [
    { icon: Zap, label: 'Smart Lighting', description: 'Voice-controlled ambiance' },
    { icon: Wifi, label: 'WiFi 6 Pro', description: 'Gigabit speeds throughout' },
    { icon: Shield, label: 'Smart Security', description: '24/7 monitoring & alerts' },
    { icon: Thermometer, label: 'Climate Control', description: 'Personalized temperature' },
    { icon: Coffee, label: 'Smart Kitchen', description: 'Automated appliances' },
    { icon: Music, label: 'Sonos Audio', description: 'Whole-home sound system' },
    { icon: Tv, label: 'Streaming 4K', description: 'Preloaded Netflix/Showmax' },
    { icon: Lock, label: 'Digital Access', description: 'Phone-based check-in' },
    { icon: Battery, label: 'Backup Power', description: 'Uninterrupted experience' },
  ];

  useEffect(() => {
    // Generate random particles only on client side
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 3, // 3-6 seconds
      delay: Math.random() * 2, // 0-2 seconds
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate parallax effect
        const parallaxRate = (scrolled - sectionTop + windowHeight) * 0.3;
        sectionRef.current.style.transform = `translateY(${parallaxRate}px)`;
        
        // Calculate scroll progress for animations
        const progress = Math.min(Math.max((scrolled - sectionTop + windowHeight) / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={sectionRef}
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 60, 64, 0.85), rgba(0, 95, 100, 0.8)), url(/images/parallax-bg.jpg)',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-teal-900/90 opacity-90"
          style={{
            backgroundSize: '400% 400%',
            animation: `gradientShift 15s ease infinite`,
          }}
        />
        
        {/* Animated Particles - Only render on client */}
        <div className="absolute inset-0">
          {particles && particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-light rounded-full opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="relative container mx-auto px-4 h-full flex items-center py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass-effect-dark rounded-full px-5 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-white font-semibold tracking-wider">SMART LUXURY EXPERIENCE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
              <span className="block">The Future of</span>
              <span className="font-cursive text-gold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent animate-shimmer">
                Hospitality is Here
              </span>
            </h2>
            
            <p className="text-xl text-teal-100/90 max-w-3xl mx-auto leading-relaxed">
              Experience seamless smart home integration that anticipates your needs. 
              From automated climate control to voice-activated entertainment—every detail 
              is designed for your comfort.
            </p>
          </div>

          {/* Smart Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {smartFeatures.map((feature, index) => {
              const featureProgress = Math.max(0, (scrollProgress * 3) - (index * 0.1));
              const opacity = Math.min(featureProgress * 2, 1);
              const translateY = (1 - featureProgress) * 20;
              
              return (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 border border-white/10 hover-lift transition-all duration-500"
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{feature.label}</h4>
                      <p className="text-teal-100/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats & CTA */}
          <div className="glass-effect-dark rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">99.9%</div>
                <div className="text-teal-100/90">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">≤ 1ms</div>
                <div className="text-teal-100/90">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                <div className="text-teal-100/90">Tech Support</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-teal-100/80 mb-6 max-w-2xl mx-auto">
                Our smart homes learn your preferences to create a personalized environment 
                that feels like home, only better.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-luxury text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 hover-lift">
                  <span>Experience Smart Living</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
                <button className="group border-2 border-teal-300 text-teal-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-teal-800/30 transition-all duration-300 hover-lift">
                  <span>View Tech Specs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="w-64 h-1 bg-teal-800/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-gold transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="text-xs text-teal-300 text-center mt-2">
          Scroll to explore • {Math.round(scrollProgress * 100)}%
        </div>
      </div>

      {/* CSS Animation for Gradient */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ParallaxSection;