import { createClient } from '@supabase/supabase-js';

// Get from your Supabase dashboard: Settings → API
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);