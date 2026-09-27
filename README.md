# Learn-BackEnd (Backend Development Journey)

Selamat datang di repositori dokumentasi pembelajaran mandiri saya di bidang **Backend Development** dan arsitektur _server-side_. Repositori ini merangkum evolusi kompetensi teknis saya, mulai dari pemahaman dasar routing, manipulasi logika middleware, hingga integrasi _database_ persisten (NoSQL).

## 🚀 Peta Perjalanan Belajar (Learning Roadmap)

Seluruh proyek latihan di bawah ini dikembangkan menggunakan **Node.js** dan framework **Express.js**, serta diuji secara intensif memanfaatkan **Postman** untuk memastikan akurasi dan performa respon data.

| Folder                                             | Judul / Ranah Studi          | Cakupan Fokus Teknis                                                                                       | Status Kelayakan |
| :------------------------------------------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------- | :--------------- |
| **[01-Game](./01-Game)**                           | REST API Fundamental         | Penanganan routing statis, custom global logging middleware, dan basic parameters validation.              | ✔ Completed      |
| **[02-Daftar_Kedai_Kopi](./02-Daftar_Kedai_Kopi)** | Advanced Routing & Querying  | Implementasi dinamis Query Parameter filtering (`req.query`) dan Multiple URL Parameters.                  | ✔ Completed      |
| **[03-Daftar_Film](./03-Daftar_Film)**             | Multi-Query Optimization     | Penanganan logika penyaringan data kompleks yang menggabungkan operator Boolean (`AND`).                   | ✔ Completed      |
| **[04-Toko_Sepatu](./04-Toko_Sepatu)**             | 3-Layered Middleware Flow    | Arsitektur _Separation of Concerns_ menggunakan 3 lapisan middleware proteksi bertingkat secara berurutan. | ⭐ Masterpiece   |
| **[05-Belajar-DataBase](./05-Belajar-DataBase)**   | MongoDB Integration (Part 1) | Transisi data persisten menggunakan MongoDB Native Driver dan pengamanan kredensial via `.env`.            | 🔥 Advanced      |
| **[06-Daftar-Buku](./06-Daftar-Buku)**             | MongoDB Integration (Part 2) | Replikasi arsitektur database, operasi asinkronus (`async/await`), dan penanganan koleksi data dinamis.    | 🔥 Advanced      |

---

## 🛠️ Keahlian Teknis & Perkakas (Tech Stack)

- **Bahasa Pemrograman**: JavaScript (ES6+), SQL
- **Framework & Library Server**: Node.js, Express.js
- **Database Engine**: MongoDB (NoSQL)
- **Ekosistem & Alat Kerja**: Git, GitHub, Postman, npm, Dotenv

---

## 📌 Kompetensi Utama yang Dipelajari

1. **Request Lifecycle & Middleware**: Memahami alur kerja _request_ dan _response_ di Express, serta mahir memanipulasinya menggunakan _custom middleware_ global maupun spesifik di tingkat _route_.
2. **RESTful API Best Practices**: Menerapkan standarisasi respon API yang baik menggunakan format JSON dan penggunaan **HTTP Status Codes** yang tepat (`200`, `201`, `400`, `404`) sesuai dengan kondisi logika server.
3. **Database Connectivity**: Mampu menjembatani server aplikasi dengan _database_ untuk melakukan operasi pembuatan, pembacaan, pembaruan, dan penghapusan data secara persisten (_Persistent CRUD Operations_).
4. **Secure Configuration**: Memahami pentingnya pemisahan variabel rahasia string koneksi ke dalam file konfigurasi lingkungan eksternal (`.env`).

---

## 💻 Cara Menjalankan Repositori Secara Lokal

1. Lakukan klon pada repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com
   ```
2. Masuk ke salah satu sub-folder proyek yang ingin Anda uji, misalnya:
   ```bash
   cd 04-Toko_Sepatu
   ```
3. Lakukan instalasi dependensi (pastikan Anda sudah menginstall Node.js):
   ```bash
   npm install
   ```
4. Jalankan server aplikasi:
   ```bash
   node index.js
   ```
