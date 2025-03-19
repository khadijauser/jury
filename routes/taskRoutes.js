// backend/routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Define routes for tasks
router.post("/", taskController.createTask); // Create a new task
router.get("/", taskController.getTasks); // Get all tasks
router.get("/:id", taskController.getTaskById); // Get a specific task by ID
router.put("/:id", taskController.updateTask); // Update a task
router.delete("/:id", taskController.deleteTask); // Delete a task

// Export the router
module.exports = router;