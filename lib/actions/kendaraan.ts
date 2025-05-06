'use server'

import { db } from "@/database/drizzle"
import { kendaraan } from "@/database/schema"


export const createKendaraan = async (params: CreateKendaraan) => {
    try {
        const newBook = await db.insert(kendaraan).values({
            ...params,
            
        }).returning()

        return {
            success: true,
            data: JSON.parse(JSON.stringify(newBook[0]))
        }
    } catch (error) {
        console.log(error)

        return {
            success: false,
            message: 'an error occured'
        }
    }
}