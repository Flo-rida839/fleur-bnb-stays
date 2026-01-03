"use client";

import { useState } from 'react';
import { 
  Wifi, Tv, Coffee, Wind, Droplets, Car, Lock, Shield,
  Smartphone, Key, Coffee as Kitchen, Wind as AC,
  Droplets as HotWater, Tv as Netflix, Wifi as WiFiIcon,
  Car as Parking, Lock as SmartLock, Shield as Security,
  Smartphone as DigitalKey, Key as SelfCheckin,
  Utensils, Thermometer, Waves, Home, Sparkles
} from 'lucide-react';

const AmenitiesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Amenities' },
    { id: 'tech', label: 'Technology' },
    { id: 'comfort', label: 'Comfort' },
    { id: 'security', label: 'Security' },
    { id: 'kitchen', label: 'Kitchen' },
  ];

  const amenities = [
    // Technology
    { 
      icon: <Wifi className="w-8 h-8" />, 
      title: 'High-Speed WiFi', 
      description: 'Gigabit fiber internet for work and streaming',
      category: 'tech',
      premium: true
    },
    { 
      icon: <Tv className="w-8 h-8" />, 
      title: 'Premium Netflix', 
      description: '4K streaming with all premium subscriptions',
      category: 'tech',
      premium: true
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: 'Digital Guidebook', 
      description: 'Interactive guide with local recommendations',
      category: 'tech'
    },
    
    // Comfort
    { 
      icon: <Wind className="w-8 h-8" />, 
      title: 'Smart Climate Control', 
      description: 'Central AC/heating with individual room controls',
      category: 'comfort',
      premium: true
    },
    { 
      icon: <Droplets className="w-8 h-8" />, 
      title: 'Rainfall Showers', 
      description: 'Luxury rainfall showerheads with instant hot water',
      category: 'comfort',
      premium: true
    },
    { 
      icon: <Thermometer className="w-8 h-8" />, 
      title: 'Heated Floors', 
      description: 'Warm marble floors in bathrooms',
      category: 'comfort',
      premium: true
    },
    
    // Security
    { 
      icon: <Lock className="w-8 h-8" />, 
      title: 'Smart Lock Entry', 
      description: 'Secure keyless entry with unique codes',
      category: 'security',
      premium: true
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: '24/7 Security', 
      description: 'Building security and CCTV surveillance',
      category: 'security'
    },
    { 
      icon: <Key className="w-8 h-8" />, 
      title: 'Self Check-in', 
      description: 'Contactless check-in with digital codes',
      category: 'security'
    },
    
    // Kitchen
    { 
      icon: <Coffee className="w-8 h-8" />, 
      title: 'Gourmet Kitchen', 
      description: 'Fully equipped with premium appliances',
      category: 'kitchen',
      premium: true
    },
    { 
      icon: <Utensils className="w-8 h-8" />, 
      title: 'Nespresso Machine', 
      description: 'Professional coffee setup with capsules',
      category: 'kitchen'
    },
    { 
      icon: <Waves className="w-8 h-8" />, 
      title: 'Filtered Water', 
      description: 'Advanced water filtration system',
      category: 'kitchen'
    },
    
    // Additional Premium
    { 
      icon: <Car className="w-8 h-8" />, 
      title: 'Dedicated Parking', 
      description: 'Secure underground parking space',
      category: 'all',
      premium: true
    },
    { 
      icon: <Home className="w-8 h-8" />, 
      title: 'Private Balcony', 
      description: 'Stunning views with outdoor seating',
      category: 'comfort',
      premium: true
    },
    { 
      icon: <Sparkles className="w-8 h-8" />, 
      title: 'Daily Cleaning', 
      description: 'Professional cleaning service available',
      category: 'comfort'
    },
  ];

  const filteredAmenities = activeCategory === 'all' 
    ? amenities 
    : amenities.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-gold/20 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-semibold text-teal-800">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
            Luxury <span className="font-cursive text-gold">Amenities</span> Included
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every Fleur Stays property comes with premium amenities designed for your comfort and convenience
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg'
                  : 'bg-white text-teal-700 hover:bg-teal-50 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 ${
                amenity.premium ? 'border-2 border-gold/30' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl ${
                  amenity.premium
                    ? 'bg-gradient-to-br from-gold to-gold-dark text-white'
                    : 'bg-teal-100 text-teal-600'
                }`}>
                  {amenity.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-teal-900">
                      {amenity.title}
                    </h3>
                    {amenity.premium && (
                      <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {amenity.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-teal-600">
                  <span className="font-medium">Standard in all units</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Features Highlight */}
        <div className="mt-16 p-8 bg-gradient-to-r from-teal-800 to-teal-900 rounded-3xl text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-4">
                <span className="font-cursive text-gold">Digital First</span> Experience
              </h3>
              <p className="text-teal-100 mb-6">
                Enjoy seamless digital access with our smart home system. 
                Check in with encrypted codes, control everything from your phone, 
                and experience true luxury living.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Encrypted digital check-in codes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Smart home automation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Digital concierge service</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gold/20 to-teal-700/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <Lock className="w-16 h-16 mx-auto mb-4 text-gold" />
                  <h4 className="text-2xl font-bold mb-2">Smart Lock System</h4>
                  <p className="text-teal-200">
                    Unique encrypted code for each guest. No keys, no hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesGrid;