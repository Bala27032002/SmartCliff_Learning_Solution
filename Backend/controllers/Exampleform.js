
const mysql = require("mysql2");

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost", // Replace with your MySQL host
  user: "root", // Replace with your MySQL user
  password: "Bala@2703", // Replace with your MySQL password
  database: "crud", // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to handle MySQL query errors
const handleQueryError = (res, err) => {
  console.error("Error executing query:", err);
  return res.status(500).json({ message: "Internal server error" });
};

// Controller functions
exports.createHire = (req, res) => {
    const { full_name, user_name, email_id, phone_no, password, c_password} = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO exampleform (full_name, user_name, email_id, phone_no, password, c_password) VALUES (?,?,?,?,?,?)",
      [full_name, user_name, email_id, phone_no, password, c_password,],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, full_name, user_name, email_id, phone_no, password, c_password });
      }
    );
  });
};