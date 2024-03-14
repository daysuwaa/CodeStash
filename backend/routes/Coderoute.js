/* eslint-disable no-undef */
const { Router } = require("express");
const router = Router(); // Create a new router instance

const {
  getCode,
  saveCode,
  updateCode,
  deleteCode,
} = require("../controllers/CodeControllers");

// Define routes
router.get("/get", getCode);
router.post("/save", saveCode);
router.put("/update/:id", updateCode);
router.delete("/delete/:id", deleteCode);

module.exports = router; // Export the router
