const express = require('express');
const app = express();
const port = 3002;
const dataFilm = [
  { id: 1, nama: 'The Conjuring', genre: 'Horror', tahun: 2001, rating: 4.0 },
  { id: 2, nama: 'Solo leveling', genre: 'Action', tahun: 2002, rating: 5.0 },
  { id: 3, nama: 'Jumanji', genre: 'Adventure', tahun: 2003, rating: 4.9 },
  { id: 4, nama: 'Interstellar', genre: 'Galaxy', tahun: 2004, rating: 3.0 },
  { id: 5, nama: 'The Avengers', genre: 'Magic', tahun: 2005, rating: 4.7 },
];

// mdLogging
const mdLogging = (req, res, next) => {
  const method = req.method;
  const url = req.url;

  console.log(`METHOD: ${method} URL: ${url}`);
  next();
};

app.use(mdLogging);

app.get('/', (req, res) => {
  res.json('Halo dari server express ke 3');
});

app.get('/film', (req, res) => {
  const genre = req.query.genre;
  const tahun = Number(req.query.tahun);

  const hasilFilter = dataFilm.filter((item) => {
    const cocokGenre = genre === undefined || item.genre === genre;
    const cocokTahun = isNaN(tahun) || item.tahun === tahun;

    return cocokGenre && cocokTahun;
  });

  res.json(hasilFilter);
});

// middleware validasi ID
const validateID = (req, res, next) => {
  const id = Number(req.params.id);
  const hasil = dataFilm.find((item) => item.id === id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'ini error',
      message: 'bukan angka',
    });
  }

  if (!hasil) {
    return res.status(400).json({
      error: 'ini error',
      message: 'data tidak ditemukan',
    });
  }

  req.filmDitemukan = hasil;
  req.idBaru = id;

  next();
};

app.get('/film/:id', validateID, (req, res) => {
  const id = req.idBaru;
  const hasil = req.filmDitemukan;
  res.json(hasil);
});

app.listen(port, () => {
  console.log('Standby di localhost:3002');
});
