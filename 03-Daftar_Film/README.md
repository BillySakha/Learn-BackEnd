# 03 - Daftar Film (Multi-Query Filtering & Parameter Validation)

Proyek latihan mandiri tingkat ke-3 ini berfokus pada penanganan logika penyaringan data tingkat lanjut menggunakan **Multi-Query Parameters** secara opsional serta penguatan validasi parameter ID di Express.js.

## Fitur Utama & Struktur Kode

1. **Multi-Query Parameter Filtering**:
   - Menangani dua parameter query sekaligus via `req.query.genre` dan `req.query.tahun`.
   - Menggunakan logika pengondisian yang fleksibel: penyaringan hanya akan aktif jika parameter dikirimkan oleh _client_. Jika tidak (`undefined` atau `isNaN`), sistem secara cerdas akan melewatkan penyaringan tersebut (`genre === undefined || item.genre === genre`).
   - Menggabungkan kedua hasil filter menggunakan operator logika `AND` (`return cocokGenre && cocokTahun`).

2. **Validation Middleware (`validateID`)**:
   - Memeriksa keabsahan tipe data parameter ID (`isNaN` validation).
   - Memastikan keberadaan data di dalam memori menggunakan `array.find`.
   - Mengembalikan HTTP Status Code `400 Bad Request` disertai pesan error berformat JSON yang terstruktur jika terjadi kegagalan validasi.
   - Melakukan _data sharing_ lintas middleware dengan menitipkan properti `req.filmDitemukan` dan `req.idBaru`.

## Daftar Endpoint (Routing)

| Method  | Endpoint    | Tipe        | Fungsi                                                                                        | Contoh URL                                           |
| :------ | :---------- | :---------- | :-------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| **GET** | `/`         | Static      | Base Route / Koneksi Server                                                                   | `http://localhost:3002/`                             |
| **GET** | `/film`     | Multi-Query | Mengambil semua data film atau memfilternya berdasarkan genre, tahun, atau keduanya sekaligus | `http://localhost:3002/film?genre=Horror&tahun=2001` |
| **GET** | `/film/:id` | Param       | Mengambil data film spesifik berdasarkan ID setelah lolos validasi                            | `http://localhost:3002/film/2`                       |

## Tech Stack & Port

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Default Port**: 3002
- **Tools Pengujian**: Postman / Browser DevTools

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke dalam direktori proyek ini:
   ```bash
   cd 03-Daftar_Film
   ```
2. Jalankan server dengan Node.js:
   ```bash
   node index.js
   ```
3. Uji endpoint menggunakan Postman atau browser pada port `3002`.
