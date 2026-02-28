'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createReservation(formData: FormData) {
    const supabase = await createClient()

    // Extract data from formData
    const date = formData.get('date') as string
    const time = formData.get('time') as string
    const party_size = parseInt(formData.get('party_size') as string, 10)
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const special_requests = formData.get('special_requests') as string

    // Validate required fields
    if (!date || !time || !party_size || !name || !phone) {
        return { error: 'Please fill out all required fields.' }
    }

    // Insert into Supabase
    const { data, error } = await supabase
        .from('reservations')
        .insert([
            { date, time, party_size, name, phone, special_requests }
        ])

    if (error) {
        console.error('Supabase Insert Error:', error)
        return { error: 'Failed to create reservation. Please try again later.' }
    }

    // Revalidate if we were showing a list (for future admin panel)
    // revalidatePath('/admin/reservations')

    return { success: true }
}
