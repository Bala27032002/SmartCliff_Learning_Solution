const mysql = require("mysql2");

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost", // Replace with your MySQL host
  user: "root", // Replace with your MySQL user
  password: "Bala@2703", // Replace with your MySQL password
  database: "smartcliff", // Replace with your MySQL database name
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
  const { hire_name, hire_email,hire_ph,hire_design,hire_company,hiring_enquiry } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO client_hiring_entrollment (hire_name, hire_email,hire_ph,hire_design,hire_company,hiring_enquiry) VALUES (?,?,?,?,?,?)",
      [hire_name, hire_email,hire_ph,hire_design,hire_company,hiring_enquiry,],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, hire_name, hire_email,hire_ph,hire_design,hire_company,hiring_enquiry });
      }
    );
  });
};

exports.getHire = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM client_hiring_entrollment", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSingleHire = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM client_hiring_entrollment WHERE hire_id = ?",
      [taskId],
      (err, results) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (results.length === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json(results[0]);
      }
    );
  });
};

// exports.updateEnquiry = async (req, res) => {
//   const taskId = req.params.id;
//   const { enq_name, enq_email,enq_mobile,area_interest,enq_message } = req.body;

//   pool.getConnection((err, connection) => {
//     if (err) return handleQueryError(res, err);

//     connection.query(
//       "UPDATE enquiry SET enq_name = ?, enq_email = ? ,enq_mobile=?,area_interest=?,enq_message=? WHERE enq_id = ?",
//       [enq_name, enq_email,enq_mobile,area_interest,enq_message, taskId],
//       (err, result) => {
//         connection.release();
//         if (err) return handleQueryError(res, err);

//         if (result.affectedRows === 0) {
//           return res.status(404).json({ message: "Task not found" });
//         }

//         return res.json({ id: taskId,enq_name, enq_email,enq_mobile,area_interest,enq_message});
//       }
//     );
//   });
// };

exports.deleteHire = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM client_hiring_entrollment WHERE hire_id = ?",
      [taskId],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json({ message: "Task deleted successfully" });
      }
    );
  });
};
