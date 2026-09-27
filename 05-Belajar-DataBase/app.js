require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  console.log('MongoDB connected!');

  const db = client.db('tokoSepatu');
  const sepatuCollection = db.collection('sepatu');

  app.post('/sepatu', async (req, res) => {
    const sepatuBaru = req.body;
    const hasil = await sepatuCollection.insertOne(sepatuBaru);
    res.json(hasil);
  });

  app.get('/sepatu', async (req, res) => {
    const semuaSepatu = await sepatuCollection.find().toArray();
    res.json(semuaSepatu);
  });

  app.put('/sepatu/:id', async (req, res) => {
    const id = req.params.id;
    const dataBaru = req.body;

    const hasil = await sepatuCollection.updateOne({ _id: new ObjectId(id) }, { $set: dataBaru });

    res.json(hasil);
  });

  app.delete('/sepatu/:id', async (req, res) => {
    const id = req.params.id;

    const hasil = await sepatuCollection.deleteOne({ _id: new ObjectId(id) });

    res.json(hasil);
  });

  app.listen(3004, () => {
    console.log('stanby di localhost:3004');
  });
}

main();
