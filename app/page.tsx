import Hero from '@/components/Hero';
import UnitCard from '@/components/UnitCard';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import ParallaxSection from '@/components/ParallaxSection';
import InteractiveMap from '@/components/InteractiveMap';
import { 
  Star, Shield, Key, Zap, Crown, Sparkles,
  MapPin, Users, Calendar, Check
} from 'lucide-react';
import Link from 'next/link';

// Mock data for units
const featuredUnits = [
  {
    id: '1',
    title: 'The Skyline Penthouse',
    description: 'Luxury 3-bedroom penthouse with panoramic city views, private terrace, and chef\'s kitchen.',
    type: '3BR' as const,
    location: 'Nairobi Westlands',
    price: 25000,
    rating: 4.9,
    images: ['/images/unit1-1.jpg', '/images/unit1-2.jpg', '/images/unit1-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'AC', 'Hot Water'],
    size: '180 m²',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    features: ['City View', 'Private Terrace', 'Smart Home', 'Gym Access'],
  },
  {
    id: '2',
    title: 'Serenity Villa',
    description: 'Modern 2-bedroom villa with private garden, swimming pool, and outdoor entertainment area.',
    type: '2BR' as const,
    location: 'Karen, Nairobi',
    price: 18000,
    rating: 4.8,
    images: ['/images/unit2-1.jpg', '/images/unit2-2.jpg', '/images/unit2-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Pool', 'Garden'],
    size: '150 m²',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Private Pool', 'Garden', 'BBQ Area', 'Secure Compound'],
  },
  {
    id: '3',
    title: 'Urban Studio Loft',
    description: 'Chic studio loft in the heart of the city with industrial design and smart home features.',
    type: 'Studio' as const,
    location: 'Nairobi CBD',
    price: 8500,
    rating: 4.7,
    images: ['/images/unit3-1.jpg', '/images/unit3-2.jpg', '/images/unit3-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchenette', 'Parking', 'AC', 'Workspace'],
    size: '45 m²',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ['City Center', 'Modern Design', 'Fast WiFi', '24/7 Security'],
  },
  {
    id: '4',
    title: 'Lakeside Retreat',
    description: 'Spacious 1-bedroom apartment overlooking the lake with balcony and modern furnishings.',
    type: '1BR' as const,
    location: 'Naivasha',
    price: 12000,
    rating: 4.9,
    images: ['/images/unit4-1.jpg', '/images/unit4-2.jpg', '/images/unit4-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Lake View', 'Balcony'],
    size: '75 m²',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    features: ['Lake View', 'Balcony', 'Quiet Area', 'Nature Walks'],
  },
];

const uniqueFeatures = [
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Digital Check-in',
    description: 'Unique encrypted code for each guest. No keys, no waiting.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Smart Home',
    description: 'Control lighting, climate, and entertainment from your phone.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Premium Security',
    description: '24/7 building security with CCTV and secure access.',
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Luxury Amenities',
    description: 'From rainfall showers to premium Netflix - all included.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Units Section */}
      <section className="py-24 bg-gradient-to-b from-white via-teal-50/30 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 rounded-full px-6 py-2 mb-6 shadow-sm">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-teal-800">Curated Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-teal-900 mb-6 leading-tight">
              Our <span className="font-cursive text-gold italic">Exclusive</span> Retreats
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Hand-selected properties offering the pinnacle of comfort and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-16">
            {featuredUnits.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/units"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Units</span>
              <MapPin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
              Why Choose <span className="font-cursive text-gold">Fleur Stays</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We redefine luxury stays with technology, comfort, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {uniqueFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-teal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-teal-200">Happy Guests</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-teal-200">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-teal-200">Premium Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-teal-200">Guest Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <AmenitiesGrid />

      {/* Parallax Experience Section */}
      <ParallaxSection />

      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
              Explore Our <span className="font-cursive text-gold">Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium properties in the most desirable locations across the region.
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-800 via-teal-900 to-teal-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-teal-700/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="font-semibold text-white">Limited Availability</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Ready for an <span className="font-cursive text-gold">Unforgettable</span> Stay?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Book your luxury experience today and receive a complimentary welcome package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="group bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </Link>
              <a
                href="tel:+254798158768"
                className="group glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                <span>Call for Group Bookings</span>
              </a>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-gold" />
                <span className="text-teal-100">Best Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-gold" />
                <span className="text-teal-100">Flexible Cancellation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-gold" />
                <span className="text-teal-100">Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}