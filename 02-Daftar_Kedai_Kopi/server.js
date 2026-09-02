    const express = require('express');
    const app = express();
    const port = 3001;
    const data = [
    { id: 1, nama: 'kedai A', alamat: 'jalan A', hargaMulai: 4000, rating: 3.0 },
    { id: 2, nama: 'kedai B', alamat: 'jalan B', hargaMulai: 5000, rating: 3.5 },
    { id: 3, nama: 'kedai C', alamat: 'jalan C', hargaMulai: 6000, rating: 3.9 },
    { id: 4, nama: 'kedai D', alamat: 'jalan D', hargaMulai: 7000, rating: 4.0 },
    { id: 5, nama: 'kedai E', alamat: 'jalan E', hargaMulai: 8000, rating: 5.0 },
    ];
    // middleWare logging
    const mdLogging = (req, res, next) => {
    const method = req.method;
    const url = req.url;

    console.log(`METHOD: ${method}, URL: ${url}`);

    next();
    };

    app.use(mdLogging);

    // ROUTE
    app.get('/', (req, res) => {
    res.json('selamat datang dihalam utama server!');
    });

    app.get('/kedai', (req, res) => {
    res.json(data);
    });

    // middleWare validasi ID
    const validateID = (req, res, next) => {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
        error: 'Bad Request',
        message: 'ID pada parameter harus berupa angka yang valid',
        });
    }

    const hasil = data.find((item) => item.id === id);
    if (!hasil) {
        return res.status(404).json({
        error: 'Bad Request',
        message: 'ID tersebut tidak dapat ditemukan',
        });
    }

    req.kedaiDitemukan = hasil;

    next();
    };

    // route dengan validasi ID
    app.get('/kedai/:id', validateID, (req, res) => {
    const hasil = req.kedaiDitemukan;
    res.json({
        message: `akses berhasil untuk user dengan ID: ${req.kedaiDitemukan.id}`,
        data: hasil,
    });
    });

    // route dengan dua params
    app.get('/kedai/:kota/:id', (req, res) => {
    const dataKota = req.params.kota;
    const dataID = req.params.id;
    res.json({
        Kota: dataKota,
        ID: dataID,
    });
    });

    app.listen(port, () => {
    console.log('standby di localhost://3001');
    });
