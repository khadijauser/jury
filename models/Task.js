const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  project: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true
  }
});

module.exports = mongoose.model("Task", TaskSchema);