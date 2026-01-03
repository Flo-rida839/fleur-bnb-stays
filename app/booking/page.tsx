import BookingForm from '@/components/BookingForm';
import { Shield, Key, Wifi, Car, Coffee, Wind } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
              Book Your <span className="font-cursive text-gold">Luxury</span> Stay
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure your premium experience with our easy booking process. 
              Get instant confirmation and digital check-in instructions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <BookingForm />
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              {/* Booking Guarantee */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Booking Guarantee</h3>
                    <p className="text-teal-100">Secure & Hassle-free</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span>Best Price Guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span>Free Cancellation (48hrs)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span>24/7 Customer Support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span>Instant Confirmation</span>
                  </li>
                </ul>
              </div>

              {/* Check-in Process */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Key className="w-8 h-8 text-teal-600" />
                  <div>
                    <h3 className="text-xl font-bold text-teal-900">Digital Check-in</h3>
                    <p className="text-gray-600">Smart & Secure</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-800">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Booking Confirmation</h4>
                      <p className="text-sm text-gray-600">Instant email confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-800">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Smart Lock Code</h4>
                      <p className="text-sm text-gray-600">Sent via WhatsApp 2hrs before</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-800">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Self Check-in</h4>
                      <p className="text-sm text-gray-600">Use code for keyless entry</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included Amenities */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-6">All Units Include</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium">High-speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Key className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium">Smart Lock</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium">Parking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium">Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Wind className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium">AC/Heating</span>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-gradient-to-r from-gold/10 to-teal-50 rounded-2xl p-6 border border-gold/30">
                <h3 className="text-xl font-bold text-teal-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+254798158768"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <span>Call: +254 798 158 768</span>
                  </a>
                  <a 
                    href="https://wa.me/254798158768"
                    target="_blank"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}