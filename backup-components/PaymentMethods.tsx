"use client";

import { 
  CreditCard, Smartphone, Wallet, Lock, Check,
  Smartphone as Mpesa, CreditCard as Visa, Globe
} from 'lucide-react';
import { useState } from 'react';

interface PaymentMethodsProps {
  selectedMethod: string;
  onSelectMethod: (method: string) => void;
}

const PaymentMethods = ({ selectedMethod, onSelectMethod }: PaymentMethodsProps) => {
  const [mpesaNumber, setMpesaNumber] = useState('');

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: <Mpesa className="w-6 h-6" />,
      description: 'Instant payment via M-Pesa',
      instructions: 'Enter your M-Pesa number to receive payment request',
      color: 'bg-green-50 border-green-200 text-green-800',
      hoverColor: 'hover:bg-green-100',
    },
    {
      id: 'visa',
      name: 'Visa/Mastercard',
      icon: <Visa className="w-6 h-6" />,
      description: 'Secure card payment',
      instructions: 'Enter your card details securely',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <Globe className="w-6 h-6" />,
      description: 'International payments',
      instructions: 'Pay via PayPal account',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      hoverColor: 'hover:bg-indigo-100',
    },
  ];

  const handleMpesaPayment = () => {
    if (mpesaNumber && mpesaNumber.length === 9) {
      // Simulate M-Pesa payment request
      alert(`Payment request sent to 254${mpesaNumber}. Please check your phone to complete payment.`);
      // In real implementation, this would call your backend API
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <div className="grid md:grid-cols-3 gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelectMethod(method.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              method.color
            } ${
              method.hoverColor
            } ${
              selectedMethod === method.id 
                ? 'ring-2 ring-offset-2 ring-teal-500 border-teal-500' 
                : 'border'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {method.icon}
                <span className="font-bold">{method.name}</span>
              </div>
              {selectedMethod === method.id && (
                <Check className="w-5 h-5 text-teal-600" />
              )}
            </div>
            <p className="text-sm opacity-80 text-left">{method.description}</p>
          </button>
        ))}
      </div>

      {/* Payment Instructions */}
      {selectedMethod === 'mpesa' && (
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Smartphone className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-green-800">M-Pesa Payment</h4>
              <p className="text-sm text-green-700">
                Enter your M-Pesa number to receive payment request
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                <span className="font-bold text-green-700">+254</span>
              </div>
              <input
                type="tel"
                value={mpesaNumber}
                onChange={(e) => setMpesaNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                placeholder="7XX XXX XXX"
                className="w-full p-4 pl-20 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              />
            </div>
            
            <button
              type="button"
              onClick={handleMpesaPayment}
              disabled={!mpesaNumber || mpesaNumber.length !== 9}
              className={`w-full py-3 rounded-xl font-bold transition-all ${
                mpesaNumber && mpesaNumber.length === 9
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Send Payment Request
            </button>
            
            <div className="flex items-center space-x-3 text-sm text-green-700">
              <Lock className="w-4 h-4" />
              <span>Secure transaction via Safaricom M-Pesa</span>
            </div>
          </div>
        </div>
      )}

      {selectedMethod === 'visa' && (
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h4 className="font-bold text-blue-800">Card Payment</h4>
              <p className="text-sm text-blue-700">
                Your card details are securely processed
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-blue-700">
              <Lock className="w-4 h-4" />
              <span>Secured by SSL encryption. We never store your card details.</span>
            </div>
          </div>
        </div>
      )}

      {selectedMethod === 'paypal' && (
        <div className="bg-gradient-to-r from-indigo-50 to-teal-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Globe className="w-6 h-6 text-indigo-700" />
            </div>
            <div>
              <h4 className="font-bold text-indigo-800">PayPal Payment</h4>
              <p className="text-sm text-indigo-700">
                You'll be redirected to PayPal to complete payment
              </p>
            </div>
          </div>
          
          <button
            type="button"
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Continue to PayPal
          </button>
          
          <div className="flex items-center space-x-3 text-sm text-indigo-700 mt-4">
            <Lock className="w-4 h-4" />
            <span>Secure international payment processing</span>
          </div>
        </div>
      )}

      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-6 py-4 border-t border-teal-200">
        <div className="flex items-center space-x-2">
          <Lock className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">SSL Secured</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wallet className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">PCI Compliant</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">Money Back Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;