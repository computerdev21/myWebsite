import { createClient } from '@supabase/supabase-js';

// If credentials are provided via environment variables, use them.
// Otherwise, we'll fall back to mock data (implemented in data.ts).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// The actual fetching functions will be implemented to use either Supabase (if configured)
// or the mock data store (for the MVP/demo).
