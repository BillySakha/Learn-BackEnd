# 01 - Game (REST API Fundamental)

Proyek latihan mandiri ini berfokus pada implementasi fundamental **REST API** menggunakan Node.js dan Express.js. Proyek ini mendemonstrasikan cara penanganan routing statis, penggunaan custom middleware global, serta validasi parameter ID menggunakan middleware khusus.

## Fitur Utama & Struktur Kode

1. **Custom Global Logging Middleware (`mdLogging`)**:
   - Berfungsi untuk merekam setiap request yang masuk ke server secara otomatis.
   - Mencetak log berupa stempel waktu (timestamp ISO), HTTP Method (GET), dan URL tujuan ke dalam konsol server.

2. **Validation Middleware (`mdCekId`)**:
   - Melakukan validasi parameter ID yang dikirim oleh pengguna pada endpoint dinamis.
   - Memastikan input ID berupa angka valid (`isNaN` validation).
   - Memeriksa ketersediaan data di dalam memori (`array.find`). Jika data tidak ditemukan, server akan mengembalikan respon error yang sesuai secara aman sebelum mencapai handler utama.

3. **Data Persistence**:
   - Menggunakan mock-data statis berupa _array of objects_ bertema daftar game populer beserta informasi kapasitas memori (_size_) dan penilaian (_rating_).

## Daftar Endpoint (Routing)

| Method  | Endpoint          | Fungsi         | Detail Respon                                                             |
| :------ | :---------------- | :------------- | :------------------------------------------------------------------------ |
| **GET** | `/`               | Base Route     | Menampilkan teks sambutan server expres js                                |
| **GET** | `/daftarGame`     | Get All Games  | Mengembalikan seluruh list data game dalam format JSON                    |
| **GET** | `/daftarGame/:id` | Get Game By ID | Mengembalikan data game spesifik berdasarkan parameter ID yang divalidasi |

## Tech Stack yang Digunakan

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Tools Pengujian**: Postman / Browser DevTools

## Cara Menjalankan Proyek Secara Lokal

1. Pastikan Anda berada di dalam folder proyek ini:
   ```bash
   cd 01-Game
   ```
2. Jalankan perintah untuk menginisialisasi server lokal:
   ```bash
   node index.js
   ```
   _(atau sesuaikan dengan nama file utama Anda, misal `app.js`)_
3. Server akan berjalan secara otomatis di port 3000. Akses melalui browser atau Postman di alamat: `http://localhost:3000`
