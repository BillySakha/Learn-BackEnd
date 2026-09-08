# REST API — Toko Sepatu

REST API sederhana dengan simulasi alur pembelian, ditulis sepenuhnya sendiri sebagai latihan middleware berlapis di Express.js.

## Fitur

- GET `/sepatu` — menampilkan semua sepatu
- GET `/sepatu?merek=nike` — filter berdasarkan merek
- GET `/sepatu?tersedia=true` — filter khusus sepatu dengan stok tersedia
- GET `/sepatu/:id` — menampilkan detail 1 sepatu berdasarkan ID
- GET `/sepatu/:id/beli` — simulasi pembelian, dengan pengecekan stok

## Middleware (Berlapis)

- `validateID` — memastikan ID berupa angka valid
- `sepatuAda` — memastikan sepatu dengan ID tersebut ada di data
- `cekStokCukup` — memastikan stok tersedia sebelum pembelian diproses

Ketiga middleware ini dipakai berurutan pada route `/sepatu/:id/beli`, saling meneruskan data lewat objek `req`.

## Cara Menjalankan

\`\`\`bash
npm install
node server.js
\`\`\`
Server berjalan di `http://localhost:3003`

## Tech Stack

Node.js, Express.js
