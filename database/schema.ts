import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["ADMIN", "USER"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 50 }).notNull(),
  password: text("password").notNull(),
  role: ROLE_ENUM("role").default("USER"),
});

export const kendaraan = pgTable("kendaraan", {
  id: uuid("id").primaryKey().defaultRandom(),
  merk: varchar("merk", { length: 50 }).notNull(),
  tipe: varchar("tipe", { length: 50 }).notNull(),
  gambar: text("gambar").notNull(),
  harga: integer("harga").notNull(),
  deskripsi: text("deskripsi").notNull(),
});
