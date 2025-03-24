require("dotenv").config(); 
console.log("MONGO_URI:", process.env.MONGO_URI); 

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/resources", resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
