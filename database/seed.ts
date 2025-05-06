// drizzle/seed.ts

import { users } from "./schema";
import dummyUsers from "../dummyuser.json";
import { hash } from "bcryptjs"
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";


config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

async function seedUsers() {
    for (const user of dummyUsers) {
        const hashedPassword = await hash(user.password, 10);

        await db.insert(users).values({
            email: user.email,
            password: hashedPassword,
            role: user.role.toUpperCase() as "ADMIN" | "USER",
        });

        console.log(`Seeded user: ${user.email}`);
    }
}

seedUsers()
    .then(() => {
        console.log("✅ Seeding completed.");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ Seeding error:", err);
        process.exit(1);
    });

// import { kendaraan } from "./schema";
// import kendaraanDummy from "../kendaraandummy.json";

// import { config } from "dotenv";
// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";


// config({ path: ".env.local" });

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle({ client: sql });

// async function seedKendaraan() {
//     for (const item of kendaraanDummy) {
//       await db.insert(kendaraan).values({
//         merk: item.merk,
//         tipe: item.tipe,
//         gambar: item.gambar,
//         harga: item.harga,
//         deskripsi: item.deskripsi,
//       });
  
//       console.log(`Seeded kendaraan: ${item.merk}`);
//     }
//   }

// seedKendaraan()
//     .then(() => {
//         console.log("✅ Seeding completed.");
//         process.exit(0);
//     })
//     .catch((err) => {
//         console.error("❌ Seeding error:", err);
//         process.exit(1);
//     });
