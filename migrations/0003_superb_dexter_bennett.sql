CREATE TABLE "kendaraan" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"merk" varchar(50) NOT NULL,
	"tipe" varchar(50) NOT NULL,
	"gambar" text NOT NULL,
	"harga" integer NOT NULL,
	"deskripsi" text NOT NULL
);
