const express = require("express");
const a_router = express.Router();
const {
  createapply,
  getapply,
  getSingleapply,

  deleteapply,
} = require("../controllers/Applynowcontrol");

a_router.post("/", createapply);
a_router.get("/", getapply);
a_router.get("/:id", getSingleapply);

a_router.delete("/:id", deleteapply);

module.exports = a_router;