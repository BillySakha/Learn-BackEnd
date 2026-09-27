require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('BERHASIL connectke MongoDB!');
  } catch (error) {
    console.log('Gagal connect:', error);
  } finally {
    await client.close();
  }
}

main();
