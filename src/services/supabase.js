import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pqkmabkurmqegkmjxryy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxa21hYmt1cm1xZWdrbWp4cnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTM1MjMsImV4cCI6MjA0MjY2OTUyM30.9PdSY7UVX1nIUHEAX2SJLih_9eOesIG94iKgcGi2wsI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
