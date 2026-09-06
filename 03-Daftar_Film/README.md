# REST API — Daftar Film

REST API sederhana untuk menampilkan data film dengan fitur filter, ditulis sepenuhnya sendiri sebagai latihan Express.js.

## Fitur

- GET `/film` — menampilkan semua film
- GET `/film?genre=Action` — filter film berdasarkan genre
- GET `/film?tahun=2003` — filter film berdasarkan tahun
- GET `/film?genre=Horror&tahun=2001` — filter kombinasi genre + tahun sekaligus
- GET `/film/:id` — menampilkan detail 1 film berdasarkan ID

## Middleware

- Validasi ID — memastikan ID berupa angka valid dan tersedia di data

## Cara Menjalankan

\`\`\`bash
npm install
node server.js
\`\`\`
Server berjalan di `http://localhost:3002`

## Tech Stack

Node.js, Express.js
