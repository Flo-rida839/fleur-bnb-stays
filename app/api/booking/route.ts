import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      checkIn,
      checkOut,
      guests,
      fullName,
      email,
      phone,
      specialRequests,
      paymentMethod,
      unitId,
      totalPrice,
    } = body;

    // Validate required fields
    if (!checkIn || !checkOut || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate booking reference
    const bookingRef = `FLR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Generate smart lock code (encrypted in production)
    const smartLockCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Save booking to Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          booking_reference: bookingRef,
          check_in: checkIn,
          check_out: checkOut,
          guests,
          full_name: fullName,
          email,
          phone,
          special_requests: specialRequests,
          payment_method: paymentMethod,
          unit_id: unitId,
          total_price: totalPrice,
          status: 'confirmed',
          smart_lock_code: smartLockCode,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      return NextResponse.json(
        { error: 'Database error: ' + error.message },
        { status: 500 }
      );
    }

    const booking = data[0];

    return NextResponse.json({
      success: true,
      booking_reference: booking.booking_reference,
      smart_lock_code: smartLockCode,
      message: 'Booking created successfully in Supabase!',
      data: booking,
    }, { status: 201 });

  } catch (error) {
    console.error('❌ Booking API error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Fleur Stays BNB Booking API',
    status: 'Connected to Supabase',
    endpoints: {
      POST: '/api/booking - Create a new booking',
    },
    note: 'Make sure SUPABASE_URL and SUPABASE_KEY are set in .env.local',
  });
}