const express = require("express");

const hire_router = express.Router();

// const {
//   createTask,
//   getTasks,
//   getSingleTask, 
//   updateTask,
//   deleteTask,
// } = require("../controllers/taskController");
const { createHire, getHire, getSingleHire,  deleteHire } = require("../controllers/hireController");

hire_router.post("/", createHire);
hire_router.get("/", getHire);
hire_router.get("/:id", getSingleHire);

hire_router.delete("/:id",  deleteHire);

module.exports = hire_router;
