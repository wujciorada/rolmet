export type Database = {
  public: {
    Tables: {
      contacts: {
Row: {
  id: string
  name: string | null
  email: string | null
  phone: string | null
  message: string | null
  created_at: string | null
}
Insert: {
  name?: string | null
  email?: string | null
  phone?: string | null
  message?: string | null
}
Update: {
  name?: string | null
  email?: string | null
  phone?: string | null
  message?: string | null
}
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}
console.log(SUPABASE_URL)
console.log(SUPABASE_ANON_KEY)
