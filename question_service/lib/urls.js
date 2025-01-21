require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
const db = process.env.DB_NAME;

module.exports = {mongoUri,db};