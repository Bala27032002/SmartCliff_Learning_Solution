const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost", // Replace with your MySQL host
    user: "root", // Replace with your MySQL user
    password: "Bala@2703", // Replace with your MySQL password
    database: "crud", // Replace with your MySQL database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;
