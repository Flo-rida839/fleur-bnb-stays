"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Users, Bed, Bath, Star, ChevronRight } from 'lucide-react';

interface ListingCardProps {
  listing: {
    id: string;
    title: string;
    description: string;
    type: string;
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

const ListingCard = ({ listing }: ListingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-r from-teal-500 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">
            {listing.type}
          </span>
          <span className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
            Premium
          </span>
        </div>
        
        {/* Price */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
          <div className="text-2xl font-bold text-teal-800">
            KES {listing.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-600"> /night</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-1">
              {listing.title}
            </h3>
            <div className="flex items-center text-teal-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{listing.location}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 fill-gold text-gold" />
            <span className="font-bold text-teal-800">{listing.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {listing.description}
        </p>

        {/* Specs */}
        <div className="flex items-center justify-between mb-6 py-3 border-y border-teal-100">
          <div className="flex items-center space-x-1">
            <Users className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{listing.maxGuests} guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bed className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{listing.bedrooms} bed{listing.bedrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium">{listing.bathrooms} bath{listing.bathrooms !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {listing.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {listing.features.length > 3 && (
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                +{listing.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/booking?unit=${listing.id}`}
          className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
            isHovered
              ? 'bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-lg'
              : 'bg-gradient-to-r from-teal-600 to-teal-700 text-white'
          }`}
        >
          <span>View Details</span>
          <ChevronRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;