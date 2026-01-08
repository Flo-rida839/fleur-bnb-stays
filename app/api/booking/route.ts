import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Generate booking reference
    const bookingReference = `FLR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
    
    // Insert booking into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          booking_reference: bookingReference,
          unit_id: formData.unitId,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          guests: formData.guests,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          special_requests: formData.specialRequests,
          payment_method: formData.paymentMethod,
          total_price: formData.totalPrice,
          status: 'pending_payment', // Initial status
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save booking', details: error.message },
        { status: 500 }
      );
    }

    // If payment method is M-Pesa, initiate payment
    if (formData.paymentMethod === 'mpesa') {
      try {
        const mpesaResponse = await fetch(`${request.nextUrl.origin}/api/mpesa/stk-push`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phoneNumber: formData.phone.replace(/\D/g, '').slice(-9), // Last 9 digits
            amount: formData.totalPrice,
            bookingReference: bookingReference,
            accountReference: `BOOKING-${bookingReference}`,
          }),
        });

        const mpesaResult = await mpesaResponse.json();
        
        if (mpesaResult.success) {
          // Update booking with payment request ID
          await supabase
            .from('bookings')
            .update({ 
              payment_request_id: mpesaResult.checkoutRequestID,
              status: 'payment_pending'
            })
            .eq('booking_reference', bookingReference);
        }
      } catch (mpesaError) {
        console.error('M-Pesa initiation error:', mpesaError);
        // Continue anyway - booking is saved, payment can be retried
      }
    }

    return NextResponse.json({
      success: true,
      booking_reference: bookingReference,
      data: data,
      message: 'Booking created successfully'
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}