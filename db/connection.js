// const express = require('express');
// const router = express.Router();
const mysql = require('mysql2');


// const path = require('path')
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
// module.exports = router;