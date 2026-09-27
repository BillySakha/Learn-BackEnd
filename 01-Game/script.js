const express = require('express');
const app = express();
const data = [
  { id: 1, name: 'Mobile legend', size: '8Gb', ratting: 5.0 },
  { id: 2, name: 'Pubg Mobile', size: '12Gb', ratting: 4.0 },
  { id: 3, name: 'Valorant', size: '20Gb', ratting: 4.9 },
  { id: 4, name: 'Free Fire', size: '4Gb', ratting: 3.0 },
  { id: 5, name: 'Call of Duty', size: '30Gb', ratting: 5.0 },
];

const mdLogging = (req, res, next) => {
  const waktu = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${waktu}] ${method} ${url}`);

  next();
};

app.use(mdLogging);

app.get('/', (req, res) => {
  res.json('halo ini server express js');
});

app.get('/daftarGame', (req, res) => {
  res.json(data);
});

// middlware parameter id
const mdCekId = (req, res, next) => {
  const id = Number(req.params.id);
  const hasil = data.find((item) => item.id === id);

  if (isNaN(id)) {
    return res.json('ID yang dimasukan bukan Angka!');
  }

  if (!hasil) {
    return res.json('Game dengan ID tersebut tidak ditemukan!');
  }

  req.gameDitemukan = hasil;
  next();
};

app.get('/daftarGame/:id', mdCekId, (req, res) => {
  res.json(req.gameDitemukan);
});

app.listen(3000, () => {
  console.log(`standby di localhost://3000`);
});
