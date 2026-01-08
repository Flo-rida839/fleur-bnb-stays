"use client";

import { useState, useEffect } from 'react';
import { Calendar, Users, CreditCard, Shield, Check } from 'lucide-react';
import PaymentMethods from './PaymentMethods';

interface BookingFormProps {
  unitId?: string;
  unitTitle?: string;
  unitPrice?: number;
}

const BookingForm = ({ unitId, unitTitle, unitPrice = 15000 }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'mpesa',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(unitPrice);
  const [nights, setNights] = useState(1);
  const [bookingReference, setBookingReference] = useState('');

  const calculateTotal = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      setTotalPrice(unitPrice * diffDays);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [formData.checkIn, formData.checkOut]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          unitId: unitId || 'general-unit',
          totalPrice: totalPrice + 1500 + 2000, // Include fees
        }),
      });

      const result = await response.json().catch(err => {
        console.error('Failed to parse response as JSON:', err);
        return { error: 'Server returned an invalid response. Please check your connection and try again.' };
      });
      
      if (response.ok) {
        console.log('✅ Booking saved to Supabase:', result);
        setBookingReference(result.booking_reference || result.data?.booking_reference || 'FLR-XXXXXX');
        setIsSuccess(true);
        
        // Reset form after success (after 10 seconds)
        setTimeout(() => {
          setIsSuccess(false);
          setBookingReference('');
          setFormData({
            checkIn: '',
            checkOut: '',
            guests: 1,
            fullName: '',
            email: '',
            phone: '',
            specialRequests: '',
            paymentMethod: 'mpesa',
          });
        }, 10000);
      } else {
        alert(`Booking failed: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('❌ Booking error:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-3xl font-serif text-teal-900 mb-4">
            Booking Confirmed! 🎉
          </h3>
          <p className="text-gray-600 mb-8">
            We've sent your booking confirmation and check-in instructions to your email.
            Check your WhatsApp for the smart lock code.
          </p>
          
          {/* Booking Information */}
          <div className="space-y-6 mb-8">
            <div className="bg-teal-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-teal-800 mb-3">Booking Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-teal-700">Booking Reference:</span>
                  <span className="font-mono font-bold text-teal-900">{bookingReference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-700">Check-in:</span>
                  <span className="font-semibold">{formData.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-700">Check-out:</span>
                  <span className="font-semibold">{formData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-700">Guests:</span>
                  <span className="font-semibold">{formData.guests}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h4 className="text-lg font-bold text-amber-800 mb-3">Important Information</h4>
              <p className="text-amber-700 mb-2">
                <Shield className="w-5 h-5 inline mr-2" />
                Your smart lock code will be sent via WhatsApp 2 hours before check-in
              </p>
              <p className="text-sm text-amber-600">
                Keep your booking reference handy for any inquiries: <span className="font-mono font-bold">{bookingReference}</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700"
            >
              Print Confirmation
            </button>
            <a
              href="/"
              className="px-6 py-3 border-2 border-teal-600 text-teal-700 rounded-xl font-semibold hover:bg-teal-50"
            >
              Back to Home
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            This message will disappear in 10 seconds. The form will reset automatically.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Unit Info */}
          {unitTitle && (
            <div className="bg-gradient-to-r from-teal-50 to-gold/5 rounded-2xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-serif text-teal-900 mb-2">
                {unitTitle}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-2xl sm:text-3xl font-bold text-teal-800">
                  KES {unitPrice.toLocaleString()}
                  <span className="text-base sm:text-lg font-normal text-gray-600"> / night</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Minimum stay: 2 nights
                </div>
              </div>
            </div>
          )}

          {/* Date Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-teal-800">
                <Calendar className="w-4 h-4 mr-2" />
                Check-in Date
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-teal-800">
                <Calendar className="w-4 h-4 mr-2" />
                Check-out Date
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-teal-800">
              <Users className="w-4 h-4 mr-2" />
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-800">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-800">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-teal-800">
              WhatsApp Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                <span className="text-gray-600">+254</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="7XX XXX XXX"
                className="w-full p-4 pl-20 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                required
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Your smart lock code will be sent to this WhatsApp number
            </p>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-teal-800">
              Special Requests (Optional)
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requirements or preferences..."
              rows={4}
              className="w-full p-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
            />
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <label className="flex items-center text-sm font-semibold text-teal-800">
              <CreditCard className="w-4 h-4 mr-2" />
              Select Payment Method
            </label>
            <PaymentMethods
              selectedMethod={formData.paymentMethod}
              onSelectMethod={(method) => 
                setFormData(prev => ({ ...prev, paymentMethod: method }))
              }
            />
          </div>

          {/* Price Summary */}
          <div className="bg-gradient-to-r from-teal-50 to-gold/5 rounded-2xl p-6">
            <h4 className="text-xl font-serif text-teal-900 mb-4">
              Booking Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">KES {unitPrice.toLocaleString()} × {nights} nights</span>
                <span className="font-semibold">KES {(unitPrice * nights).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service fee</span>
                <span className="font-semibold">KES 1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cleaning fee</span>
                <span className="font-semibold">KES 2,000</span>
              </div>
              <div className="border-t border-teal-200 pt-3 mt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-2xl text-teal-800">
                    KES {(totalPrice + 1500 + 2000).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="/terms" className="text-teal-600 font-semibold hover:underline">
                  Terms & Conditions
                </a>
                {' '}and understand that the smart lock code will be sent via WhatsApp 2 hours before check-in time.
              </label>
            </div>

            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-teal-600" />
              <span>Your payment is secured with end-to-end encryption</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </button>

            <p className="text-center text-sm text-gray-600">
              You'll receive a confirmation email with all details within 5 minutes
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;