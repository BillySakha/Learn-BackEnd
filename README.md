# Learn-BackEnd

Selamat datang di repositori dokumentasi belajar mandiri saya di bidang **Backend Development** dan arsitektur _server-side_. Repositori ini berisi kumpulan modul latihan yang saya buat dari dasar sampai integrasi ke _database_ asli.

## 🚀 Peta Perjalanan Belajar

Semua folder latihan di bawah ini dibuat menggunakan **Node.js** dan framework **Express.js**, serta dites menggunakan **Postman** untuk memastikan respon datanya sudah benar.

| Folder                                             | Judul / Ranah Studi          | Cakupan Fokus Teknis                                                                                                                                 |
| :------------------------------------------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[01-Game](./01-Game)**                           | REST API Fundamental         | Penanganan routing dasar, bikin custom middleware global untuk logging, dan validasi ID game.                                                        |
| **[02-Daftar_Kedai_Kopi](./02-Daftar_Kedai_Kopi)** | Advanced Routing & Querying  | Implementasi filter data menggunakan Query Parameter (`req.query`) dan penggunaan HTTP Status Code (`400` / `404`).                                  |
| **[03-Daftar_Film](./03-Daftar_Film)**             | Multi-Query Optimization     | Penanganan logika filter yang lebih kompleks dengan menggabungkan dua parameter (genre dan tahun) sekaligus.                                         |
| **[04-Toko_Sepatu](./04-Toko_Sepatu)**             | 3-Layered Middleware Flow    | Pembuatan 3 lapisan middleware proteksi yang berjalan berurutan (Cek format ID -> Cek data ada -> Cek kecukupan stok) untuk simulasi alur pembelian. |
| **[05-Belajar-DataBase](./05-Belajar-DataBase)**   | MongoDB Integration (Part 1) | Menghubungkan server Express ke database **MongoDB** asli memakai Native Driver dan mengamankan string koneksi di file `.env`.                       |
| **[06-Daftar-Buku](./06-Daftar-Buku)**             | MongoDB Integration (Part 2) | Latihan full CRUD (Create, Read, Update, Delete) ke MongoDB menggunakan fungsi asinkronus (`async/await`) dan parsing data JSON.                     |

---

## 🛠️ Perkakas

- **Bahasa Pemrograman**: JavaScript (Node.js)
- **Framework & Library**: Express.js, Dotenv, MongoDB Driver
- **Tools**: Git, GitHub, Postman

---

## 📌 Poin Utama yang Dipelajari

1. **Request Lifecycle & Middleware**: Paham alur masuk-keluar data di Express, serta cara memanipulasinya lewat _custom middleware_ baik secara global maupun di route spesifik.
2. **RESTful API Standar**: Menerapkan respon API yang bersih dengan format JSON dan penempatan **HTTP Status Codes** yang sesuai dengan kondisi logika di server.
3. **Koneksi Database**: Bisa menghubungkan server Express ke database NoSQL untuk mengelola data secara permanen (CRUD).
4. **Manajemen Variabel Lingkungan**: Paham cara mengamankan data rahasia seperti _connection string_ database menggunakan file `.env`.

---

## 💻 Cara Menjalankan di Lokal

1. Clone repositori ini:

   ```bash
   git clone https://github.com/BillySakha/Learn-BackEnd

   ```

2. Masuk ke folder utama:
   ```bash
   cd Learn-BackEnd
   ```
3. Masuk ke salah satu sub-folder latihan, misalnya:
   ```bash
   cd 04-Toko_Sepatu
   ```
4. Install package yang dibutuhkan:
   ```bash
   npm install
   ```
5. Jalankan server aplikasinya:
   ```bash
   node app.js
   ```
