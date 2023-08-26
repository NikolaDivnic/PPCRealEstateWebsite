import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rjfwuyjacqyaxzjdfglh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZnd1eWphY3F5YXh6amRmZ2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4OTkwNjQsImV4cCI6MjAwMzQ3NTA2NH0.l5WS2-L2vPImEHtb3RMSTmRgM8mKr_RSkzF18VJdciw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);