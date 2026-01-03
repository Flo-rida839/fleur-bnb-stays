import { createClient } from '@supabase/supabase-js';

// Get from your Supabase dashboard: Settings → API
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('🔧 Supabase URL exists:', !!supabaseUrl);
console.log('🔧 Supabase Key exists:', !!supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);