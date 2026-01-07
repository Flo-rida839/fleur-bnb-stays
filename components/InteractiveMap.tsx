"use client";

import { useState } from 'react';
import { MapPin, Navigation, Star, Wifi, Car, Snowflake, Tv, Key } from 'lucide-react';

const locations = [
  { id: 1, name: 'Nairobi Westlands', units: 3, price: 'KES 8,500', coordinates: { x: 30, y: 40 }, rating: 4.7 },
  { id: 2, name: 'Karen', units: 2, price: 'KES 18,000', coordinates: { x: 60, y: 60 }, rating: 4.9 },
  { id: 3, name: 'Naivasha', units: 1, price: 'KES 12,000', coordinates: { x: 40, y: 80 }, rating: 4.6 },
  { id: 4, name: 'Diani Beach', units: 1, price: 'KES 35,000', coordinates: { x: 80, y: 20 }, rating: 4.8 },
  { id: 5, name: 'Mount Kenya', units: 1, price: 'KES 15,000', coordinates: { x: 70, y: 50 }, rating: 4.5 },
];

const amenities = [
  { icon: Key, label: 'Smart Lock' },
  { icon: Tv, label: 'Netflix' },
  { icon: Car, label: 'Parking' },
  { icon: Wifi, label: 'WiFi' },
  { icon: Snowflake, label: 'AC' },
];

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="luxury-card p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
            <Navigation className="w-6 h-6 inline mr-2 text-teal-600" />
            Explore Our Locations
          </h3>
          <p className="text-teal-700">Click on pins to discover properties across Kenya</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full">
            <span className="font-bold">{locations.length}</span> Premium Locations
          </div>
          <button className="bg-gradient-luxury text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Visualization */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-teal-50 to-ivory rounded-xl p-4 border border-teal-200 shadow-inner overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-grid-teal-500/[0.03] bg-[size:40px_40px]" />
          
          {/* Simplified Map */}
          <div className="relative w-full h-full">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  selectedLocation.id === location.id
                    ? 'scale-125 z-10'
                    : 'hover:scale-110'
                }`}
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
              >
                <div className="relative group">
                  <MapPin className={`w-10 h-10 drop-shadow-lg ${
                    selectedLocation.id === location.id
                      ? 'text-gold fill-gold animate-pulse'
                      : 'text-teal-600 fill-teal-600/70 group-hover:fill-teal-600'
                  } transition-colors`} />
                  
                  {/* Price Badge */}
                  <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    selectedLocation.id === location.id
                      ? 'bg-gold text-white'
                      : 'bg-white text-teal-800 shadow-md'
                  }`}>
                    {location.price}
                  </div>
                  
                  {/* Location Name Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-charcoal text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                      {location.name}
                    </div>
                    <div className="w-2 h-2 bg-charcoal transform rotate-45 mx-auto -mt-1"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-200">
            <h5 className="font-bold text-teal-800 mb-2 text-sm">Legend</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600 fill-teal-600/70" />
                <span className="text-sm text-teal-700">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold fill-gold" />
                <span className="text-sm text-teal-700">Selected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details Panel */}
        <div className="space-y-6">
          {/* Selected Location Card */}
          <div className="gradient-border">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-charcoal">{selectedLocation.name}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${
                          i < Math.floor(selectedLocation.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-teal-800">
                      {selectedLocation.rating}/5
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-gold">{selectedLocation.price}</div>
                  <div className="text-sm text-teal-600">per night</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="text-sm text-teal-700 mb-1">Available Units</div>
                  <div className="text-2xl font-bold text-teal-900">{selectedLocation.units}</div>
                  <div className="text-xs text-teal-600 mt-1">Luxury stays</div>
                </div>
                
                <div className="bg-gold/10 rounded-lg p-4">
                  <div className="text-sm text-teal-700 mb-1">Occupancy Rate</div>
                  <div className="text-2xl font-bold text-teal-900">92%</div>
                  <div className="text-xs text-teal-600 mt-1">Monthly average</div>
                </div>
              </div>
              
              {/* Amenities */}
              <div className="pt-6 border-t border-teal-100">
                <div className="text-sm font-semibold text-teal-800 mb-3">Premium Amenities:</div>
                <div className="flex flex-wrap gap-3">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-2 px-3 py-2 bg-white border border-teal-200 rounded-lg"
                    >
                      <amenity.icon className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-teal-700 font-medium">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="pt-6 flex gap-3">
                <button className="flex-1 bg-gradient-luxury text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Book Now
                </button>
                <button className="flex-1 border border-teal-300 text-teal-700 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* All Locations List */}
          <div className="space-y-4">
            <h5 className="font-bold text-teal-800 text-lg">All Locations</h5>
            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover-lift ${
                    selectedLocation.id === location.id
                      ? 'bg-teal-100 border-l-4 border-gold shadow-sm'
                      : 'hover:bg-teal-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${
                      selectedLocation.id === location.id
                        ? 'text-gold'
                        : 'text-teal-600'
                    }`} />
                    <div>
                      <div className="font-medium text-charcoal text-left">{location.name}</div>
                      <div className="text-xs text-teal-600 mt-1">{location.units} unit{location.units !== 1 ? 's' : ''} available</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gold">{location.price}</div>
                    <div className="flex items-center gap-1 text-xs text-teal-600">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{location.rating}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;