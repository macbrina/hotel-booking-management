import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nusyqmcgazfdjdrrnfrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51c3lxbWNnYXpmZGpkcnJuZnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNTU1NDAsImV4cCI6MjAxODczMTU0MH0.ZXVjG-S-FCdNYziYD4KO9lFZIfJ07w4-uBFZBHL85WM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
