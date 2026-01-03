"use client";

import { 
  CreditCard, Smartphone, Wallet, Lock, Check, Shield,
  Smartphone as Mpesa, CreditCard as Visa, Globe, DollarSign,
  Banknote, Smartphone as Phone, Shield as SecureShield
} from 'lucide-react';
import { useState } from 'react';

interface PaymentMethodsProps {
  selectedMethod: string;
  onSelectMethod: (method: string) => void;
}

const PaymentMethods = ({ selectedMethod, onSelectMethod }: PaymentMethodsProps) => {
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: <Mpesa className="w-6 h-6" />,
      description: 'Instant mobile payment',
      instructions: 'Enter your M-Pesa number to receive payment request',
      color: 'from-green-50 to-emerald-50 border-green-200 text-green-800',
      hoverColor: 'hover:from-green-100 hover:to-emerald-100',
      popular: true
    },
    {
      id: 'visa',
      name: 'Visa/Mastercard',
      icon: <Visa className="w-6 h-6" />,
      description: 'Secure card payment',
      instructions: 'Enter your card details securely',
      color: 'from-blue-50 to-sky-50 border-blue-200 text-blue-800',
      hoverColor: 'hover:from-blue-100 hover:to-sky-100',
      popular: false
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <Globe className="w-6 h-6" />,
      description: 'International payments',
      instructions: 'Pay via PayPal account',
      color: 'from-indigo-50 to-violet-50 border-indigo-200 text-indigo-800',
      hoverColor: 'hover:from-indigo-100 hover:to-violet-100',
      popular: false
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <Banknote className="w-6 h-6" />,
      description: 'Direct bank transfer',
      instructions: 'Transfer directly to our bank account',
      color: 'from-amber-50 to-orange-50 border-amber-200 text-amber-800',
      hoverColor: 'hover:from-amber-100 hover:to-orange-100',
      popular: false
    },
  ];

  // ... rest of your existing code remains the same ...

