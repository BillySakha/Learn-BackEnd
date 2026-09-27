# 02 - Daftar Kedai Kopi (Advanced Routing & Query Filtering)

Proyek latihan mandiri tingkat lanjut ini mendemonstrasikan implementasi fitur penyaringan (_filtering_) data menggunakan **Query Parameters**, penanganan **Multiple URL Parameters**, serta standarisasi respon error menggunakan **HTTP Status Codes** (`400` dan `404`) di Express.js.

## Fitur Utama & Struktur Kode

1. **Query Parameter Filtering**:
   - Memanfaatkan `req.query.rating` untuk menyaring daftar kedai kopi secara dinamis berdasarkan batas rating minimal yang dimasukkan oleh pengguna di URL (contoh: `/kedai?rating=4.0`).

2. **Robust Validation Middleware (`validateID`)**:
   - Melakukan pengecekan ganda (_double-validation_) pada parameter ID: memastikan input berupa angka valid, bernilai lebih dari 0 (`id <= 0`), dan datanya eksis di memori.
   - Mengembalikan respon terstruktur dengan **HTTP Status Code** yang sesuai (`400 Bad Request` untuk input cacat, dan `404 Not Found` jika data tidak ada) sebelum request diteruskan.
   - Menggunakan teknik _data sharing_ lintas middleware dengan menitipkan objek hasil pencarian ke dalam properti `req.kedaiDitemukan`.

3. **Multi-Parameter Routing**:
   - Menangani endpoint dengan dua parameter dinamis sekaligus (`/kedai/:kota/:id`) untuk mensimulasikan alur pencarian data berbasis wilayah/lokasi geografis.

## Daftar Endpoint (Routing)

| Method  | Endpoint           | Tipe        | Fungsi                                                                | Contoh URL                               |
| :------ | :----------------- | :---------- | :-------------------------------------------------------------------- | :--------------------------------------- |
| **GET** | `/`                | Static      | Base Route / Welcome message server                                   | `http://localhost:3001/`                 |
| **GET** | `/kedai`           | Query       | Mengambil semua data kedai atau memfilternya berdasarkan rating       | `http://localhost:3001/kedai?rating=3.9` |
| **GET** | `/kedai/:id`       | Param       | Mengambil data kedai spesifik berdasarkan ID (Terproteksi Middleware) | `http://localhost:3001/kedai/3`          |
| **GET** | `/kedai/:kota/:id` | Multi-Param | Simulasi pencarian data berdasarkan parameter Kota dan ID             | `http://localhost:3001/kedai/bandung/5`  |

## Tech Stack & Port

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Default Port**: 3001
- **Tools Pengujian**: Postman / Browser DevTools

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke dalam direktori proyek ini:
   ```bash
   cd 02-Daftar_Kedai_Kopi
   ```
2. Jalankan server menggunakan Node.js:
   ```bash
   node index.js
   ```
3. Akses endpoint melalui Postman atau browser pada port `3001`.
