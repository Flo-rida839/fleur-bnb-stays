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
        const phone = formData.phone.replace(/\D/g, '');
        const formattedPhone = phone.startsWith('0') ? '254' + phone.slice(1) : phone;
        
        const mpesaResponse = await fetch(`https://modcom2.pythonanywhere.com/api/mpesa_payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: formattedPhone
          }),
        });

        // Use .text() first to handle non-JSON responses gracefully
        const mpesaResultText = await mpesaResponse.text();
        console.log('M-Pesa payment response raw:', mpesaResultText);
        
        try {
          const mpesaResult = JSON.parse(mpesaResultText);
          console.log('M-Pesa payment request sent:', mpesaResult);
        } catch (e) {
          console.error('M-Pesa API did not return valid JSON:', mpesaResultText);
        }
      } catch (mpesaError) {
        console.error('M-Pesa initiation error:', mpesaError);
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