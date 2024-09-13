const express = require("express");

const example_form = express.Router();
const { createHire } = require("../controllers/Exampleform");

example_form.post("/", createHire);
module.exports = example_form;
