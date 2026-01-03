"use client";

import { useState } from 'react';
import { MapPin, Navigation, Star } from 'lucide-react';

const locations = [
  { id: 1, name: 'Nairobi Westlands', units: 3, price: 'From KES 8,500', coordinates: { x: 30, y: 40 } },
  { id: 2, name: 'Karen', units: 2, price: 'From KES 18,000', coordinates: { x: 60, y: 60 } },
  { id: 3, name: 'Naivasha', units: 1, price: 'From KES 12,000', coordinates: { x: 40, y: 80 } },
  { id: 4, name: 'Diani Beach', units: 1, price: 'From KES 35,000', coordinates: { x: 80, y: 20 } },
  { id: 5, name: 'Mount Kenya', units: 1, price: 'From KES 15,000', coordinates: { x: 70, y: 50 } },
];

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-serif text-teal-900">
          <Navigation className="w-6 h-6 inline mr-2" />
          Interactive Locations Map
        </h3>
        <div className="text-teal-700">
          <span className="font-bold">{locations.length}</span> Locations
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Visualization */}
        <div className="relative h-96 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4">
          {/* Simplified Map */}
          <div className="relative w-full h-full">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                  selectedLocation.id === location.id
                    ? 'scale-125 z-10'
                    : 'hover:scale-110'
                }`}
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
              >
                <div className="relative">
                  <MapPin className={`w-8 h-8 ${
                    selectedLocation.id === location.id
                      ? 'text-gold fill-gold'
                      : 'text-teal-600 fill-teal-600/50'
                  }`} />
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-semibold ${
                    selectedLocation.id === location.id
                      ? 'bg-gold text-white'
                      : 'bg-white text-teal-800'
                  }`}>
                    {location.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium">Click pins for details</span>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-teal-900">{selectedLocation.name}</h4>
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="font-bold ml-1">4.8</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-teal-700 mb-1">Available Units</div>
                <div className="text-2xl font-bold text-teal-900">{selectedLocation.units} units</div>
              </div>
              
              <div>
                <div className="text-sm text-teal-700 mb-1">Starting Price</div>
                <div className="text-2xl font-bold text-gold">{selectedLocation.price}</div>
              </div>
              
              <div className="pt-4 border-t border-teal-200">
                <div className="text-sm text-teal-700 mb-2">Popular Amenities:</div>
                <div className="flex flex-wrap gap-2">
                  {['Smart Lock', 'Netflix', 'Parking', 'WiFi', 'AC'].map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1 bg-white text-teal-700 rounded-full text-xs font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All Locations List */}
          <div className="space-y-3">
            <h5 className="font-bold text-teal-800">All Locations</h5>
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  selectedLocation.id === location.id
                    ? 'bg-teal-100 border-l-4 border-gold'
                    : 'hover:bg-teal-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="font-medium">{location.name}</span>
                </div>
                <div className="text-sm text-teal-700">{location.units} unit{location.units !== 1 ? 's' : ''}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;