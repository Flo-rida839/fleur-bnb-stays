import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { phoneNumber, amount, bookingReference, accountReference } = await request.json();

    // Validate amount (minimum 10 KSH for M-Pesa)
    if (amount < 10) {
      return NextResponse.json({
        success: false,
        error: 'Amount must be at least KES 10'
      }, { status: 400 });
    }

    // Validate phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 9 || !cleanPhone.startsWith('7')) {
      return NextResponse.json({
        success: false,
        error: 'Invalid phone number. Use format: 7XX XXX XXX'
      }, { status: 400 });
    }

    // Get M-Pesa credentials from environment variables
    const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
    const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
    const MPESA_BUSINESS_SHORTCODE = process.env.MPESA_BUSINESS_SHORTCODE || '174379'; // Sandbox default
    const MPESA_PASSKEY = process.env.MPESA_PASSKEY;

    // For development/testing without actual M-Pesa credentials
    if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET) {
      console.log('⚠️ M-Pesa credentials not found - simulating payment');
      
      // Simulate payment for development
      await supabase
        .from('bookings')
        .update({ 
          status: 'payment_simulated',
          payment_simulated: true,
          updated_at: new Date().toISOString()
        })
        .eq('booking_reference', bookingReference);

      return NextResponse.json({
        success: true,
        message: `Simulated: Payment request would be sent to 254${cleanPhone}`,
        checkoutRequestID: `SIM-${Date.now()}`,
        simulated: true
      });
    }

    // REAL M-PESA IMPLEMENTATION
    // 1. Get Access Token
    const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
    
    const tokenResponse = await fetch(
      process.env.NODE_ENV === 'production' 
        ? 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
        : 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
    
    const { access_token } = await tokenResponse.json();

    // 2. Generate Timestamp and Password
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(`${MPESA_BUSINESS_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');

    // 3. Send STK Push
    const stkResponse = await fetch(
      process.env.NODE_ENV === 'production'
        ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
        : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          BusinessShortCode: MPESA_BUSINESS_SHORTCODE,
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: Math.floor(amount), // M-Pesa requires integer
          PartyA: `254${cleanPhone}`,
          PartyB: MPESA_BUSINESS_SHORTCODE,
          PhoneNumber: `254${cleanPhone}`,
          CallBackURL: `${process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin}/api/mpesa/callback`,
          AccountReference: accountReference || bookingReference,
          TransactionDesc: `Booking: ${bookingReference}`,
        }),
      }
    );

    const result = await stkResponse.json();

    if (result.ResponseCode === '0') {
      // Save payment request ID to booking
      await supabase
        .from('bookings')
        .update({ 
          payment_request_id: result.CheckoutRequestID,
          status: 'payment_pending',
          updated_at: new Date().toISOString()
        })
        .eq('booking_reference', bookingReference);

      return NextResponse.json({
        success: true,
        message: 'Payment request sent to your phone',
        checkoutRequestID: result.CheckoutRequestID,
        simulated: false
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.errorMessage || 'Failed to initiate payment'
      }, { status: 400 });
    }

  } catch (error) {
    console.error('M-Pesa STK Push error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}