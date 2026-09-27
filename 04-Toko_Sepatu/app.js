const express = require('express');
const app = express();
const port = 3003;
const dataSepatu = [
  { id: 1, nama: 'sepatu1', merek: 'adidas', harga: 10000, stok: 10 },
  { id: 2, nama: 'sepatu2', merek: 'nike', harga: 20000, stok: 0 },
  { id: 3, nama: 'sepatu3', merek: 'puma', harga: 30000, stok: 14 },
  { id: 4, nama: 'sepatu4', merek: 'yezee', harga: 40000, stok: 16 },
  { id: 5, nama: 'sepatu5', merek: 'aero street', harga: 50000, stok: 18 },
  { id: 6, nama: 'sepatu6', merek: 'vans', harga: 60000, stok: 20 },
];

app.get('/', (req, res) => {
  res.json('halo dari express JS');
});

app.get('/sepatu', (req, res) => {
  const merek = req.query.merek;
  const tersedia = req.query.tersedia;

  const filtering = dataSepatu.filter((item) => {
    const filterMerk = merek === undefined || item.merek === merek;
    const filterTersedia = tersedia === undefined || (tersedia === 'true' && item.stok > 0);

    return filterMerk && filterTersedia;
  });

  res.json(filtering);
});

// mdValidasi ID
const validateID = (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'bad request',
      message: 'ID bukan angka',
    });
  }

  req.idValidate = id;
  next();
};

// mdCekSepatuAda
const sepatuAda = (req, res, next) => {
  const id = Number(req.params.id);
  const hasil = dataSepatu.find((item) => item.id === id);

  if (!hasil) {
    return res.status(404).json({
      error: 'bad request',
      message: 'data dengan ID tidak ditemukan',
    });
  }

  req.sepatuDitemukan = hasil;
  next();
};

// mdCekStokCukup
const cekStokCukup = (req, res, next) => {
  const stok = req.sepatuDitemukan.stok;

  if (stok <= 0) {
    return res.json({
      error: 'bad request',
      message: 'stok habis',
    });
  }

  req.stokLebihDariNol = stok;

  next();
};

app.get('/sepatu/:id', validateID, sepatuAda, (req, res) => {
  const hasil = req.sepatuDitemukan;

  res.json(hasil);
});

app.get('/sepatu/:id/beli', validateID, sepatuAda, cekStokCukup, (req, res) => {
  const namaSepatu = req.sepatuDitemukan.nama;
  res.json({
    message: 'pembelian berhasil untuk ' + namaSepatu,
  });
});

app.listen(port, () => {
  console.log('standby di localhost://3003');
});
