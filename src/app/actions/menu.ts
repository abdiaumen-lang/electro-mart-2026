'use server'

import { createClient } from '@/utils/supabase/server'

export async function getMenuItems() {
    const supabase = await createClient()

    // Fetch all menu items from Supabase
    const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('created_at', { ascending: true }) // You might want to order by category or a specific sort order

    if (error) {
        console.error('Supabase Fetch Error (Menu):', error)
        return { error: 'Failed to fetch menu items.', data: null }
    }

    return { data, error: null }
}
