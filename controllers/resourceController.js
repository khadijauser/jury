const Resource = require("../models/Resource");


exports.createResource = async (req, res) => {
  try {
    const { taskId } = req.params;  
    const resource = new Resource({
      ...req.body,
      task: taskId,  
    });

    await resource.save();

  
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getResourcesByTaskId = async (req, res) => {
  try {
    const { taskId } = req.params;  
    const resources = await Resource.find({ task: taskId });  

    if (!resources || resources.length === 0) {
      return res.status(404).json({ message: "No resources found for this task" });
    }

    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json({ message: "Resource deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
