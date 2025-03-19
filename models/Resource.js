// backend/models/Resource.js
const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  supplier: { type: String, required: true },
});

module.exports = mongoose.model("Resource", ResourceSchema);