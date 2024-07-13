# Backend Hotel_Harisenin

## Pendahuluan

Proyek ini merupakan backend untuk aplikasi manajemen hotel. Dibuat menggunakan Prisma ORM dengan database MySQL. Proyek ini juga memanfaatkan Cloudinary untuk manajemen gambar.

## Persyaratan

Pastikan Anda memiliki beberapa variabel lingkungan (environment variables) yang diperlukan dalam file `.env`:

- `PORT`: Port dimana server akan berjalan.
- `DATABASE_URL`: URL koneksi ke database MySQL.
- `JWT_SECRET`: Kunci rahasia untuk JSON Web Token.
- `CLOUDINARY_CLOUD_NAME`: Nama cloud di Cloudinary.
- `CLOUDINARY_API_KEY`: API key untuk Cloudinary.
- `CLOUDINARY_SECRET_KEY`: Secret key untuk Cloudinary.

## Langkah-langkah Instalasi

1. **Migrasi Database**

   Jalankan perintah berikut untuk menerapkan migrasi ke database:

   ```bash
   npx prisma migrate deploy
   ```

2. **Seeding Database**

   Setelah migrasi, seed database dengan data awal:

   ```bash
   npx prisma db seed
   ```

3. **Menjalankan Server**
   ```bash
   npx run dev
   ```

## Kontributor

Proyek ini dikembangkan oleh kelompok 8.
