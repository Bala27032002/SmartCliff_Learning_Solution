const express = require("express");
require("dotenv").config();
const app = express();
const courseRoute = require("./routes/courseRoute");
const enquiryRoute = require("./routes/enquiryRoute");
const hireRoute = require("./routes/hireRoute");
const contactRoute = require("./routes/contactRoute");
const ApplyRoute = require("../BACKEND/routes/ApplyRoute");
const serviceRoute = require("./routes/serviceRoute");
const HomeRoute = require("./routes/HomeRoute");
const CategoryRoute = require("./routes/CategoryRoute");
const Exampleform =require("./routes/ExampleRoute")
const cors = require('cors');
const mysql = require("mysql2");
const path = require("path");

// Middleware
app.use(cors());
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next(); //why use ? next call pannunathan next process ku move agaum ilana middleware laey stop agirum..
});

app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// DB connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database!");
    connection.release();
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  }
});

app.use("/courses", courseRoute);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use("/enquriy", enquiryRoute);
app.use("/hireus", hireRoute);
app.use("/contact", contactRoute);
app.use("/Apply", ApplyRoute);
app.use("/serviceform", serviceRoute);
app.use("/homedata", HomeRoute);
app.use("/category", CategoryRoute);
app.use("/exampleform", Exampleform);
 