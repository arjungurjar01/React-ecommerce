import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ;


// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Anon Key:', supabaseKey);

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Anon Key are required.');
  }

export const supabaseClient = createClient(supabaseUrl,supabaseKey);