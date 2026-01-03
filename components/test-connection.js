// test-connection.js
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔍 Checking environment variables...');
console.log('URL exists:', !!supabaseUrl);
console.log('Key exists:', !!supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  console.log('Make sure .env.local contains:');
  console.log('NEXT_PUBLIC_SUPABASE_URL=your-url');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('🔍 Testing Supabase connection...');
  
  try {
    // Test 1: Get units
    const { data: units, error } = await supabase
      .from('units')
      .select('*');
    
    if (error) {
      console.error('❌ Supabase error:', error);
    } else {
      console.log(`✅ Found ${units.length} units:`);
      units.forEach(u => console.log(`   - ${u.title} (${u.type}) - KES ${u.price}`));
    }
    
    // Test 2: Try to insert a test booking
    console.log('\n🔍 Testing booking insertion...');
    const testBooking = {
      booking_reference: `TEST-${Date.now()}`,
      check_in: '2024-12-15',
      check_out: '2024-12-18',
      guests: 2,
      full_name: 'Test User',
      email: 'test@example.com',
      phone: '712345678',
      payment_method: 'mpesa',
      total_price: 25000.00,
      status: 'test',
      smart_lock_code: '123456'
    };
    
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert([testBooking])
      .select();
      
    if (bookingError) {
      console.error('❌ Booking insertion error:', bookingError);
    } else {
      console.log('✅ Test booking created:', booking[0].booking_reference);
    }
    
  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
}

test();