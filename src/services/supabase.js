import { createClient } from "@supabase/supabase-js";
const supabaseUrl =
  "https://yrzwsdizsknvnbhzqiiz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyendzZGl6c2tudm5iaHpxaWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3MDUwMzAsImV4cCI6MjAxOTI4MTAzMH0.IhSrLMEdoB6OAkAMdJf2rDfYrrjueITzX-gdu3QvLN0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
