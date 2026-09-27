# 04 - Toko Sepatu (3-Layered Middleware & Transaction Workflow Simulation)

Proyek latihan mandiri tingkat akhir ini mendemonstrasikan implementasi arsitektur **3-Layered Middleware (Middleware Berlapis)** untuk mensimulasikan alur validasi transaksi pembelian e-commerce secara berurutan dan aman di Express.js.

## Fitur Utama & Arsitektur 3-Layered Middleware

Proyek ini menerapkan konsep _Separation of Concerns_ (Pemisahan Tanggung Jawab) yang ketat melalui 3 tahapan middleware proteksi sebelum request diizinkan mengeksekusi proses pembelian:

1. **Layer 1: `validateID` (Validasi Sintaks)**:
   - Bertanggung jawab memeriksa apakah parameter ID yang dikirim oleh pengguna merupakan format angka yang valid. Jika tidak, request langsung dihentikan dengan status `400 Bad Request`.

2. **Layer 2: `sepatuAda` (Validasi Eksistensi Data)**:
   - Berjalan setelah Layer 1 sukses. Berfungsi mencari data sepatu di memori berdasarkan ID. Jika data tidak ditemukan, request dihentikan dengan status `404 Not Found`. Jika ada, data objek disimpan ke dalam `req.sepatuDitemukan`.

3. **Layer 3: `cekStokCukup` (Validasi Logika Bisnis)**:
   - Lapisan terakhir yang bertugas memeriksa ketersediaan stok sepatu (`stok <= 0`). Menjamin transaksi gagal secara anggun jika produk yang dicari sedang kehabisan stok.

## Daftar Endpoint (Routing)

| Method  | Endpoint           | Tipe     | Lapisan Proteksi                              | Fungsi                                                                                   |
| :------ | :----------------- | :------- | :-------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **GET** | `/`                | Static   | _None_                                        | Base Route server                                                                        |
| **GET** | `/sepatu`          | Query    | _None_                                        | Mengambil data sepatu dengan opsi filter Merek dan Status Ketersediaan (`tersedia=true`) |
| **GET** | `/sepatu/:id`      | Param    | `validateID` ➡️ `sepatuAda`                   | Mengambil detail info sepatu spesifik                                                    |
| **GET** | `/sepatu/:id/beli` | Workflow | `validateID` ➡️ `sepatuAda` ➡️ `cekStokCukup` | Mensimulasikan alur transaksi pembelian produk                                           |

## Tech Stack & Port

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Default Port**: 3003
- **Tools Pengujian**: Postman

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke dalam direktori proyek ini:
   ```bash
   cd 04-Toko_Sepatu
   ```
2. Jalankan server dengan Node.js:
   ```bash
   node index.js
   ```
3. Akses endpoint simulasi pembelian menggunakan Postman di port `3003`.
