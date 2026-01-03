// Utility functions for Fleur Stays BNB

/**
 * Format price in Kenyan Shillings
 */
export const formatPrice = (price: number): string => {
  return `KES ${price.toLocaleString('en-KE')}`;
};

/**
 * Generate booking reference number
 */
export const generateBookingReference = (): string => {
  const prefix = 'FLR';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substr(2, 4).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

/**
 * Generate random smart lock code
 */
export const generateSmartLockCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Format date for display
 */
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-KE', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Calculate number of nights between dates
 */
export const calculateNights = (checkIn: string, checkOut: string): number => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Calculate total price
 */
export const calculateTotalPrice = (
  pricePerNight: number,
  nights: number,
  guests: number
): number => {
  const basePrice = pricePerNight * nights;
  const cleaningFee = 2000;
  const serviceFee = 1500;
  
  return basePrice + cleaningFee + serviceFee;
};

/**
 * Validate email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Kenyan phone number
 */
export const isValidKenyanPhone = (phone: string): boolean => {
  const phoneRegex = /^(?:254|\+254|0)?(7\d{8})$/;
  return phoneRegex.test(phone);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};