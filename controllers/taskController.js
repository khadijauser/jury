const Task = require("../models/Task");
const Project = require("../models/Project"); 


exports.createTask = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { description, startDate, endDate } = req.body;

    // Vérification plus détaillée du projet
    const project = await Project.findById(projectId).select('_id');
    if (!project) {
      return res.status(404).json({
        success: false,
        error: `Projet non trouvé avec l'ID: ${projectId}`
      });
    }

    const newTask = await Task.create({
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      project: projectId
    });

    res.status(201).json({
      success: true,
      data: newTask
    });

  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erreur:`, err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

exports.getTasksByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params; // Get the projectId from the request params
    const tasks = await Task.find({ projectId }); // Find tasks that belong to the project

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for this project" });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getTasksByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params; 
    const tasks = await Task.find({ projectId });

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for this project" });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
