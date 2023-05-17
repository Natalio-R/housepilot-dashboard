import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vkiymnjenizcrnxngzjn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraXltbmplbml6Y3JueG5nempuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzNjA1NjAsImV4cCI6MTk5OTkzNjU2MH0.corP5V0hNFvNVJYzFJ8YCFQSqKqgIs-7goRicYxWjYc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
