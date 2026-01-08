import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const callbackData = body.Body?.stkCallback;
    
    if (!callbackData) {
      return NextResponse.json({ error: 'Invalid callback data' }, { status: 400 });
    }

    const checkoutRequestID = callbackData.CheckoutRequestID;
    const resultCode = callbackData.ResultCode;
    const resultDesc = callbackData.ResultDesc;

    // Find booking by payment request ID
    const { data: booking } = await supabase
      .from('bookings')
      .select('*')
      .eq('payment_request_id', checkoutRequestID)
      .single();

    if (!booking) {
      console.error('Booking not found for CheckoutRequestID:', checkoutRequestID);
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    if (resultCode === 0) {
      // Payment successful
      const metadata = callbackData.CallbackMetadata?.Item || [];
      
      const mpesaReceiptNumber = metadata.find((item: any) => item.Name === 'MpesaReceiptNumber')?.Value;
      const phoneNumber = metadata.find((item: any) => item.Name === 'PhoneNumber')?.Value;
      const amount = metadata.find((item: any) => item.Name === 'Amount')?.Value;
      const transactionDate = metadata.find((item: any) => item.Name === 'TransactionDate')?.Value;

      // Update booking with payment confirmation
      await supabase
        .from('bookings')
        .update({
          status: 'confirmed',
          payment_status: 'paid',
          mpesa_receipt_number: mpesaReceiptNumber,
          payment_phone: phoneNumber,
          payment_amount: amount,
          payment_date: transactionDate ? 
            new Date(
              parseInt(transactionDate.slice(0, 4)),
              parseInt(transactionDate.slice(4, 6)) - 1,
              parseInt(transactionDate.slice(6, 8)),
              parseInt(transactionDate.slice(8, 10)),
              parseInt(transactionDate.slice(10, 12)),
              parseInt(transactionDate.slice(12, 14))
            ).toISOString() : new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', booking.id);

      console.log('✅ Payment successful for booking:', booking.booking_reference);
      
      // TODO: Send confirmation email to customer
      // TODO: Send WhatsApp message with smart lock code

    } else {
      // Payment failed
      await supabase
        .from('bookings')
        .update({
          status: 'payment_failed',
          payment_status: 'failed',
          payment_error: resultDesc,
          updated_at: new Date().toISOString()
        })
        .eq('id', booking.id);

      console.error('❌ Payment failed for booking:', booking.booking_reference, resultDesc);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}