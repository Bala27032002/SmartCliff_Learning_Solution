const express = require("express");

const home_router = express.Router();

const {
    createhome,
    gethome,
    getSinglehome,
    updatehome,
    deletehome,
} = require("../controllers/Homecontroller");

home_router.post("/",createhome);
home_router.get("/", gethome);
home_router.get("/:id", getSinglehome);
home_router.patch("/:id", updatehome);
home_router.delete("/:id", deletehome);

module.exports = home_router;
