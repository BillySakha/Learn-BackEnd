# REST API — Daftar Kedai Kopi

REST API sederhana untuk menampilkan data kedai kopi, ditulis sepenuhnya sendiri sebagai latihan Express.js.

## Fitur

- GET `/kedai` — menampilkan semua kedai kopi
- GET `/kedai?rating=4` — filter kedai dengan rating minimal tertentu
- GET `/kedai/:id` — menampilkan detail 1 kedai berdasarkan ID
- GET `/kedai/:kota/:id` — contoh route dengan 2 parameter URL

## Middleware

- Logging — mencatat method & URL setiap request
- Validasi ID — memastikan ID berupa angka valid dan tersedia di data

## Cara Menjalankan

\`\`\`bash
npm install
node server.js
\`\`\`
Server berjalan di `http://localhost:3001`

## Tech Stack

Node.js, Express.js
