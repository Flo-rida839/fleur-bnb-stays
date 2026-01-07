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
    images: ['https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3457881/pexels-photo-3457881.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3572635/pexels-photo-3572635.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3571459/pexels-photo-3571459.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3473528/pexels-photo-3473528.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3574874/pexels-photo-3574874.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3457842/pexels-photo-3457842.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3437857/pexels-photo-3437857.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3552464/pexels-photo-3552464.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3584829/pexels-photo-3584829.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3467517/pexels-photo-3467517.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3467517/pexels-photo-3467517.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3566074/pexels-photo-3566074.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
    images: ['https://images.pexels.com/photos/3555628/pexels-photo-3555628.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/3571460/pexels-photo-3571460.jpeg?auto=compress&cs=tinysrgb&w=1600'],
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
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800 text-white py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">
              Discover Our <span className="font-cursive text-gold">Luxury</span> Collection
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 mb-8">
              Choose from our curated selection of premium vacation rentals, 
              each offering unique experiences and world-class amenities.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-sm sm:text-base">8+ Locations</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-sm sm:text-base">2-8 Guests</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-sm sm:text-base">Studio to 4BR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl font-serif text-teal-900">
              <Filter className="w-6 h-6 inline mr-2" />
              Refine Your Search
            </h2>
            <div className="text-teal-700 font-semibold bg-teal-50 px-4 py-1 rounded-full text-sm">
              {allUnits.length} Units Available
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none w-full">
              <option>All Locations</option>
              <option>Nairobi</option>
              <option>Coast</option>
              <option>Mountains</option>
            </select>
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none w-full">
              <option>All Unit Types</option>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3+ Bedrooms</option>
            </select>
            <select className="p-3 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none w-full">
              <option>Any Price</option>
              <option>Under KES 10,000</option>
              <option>KES 10,000 - 20,000</option>
              <option>KES 20,000+</option>
            </select>
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all w-full">
              Apply Filters
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-teal-100">
            <div className="text-center p-2">
              <div className="text-xl sm:text-2xl font-bold text-teal-800">8</div>
              <div className="text-xs sm:text-sm text-gray-600">Total Units</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xl sm:text-2xl font-bold text-teal-800">4.8</div>
              <div className="text-xs sm:text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xl sm:text-2xl font-bold text-teal-800">6</div>
              <div className="text-xs sm:text-sm text-gray-600">Locations</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xl sm:text-2xl font-bold text-teal-800">24</div>
              <div className="text-xs sm:text-sm text-gray-600">Max Guests</div>
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