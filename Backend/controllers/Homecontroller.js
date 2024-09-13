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
exports.createhome = (req, res) => {
  const { home_text, home_banner } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "INSERT INTO homedata (home_text, home_banner) VALUES (?,?)",
      [home_text, home_banner],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        return res.json({ id: result.insertId, home_text, home_banner });
      }
    );
  });
};

exports.gethome = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query("SELECT * FROM homedata", (err, results) => {
      connection.release();
      if (err) return handleQueryError(res, err);

      return res.json(results);
    });
  });
};

exports.getSinglehome = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "SELECT * FROM homedata WHERE home_id = ?",
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

exports.updatehome = async (req, res) => {
  const taskId = req.params.id;
  const { home_text, home_banner } = req.body;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "UPDATE homedata SET home_text = ?, home_banner = ?  WHERE enq_id = ?",
      [home_text, home_banner, taskId],
      (err, result) => {
        connection.release();
        if (err) return handleQueryError(res, err);

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        return res.json({ id: taskId,home_text, home_banner});
      }
    );
  });
};

exports.deletehome = (req, res) => {
  const taskId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) return handleQueryError(res, err);

    connection.query(
      "DELETE FROM homedata WHERE home_id = ?",
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
