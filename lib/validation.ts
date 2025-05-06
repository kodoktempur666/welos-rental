import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const createKendaraanSchema = z.object({
    merk: z.string().min(1),
    tipe: z.string().min(1),
    gambar: z.string().url(),
    harga: z.coerce.number().min(1000),
    deskripsi: z.string().min(1),
})
