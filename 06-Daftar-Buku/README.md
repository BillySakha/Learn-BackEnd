# 06 - Daftar Buku (Data Persistence & Collection Optimization)

Proyek latihan mandiri tingkat mahir ke-2 ini memantapkan pemahaman mengenai arsitektur integrasi **Express.js dan MongoDB** driver. Fokus utama proyek ini adalah menerapkan konsistensi operasi data persisten (CRUD) pada pengelolaan koleksi basis data katalog buku.

## Fitur Utama & Struktur Kode

1. **Robust Asynchronous CRUD Flow**:
   - Memanfaatkan paradigma `async/await` JavaScript untuk menangani operasi I/O database secara non-blocking dengan klaster MongoDB.
   - **Create & Read**: Menggunakan `insertOne()` untuk menyimpan entri buku baru dan `find().toArray()` untuk menarik seluruh pustaka data.
   - **Update & Delete**: Menggunakan kombinasi pemfilteran `ObjectId` dengan metode `updateOne()` (`$set` operator) serta `deleteOne()` untuk manajemen siklus data secara berkala.

2. **Secure Environment Decoupling**:
   - Memisahkan kredensial koneksi sensitif (`MONGO_URI`) ke dalam file konfigurasi `.env` eksternal menggunakan pustaka `dotenv`. Mencegah terjadinya kebocoran data (_data leak_) saat di-push ke repositori publik.

3. **Global Payload Parsing**:
   - Menerapkan pembaca objek bawaan `express.json()` di tingkat global server aplikasi agar dapat memproses muatan data (_JSON payload_) dari request body secara _real-time_.

## Daftar Endpoint (Routing API)

| Method     | Endpoint    | Fungsi                                      | Eksekusi Driver Database               |
| :--------- | :---------- | :------------------------------------------ | :------------------------------------- |
| **POST**   | `/buku`     | Menambahkan data katalog buku baru          | `insertOne()`                          |
| **GET**    | `/buku`     | Menampilkan seluruh koleksi buku            | `find().toArray()`                     |
| **PUT**    | `/buku/:id` | Memperbarui spesifikasi buku berdasarkan ID | `updateOne({ _id: new ObjectId(id) })` |
| **DELETE** | `/buku/:id` | Menghapus buku secara permanen              | `deleteOne({ _id: new ObjectId(id) })` |

## Tech Stack & Infrastruktur

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database Engine**: MongoDB (NoSQL)
- **Library Pendukung**: `mongodb`, `dotenv`
- **Default Port**: 3005

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke dalam direktori proyek ini:
   ```bash
   cd 06-Daftar-Buku
   ```
2. Pastikan file `.env` sudah terkonfigurasi di root folder dengan string koneksi Anda:
   ```text
   MONGO_URI=mongodb://localhost:27017/tokoBuku
   ```
3. Jalankan server lokal:
   ```bash
   node index.js
   ```
4. Gunakan Postman untuk melakukan pengujian operasi API di port `3005`.
