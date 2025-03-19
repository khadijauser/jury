// backend/routes/resourceRoutes.js
const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");

// Define routes for resources
router.post("/", resourceController.createResource); // Create a new resource
router.get("/", resourceController.getResources); // Get all resources
router.get("/:id", resourceController.getResourceById); // Get a specific resource by ID
router.put("/:id", resourceController.updateResource); // Update a resource
router.delete("/:id", resourceController.deleteResource); // Delete a resource

// Export the router
module.exports = router;