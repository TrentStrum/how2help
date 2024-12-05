export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          username: string
          avatar_url: string | null
          email: string
          phone: string | null
          street_address: string | null
          alt_address: string | null
          city: string | null
          state: string | null
          country: string | null
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          username: string
          avatar_url?: string | null
          email: string
          phone?: string | null
          street_address?: string | null
          alt_address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          username?: string
          avatar_url?: string | null
          email?: string
          phone?: string | null
          street_address?: string | null
          alt_address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      causes: {
        Row: {
          id: string
          name: string
          description: string | null
          long_description: string | null
          banner_image_url: string | null
          avatar_image_url: string | null
          mission: string | null
          organization_count: number
          event_count: number
          countries: string[] | null
          growth_rate: string | null
          focus_areas: string[] | null
          status: 'active' | 'inactive' | 'closed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          long_description?: string | null
          banner_image_url?: string | null
          avatar_image_url?: string | null
          mission?: string | null
          organization_count?: number
          event_count?: number
          countries?: string[] | null
          growth_rate?: string | null
          focus_areas?: string[] | null
          status?: 'active' | 'inactive' | 'closed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          long_description?: string | null
          banner_image_url?: string | null
          avatar_image_url?: string | null
          mission?: string | null
          organization_count?: number
          event_count?: number
          countries?: string[] | null
          growth_rate?: string | null
          focus_areas?: string[] | null
          status?: 'active' | 'inactive' | 'closed'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'user' | 'admin'
      entity_status: 'active' | 'inactive' | 'closed'
      entity_type: 'Organization' | 'Cause' | 'Event' | 'Activity' | 'User'
    }
  }
}