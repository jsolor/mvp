const { Client } = require('pg');
const path = require('path');
// require('dotenv').config({ path: path.join(__dirname, '../.env') });

// const db = new Client({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mvp',
  password: 'pg',
  port: 5432,
});

db.connect();

module.exports = db;
