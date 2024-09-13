const express = require("express");
const router = express.Router();

const {
    createServiceEnquiry,
    getServiceEnquiries,
    deleteServiceEnquiry,
} = require("../controllers/serviceEnquiryController");

// Create a new course enquiry
router.post("/", createServiceEnquiry);

// Get all course enquiries
router.get("/", getServiceEnquiries);

// Delete a course enquiry by ID
router.delete("/:id", deleteServiceEnquiry);

module.exports = router;