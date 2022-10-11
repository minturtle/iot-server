var mysql = require("mysql2");

const host = process.env.DB_HOST || 'mysql-db';
const port = process.env.DB_PORT || 3306;

const connection = mysql.createPool({
    host: host,
    user: 'root',
    password : '1111',
    database: 'iot',
    port : port
  });
module.exports = connection;