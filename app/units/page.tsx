import UnitCard from '@/components/UnitCard';
import { Filter, MapPin, Users, Bed, Bath, Square } from 'lucide-react';

// All units data
const allUnits = [
  {
    id: '1',
    title: 'The Skyline Penthouse',
    description: 'Luxury 3-bedroom penthouse with panoramic city views, private terrace, and chef\'s kitchen.',
    type: '3BR' as const,
    location: 'Nairobi Westlands',
    price: 25000,
    rating: 4.9,
    images: ['/images/unit1-1.jpg', '/images/unit1-2.jpg', '/images/unit1-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'AC', 'Hot Water', 'Gym', 'Pool'],
    size: '180 m²',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    features: ['City View', 'Private Terrace', 'Smart Home', 'Gym Access', 'Concierge'],
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
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Pool', 'Garden', 'BBQ', 'AC'],
    size: '150 m²',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Private Pool', 'Garden', 'BBQ Area', 'Secure Compound', 'Maid Service'],
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
    amenities: ['Wifi', 'Netflix', 'Kitchenette', 'Parking', 'AC', 'Workspace', 'Security'],
    size: '45 m²',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ['City Center', 'Modern Design', 'Fast WiFi', '24/7 Security', 'Walkable'],
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
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Lake View', 'Balcony', 'AC', 'Hot Water'],
    size: '75 m²',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    features: ['Lake View', 'Balcony', 'Quiet Area', 'Nature Walks', 'Fishing'],
  },
  {
    id: '5',
    title: 'Mountain View Cabin',
    description: 'Cozy 2-bedroom cabin with fireplace, mountain views, and hiking trail access.',
    type: '2BR' as const,
    location: 'Mount Kenya',
    price: 15000,
    rating: 4.8,
    images: ['/images/unit5-1.jpg', '/images/unit5-2.jpg', '/images/unit5-3.jpg'],
    amenities: ['Wifi', 'Fireplace', 'Kitchen', 'Parking', 'Mountain View', 'BBQ', 'Hot Tub'],
    size: '120 m²',
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Mountain View', 'Fireplace', 'Hot Tub', 'Hiking Trails', 'Secluded'],
  },
  {
    id: '6',
    title: 'Beachfront Paradise',
    description: 'Luxury 3-bedroom villa directly on the beach with private pool and sunset views.',
    type: '3BR' as const,
    location: 'Diani Beach',
    price: 35000,
    rating: 4.9,
    images: ['/images/unit6-1.jpg', '/images/unit6-2.jpg', '/images/unit6-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Beachfront', 'Pool', 'AC', 'Garden'],
    size: '200 m²',
    maxGuests: 8,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Beachfront', 'Private Pool', 'Sunset Views', 'Chef Service', 'Massage'],
  },
  {
    id: '7',
    title: 'Executive City Apartment',
    description: 'Modern 1-bedroom apartment in business district with office setup and gym access.',
    type: '1BR' as const,
    location: 'Nairobi Upper Hill',
    price: 9500,
    rating: 4.6,
    images: ['/images/unit7-1.jpg', '/images/unit7-2.jpg', '/images/unit7-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Office', 'Gym', 'AC', 'Concierge'],
    size: '65 m²',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ['Business District', 'Office Setup', 'Gym Access', 'Concierge', 'Secure'],
  },
  {
    id: '8',
    title: 'Family Garden Home',
    description: 'Spacious 4-bedroom family home with large garden, play area, and modern kitchen.',
    type: '3BR' as const,
    location: 'Runda, Nairobi',
    price: 28000,
    rating: 4.9,
    images: ['/images/unit8-1.jpg', '/images/unit8-2.jpg', '/images/unit8-3.jpg'],
    amenities: ['Wifi', 'Netflix', 'Kitchen', 'Parking', 'Garden', 'Play Area', 'AC', 'Security'],
    size: '220 m²',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Family Friendly', 'Large Garden', 'Play Area', 'Secure', 'Quiet Neighborhood'],
  },
];

export default function UnitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Discover Our <span className="font-cursive text-gold">Luxury</span> Collection
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Choose from our curated selection of premium vacation rentals, 
              each offering unique experiences and world-class amenities.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span>8+ Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gold" />
                <span>2-8 Guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="w-5 h-5 text-gold" />
                <span>Studio to 4BR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif text-teal-900">
              <Filter className="w-6 h-6 inline mr-2" />
              Refine Your Search
            </h2>
            <div className="text-teal-700 font-semibold">
              {allUnits.length} Units Available
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none">
              <option>All Locations</option>
              <option>Nairobi</option>
              <option>Coast</option>
              <option>Mountains</option>
            </select>
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none">
              <option>All Unit Types</option>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3+ Bedrooms</option>
            </select>
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none">
              <option>Any Price</option>
              <option>Under KES 10,000</option>
              <option>KES 10,000 - 20,000</option>
              <option>KES 20,000+</option>
            </select>
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Apply Filters
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-teal-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-800">8</div>
              <div className="text-sm text-gray-600">Total Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-800">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-800">6</div>
              <div className="text-sm text-gray-600">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-800">24</div>
              <div className="text-sm text-gray-600">Max Guests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allUnits.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-serif text-teal-900 mb-8 text-center">
            Unit <span className="font-cursive text-gold">Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-50">
                  <th className="p-4 text-left">Unit Type</th>
                  <th className="p-4 text-center">
                    <Bed className="w-5 h-5 inline mr-2" />
                    Beds
                  </th>
                  <th className="p-4 text-center">
                    <Bath className="w-5 h-5 inline mr-2" />
                    Baths
                  </th>
                  <th className="p-4 text-center">
                    <Users className="w-5 h-5 inline mr-2" />
                    Max Guests
                  </th>
                  <th className="p-4 text-center">
                    <Square className="w-5 h-5 inline mr-2" />
                    Size
                  </th>
                  <th className="p-4 text-center">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {allUnits.slice(0, 4).map((unit) => (
                  <tr key={unit.id} className="border-b border-teal-100 hover:bg-teal-50">
                    <td className="p-4 font-medium">{unit.title}</td>
                    <td className="p-4 text-center">{unit.bedrooms}</td>
                    <td className="p-4 text-center">{unit.bathrooms}</td>
                    <td className="p-4 text-center">{unit.maxGuests}</td>
                    <td className="p-4 text-center">{unit.size}</td>
                    <td className="p-4 text-center font-bold text-teal-800">
                      KES {unit.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}