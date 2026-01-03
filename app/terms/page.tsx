import { Shield, Lock, CreditCard, AlertCircle, Check } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
              Terms & <span className="font-cursive text-gold">Conditions</span>
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before booking your stay with Fleur Stays BNB
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-600" />
                <span className="font-medium">Last Updated: Dec 7, 2024</span>
              </div>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="bg-gradient-to-r from-teal-50 to-gold/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-gold" />
              <h2 className="text-xl font-bold text-teal-900">Quick Overview</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Minimum stay: 2 nights for all units</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Free cancellation up to 48 hours before check-in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Check-in: 3:00 PM | Check-out: 11:00 AM</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Age requirement: Primary guest must be 21+</span>
              </li>
            </ul>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Booking & Payment */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-bold text-teal-900">Booking & Payment</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">1.1 Payment Methods</h3>
                  <p className="text-gray-700">
                    We accept M-Pesa, Visa, MasterCard, and PayPal. Full payment is required at the time of booking 
                    to confirm your reservation. All transactions are secured with SSL encryption.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">1.2 Price Guarantee</h3>
                  <p className="text-gray-700">
                    The price quoted at the time of booking is guaranteed. No additional charges will be applied 
                    unless you request additional services or cause damage to the property.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">1.3 Taxes & Fees</h3>
                  <p className="text-gray-700">
                    All prices include applicable taxes (VAT). Additional fees include a cleaning fee (KES 2,000) 
                    and service fee (KES 1,500) per stay. These are clearly displayed before booking confirmation.
                  </p>
                </div>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-bold text-teal-900">Cancellation Policy</h2>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-bold text-green-800 mb-2">Full Refund</h4>
                    <p className="text-sm text-green-700">
                      Cancel at least 48 hours before check-in for full refund
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">50% Refund</h4>
                    <p className="text-sm text-yellow-700">
                      Cancel between 24-48 hours before check-in
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <h4 className="font-bold text-red-800 mb-2">No Refund</h4>
                    <p className="text-sm text-red-700">
                      Cancel less than 24 hours before check-in
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  To cancel your booking, please contact us via WhatsApp or email. Refunds are processed 
                  within 5-7 business days to the original payment method.
                </p>
              </div>
            </section>

            {/* Check-in Process */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-bold text-teal-900">Digital Check-in Process</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">2.1 Smart Lock System</h3>
                  <p className="text-gray-700 mb-4">
                    All Fleur Stays properties feature smart lock systems. You will receive a unique, 
                    encrypted access code via WhatsApp 2 hours before your scheduled check-in time.
                  </p>
                  <div className="bg-teal-50 rounded-xl p-4">
                    <h4 className="font-bold text-teal-800 mb-2">⚠️ Important Security Note</h4>
                    <p className="text-teal-700 text-sm">
                      Your smart lock code is unique to your booking and expires at checkout time. 
                      Never share this code with anyone. The code is encrypted and cannot be reused.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">2.2 Check-in/Check-out Times</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">•</span>
                      <span>Check-in: 3:00 PM (Early check-in may be available for additional fee)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">•</span>
                      <span>Check-out: 11:00 AM (Late check-out may be available for additional fee)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">•</span>
                      <span>Self check-in available 24/7 with digital code</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* House Rules */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-6">House Rules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">Allowed</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Parties/events (with prior approval)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Pets (some units, with fee)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Smoking in designated areas only</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Commercial photography (with permit)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-800">Not Allowed</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Smoking inside units</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Excessive noise after 10 PM</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Unauthorized guests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Illegal activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-6">Liability & Insurance</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Fleur Stays BNB is not responsible for any loss, damage, injury, or illness that occurs 
                  during your stay. We recommend that guests purchase travel insurance.
                </p>
                <div className="bg-teal-50 rounded-xl p-4">
                  <h4 className="font-bold text-teal-800 mb-2">Damage Deposit</h4>
                  <p className="text-teal-700">
                    A pre-authorization hold of KES 10,000 will be placed on your credit card at check-in. 
                    This is released within 7 days after check-out if no damages are found.
                  </p>
                </div>
              </div>
            </section>

            {/* Agreement */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">By booking with Fleur Stays BNB,</h3>
              <p className="text-teal-100 mb-6">
                You acknowledge that you have read, understood, and agree to all terms and conditions 
                stated above.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Lock className="w-6 h-6 text-gold" />
                <span className="font-semibold">Your booking is secured and protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}