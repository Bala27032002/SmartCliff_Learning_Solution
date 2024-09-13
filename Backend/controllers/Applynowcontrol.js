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


const handleQueryError = (res, err) => {
  console.error("Error executing query:", err);
  return res.status(500).json({ message: "Internal server error" });
};


exports.createapply = (req, res) => {
  const { a_name,a_email,a_mobnum,a_degree,a_specialization,a_yearofpassing,a_marks} = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO course_entrollment( a_name,a_email,a_mobnum,a_degree,a_specialization,a_yearofpassing,a_marks) VALUES (?,?,?,?,?,?,?)",
      [a_name,a_email,a_mobnum,a_degree,a_specialization,a_yearofpassing,a_marks],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, a_name,a_email,a_mobnum,a_degree,a_specialization,a_yearofpassing,a_marks });
      }
    );
  });
};

exports.getapply = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM course_entrollment", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSingleapply = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM course_entrollment WHERE a_id = ?",
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



exports.deleteapply = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM course_entrollment WHERE a_id = ?",
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

