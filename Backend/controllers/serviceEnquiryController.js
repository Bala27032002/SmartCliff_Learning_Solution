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

const createServiceEnquiry = (req, res) => {
  const { name, email, mobile, service, message } = req.body;
  const insertQuery =
    "INSERT INTO serviceenquiry (name, email, mobile, service, message) VALUES (?, ?, ?, ?, ?)";

  pool.query(
    insertQuery,
    [name, email, mobile, service, message],
    (err, result) => {
      if (err) {
        console.error("Error creating course enquiry:", err);
        res.status(400).json({ error: err.message });
      } else {
        const enquiryId = result.insertId;
        res.status(200).json({ id: enquiryId, name, email, mobile, service, message });
      }
    }
  );
};

const getServiceEnquiries = (req, res) => {
  const selectQuery = "SELECT * FROM serviceenquiry";

  pool.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error getting Service enquiries:", err);
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

const deleteServiceEnquiry = (req, res) => {
  const enquiryId = req.params.id;

  const deleteQuery = "DELETE FROM serviceenquiry WHERE id = ?";

  pool.query(deleteQuery, [enquiryId], (err, result) => {
    if (err) {
      console.error("Error deleting course enquiry:", err);
      res.status(400).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Service enquiry not found." });
    } else {
      res.status(200).json({ message: "Service enquiry deleted successfully." });
    }
  });
};

module.exports = {
  createServiceEnquiry,
  getServiceEnquiries,
  deleteServiceEnquiry,
};