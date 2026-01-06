"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Users, Bath, Bed, Wifi, Tv, Coffee, Car,
  ChevronRight, Star, Zap, Wind, Droplets
} from 'lucide-react';

interface UnitCardProps {
  unit: {
    id: string;
    title: string;
    description: string;
    type: 'Studio' | '1BR' | '2BR' | '3BR';
    location: string;
    price: number;
    rating: number;
    images: string[];
    amenities: string[];
    size: string;
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
    features: string[];
  };
}

const UnitCard = ({ unit }: UnitCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const typeColors = {
    'Studio': 'bg-purple-100 text-purple-800',
    '1BR': 'bg-blue-100 text-blue-800',
    '2BR': 'bg-green-100 text-green-800',
    '3BR': 'bg-orange-100 text-orange-800',
  };

  const amenitiesIcons: Record<string, React.ReactNode> = {
    'wifi': <Wifi className="w-5 h-5" />,
    'netflix': <Tv className="w-5 h-5" />,
    'kitchen': <Coffee className="w-5 h-5" />,
    'parking': <Car className="w-5 h-5" />,
    'ac': <Wind className="w-5 h-5" />,
    'hot water': <Droplets className="w-5 h-5" />,
  };

  return (
    <div 
      className="luxury-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
        {/* Image Container */}
        <div className="relative h-full">
          <Image
            src={unit.images[currentImage]}
            alt={unit.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Image Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {unit.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[unit.type]}`}>
            {unit.type}
          </span>
          <span className="px-3 py-1 bg-gold text-white rounded-full text-sm font-semibold">
            Premium
          </span>
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
          <div className="text-2xl font-bold text-teal-800">
            KES {unit.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-600"> /night</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-serif font-bold text-teal-900 mb-1">
              {unit.title}
            </h3>
            <div className="flex items-center text-teal-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{unit.location}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 fill-gold text-gold" />
            <span className="font-bold text-teal-800">{unit.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {unit.description}
        </p>

        {/* Specs */}
        <div className="flex items-center justify-between mb-6 py-3 border-y border-teal-100">
          <div className="flex items-center space-x-1">
            <Users className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{unit.maxGuests} guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bed className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{unit.bedrooms} bed{unit.bedrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{unit.bathrooms} bath{unit.bathrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="text-sm font-medium text-teal-600">
            {unit.size}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-teal-800 mb-3">KEY AMENITIES</h4>
          <div className="flex flex-wrap gap-3">
            {unit.amenities.slice(0, 4).map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-lg"
              >
                {amenitiesIcons[amenity.toLowerCase()] || <Zap className="w-5 h-5" />}
                <span className="text-sm font-medium capitalize">{amenity}</span>
              </div>
            ))}
            {unit.amenities.length > 4 && (
              <div className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-lg">
                <span className="text-sm font-medium text-teal-600">
                  +{unit.amenities.length - 4} more
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {unit.features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/booking?unit=${unit.id}`}
          className="group block w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          <span>Book This Unit</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 ${
        isHovered ? 'border-gold/50' : ''
      }`} />
    </div>
  );
};

export default UnitCard;