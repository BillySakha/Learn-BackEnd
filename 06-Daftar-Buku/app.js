require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  console.log('berhasil connect');

  const db = client.db('tokoBuku');
  const bukuCollection = db.collection('buku');

  app.post('/buku', async (req, res) => {
    const bukuBaru = req.body;
    const hasil = await bukuCollection.insertOne(bukuBaru);
    res.json(hasil);
  });

  app.get('/buku', async (req, res) => {
    const semuaBuku = await bukuCollection.find().toArray();
    res.json(semuaBuku);
  });

  app.put('/buku/:id', async (req, res) => {
    const id = req.params.id;
    const dataBaru = req.body;

    const hasil = await bukuCollection.updateOne({ _id: new ObjectId(id) }, { $set: dataBaru });

    res.json(hasil);
  });

  app.delete('/buku/:id', async (req, res) => {
    const id = req.params.id;

    const hasil = await bukuCollection.deleteOne({ _id: new ObjectId(id) });

    res.json(hasil);
  });

  app.listen(3005, () => {
    console.log('standbay di localhost:3005');
  });
}

main();
