
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");


router.post("/", taskController.createTask); 
router.post("/projects/:projectId/tasks", taskController.createTask);
router.get("/", taskController.getTasks); 
router.get('/projects/:projectId/tasks', taskController.getTasksByProjectId);
router.get("/:id", taskController.getTaskById); 
router.put("/:id", taskController.updateTask); 
router.delete("/:id", taskController.deleteTask);


module.exports = router;