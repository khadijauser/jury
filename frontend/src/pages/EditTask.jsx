import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Updated to useNavigate

const EditTaskPage = () => {
  const { taskId } = useParams(); // Get the task ID from the URL
  const navigate = useNavigate(); // Replaces useHistory

  // Sample task data (replace with API fetch later)
  const taskData = [
    { id: 1, title: "Build Foundation", description: "Excavate and pour foundation", startDate: "2025-04-01", endDate: "2025-04-10", resources: ["Concrete", "Steel beams"] },
    { id: 2, title: "Install Steel Beams", description: "Install the main structure beams", startDate: "2025-04-11", endDate: "2025-04-15", resources: ["Steel beams", "Cranes"] },
  ];

  const task = taskData.find((task) => task.id === parseInt(taskId));

  if (!task) {
    return <p>Task not found</p>;
  }

  // State hooks for form data
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [startDate, setStartDate] = useState(task.startDate);
  const [endDate, setEndDate] = useState(task.endDate);
  const [resources, setResources] = useState(task.resources.join(", "));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create updated task object
    const updatedTask = {
      id: task.id,
      title,
      description,
      startDate,
      endDate,
      resources: resources.split(",").map((res) => res.trim()),
    };

    console.log("Updated Task:", updatedTask);

    // Redirect to the task list
    navigate("/tasks"); // Replaced history.push with navigate
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Modifier la Tâche</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date de début</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="resources" className="block text-sm font-medium text-gray-700">Ressources</label>
          <input
            type="text"
            id="resources"
            value={resources}
            onChange={(e) => setResources(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Séparez les ressources par des virgules"
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskPage;
