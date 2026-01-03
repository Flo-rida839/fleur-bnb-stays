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
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('🔍 Testing Supabase connection...');
  
  // Test 1: Get units
  const { data: units, error } = await supabase
    .from('units')
    .select('*');
  
  if (error) {
    console.error('❌ Error:', error);
  } else {
    console.log(`✅ Found ${units.length} units:`);
    units.forEach(u => console.log(`   - ${u.title} (${u.type}) - KES ${u.price}`));
  }
}

test();
