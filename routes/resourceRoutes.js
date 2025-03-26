const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");


router.post("/tasks/:taskId", resourceController.createResource);


router.get("/tasks/:taskId", resourceController.getResourcesByTaskId);


router.get("/:id", resourceController.getResourceById);


router.put("/:id", resourceController.updateResource);


router.delete("/:id", resourceController.deleteResource);

module.exports = router;
