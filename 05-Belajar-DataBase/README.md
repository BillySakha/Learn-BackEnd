# 05 - Belajar DataBase (Express.js & MongoDB Integration)

Proyek latihan mandiri tingkat mahir ini mendemonstrasikan transisi dari penyimpanan data statis di memori lokal (_mock-data array_) menuju integrasi **Database Persisten** nyata menggunakan **MongoDB** dan runtime Node.js/Express.js.

## Fitur Utama & Logika Database

1. **Full Database CRUD Operations**:
   - **Create**: Memanfaatkan `insertOne()` untuk memasukkan data entitas sepatu baru dari body request client.
   - **Read**: Memanfaatkan `find().toArray()` untuk mengambil seluruh dokumen data dari klaster MongoDB secara asinkronus.
   - **Update**: Memanfaatkan `updateOne()` dikombinasikan dengan operator `$set` untuk mengubah detail data spesifik.
   - **Delete**: Memanfaatkan `deleteOne()` untuk menghapus dokumen data secara permanen dari server database.

2. **Dynamic Request Body Parsing**:
   - Mengaktifkan `app.use(express.json())` sebagai built-in middleware Express untuk menangani parsing data berformat JSON dari incoming request body secara aman.

3. **Secure Configuration (Environment Variables)**:
   - Menggunakan modul `dotenv` untuk memisahkan kredensial sensitif string koneksi database (`MONGO_URI`) dari source code utama demi mematuhi kaidah keamanan sistem industri.

4. **Object Data Handling**:
   - Menggunakan `ObjectId` dari MongoDB driver untuk melakukan konversi parameter ID berbasis string dari URL menjadi objek pengenal unik BSON yang valid (`new ObjectId(id)`).

## Daftar Endpoint (Routing API)

| Method     | Endpoint      | Fungsi                                              | Operasi Database     |
| :--------- | :------------ | :-------------------------------------------------- | :------------------- |
| **POST**   | `/sepatu`     | Menambahkan data sepatu baru ke database            | `insertOne()`        |
| **GET**    | `/sepatu`     | Mengambil seluruh koleksi data sepatu               | `find().toArray()`   |
| **PUT**    | `/sepatu/:id` | Mengubah spesifikasi data sepatu berdasarkan ID     | `updateOne({ _id })` |
| **DELETE** | `/sepatu/:id` | Menghapus data sepatu secara permanen dari database | `deleteOne({ _id })` |

## Tech Stack & Infrastruktur

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database Engine**: MongoDB (NoSQL)
- **Library Pendukung**: `mongodb`, `dotenv`
- **Default Port**: 3004

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke dalam direktori proyek ini:
   ```bash
   cd 05-Belajar-DataBase
   ```
2. Buat file `.env` di root folder proyek ini dan definisikan URI MongoDB Anda:
   ```text
   MONGO_URI=mongodb://localhost:27017/tokoSepatu
   ```
3. Jalankan server lokal:
   ```bash
   node index.js
   ```
4. Gunakan Postman untuk melakukan pengujian operasi CRUD di port `3004`.
