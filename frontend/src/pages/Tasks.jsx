import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Tasks = () => {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([
    { id: 1, description: "Plan foundation work", startDate: "01/03/2025", endDate: "10/03/2025", resources: [{ name: "Concrete", type: "Material", quantity: 20, supplier: "BuildCo" }, { name: "Workers", type: "Labor", quantity: 5, supplier: "LocalCrew" }] },
    { id: 2, description: "Install steel framework", startDate: "11/03/2025", endDate: "25/03/2025", resources: [{ name: "Steel beams", type: "Material", quantity: 50, supplier: "SteelCorp" }, { name: "Cranes", type: "Equipment", quantity: 2, supplier: "HeavyLift Ltd." }] },
  ]);

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddResource = (taskId) => {
    const resource = prompt("Enter new resource (name, type, quantity, supplier):");
    if (resource) {
      const [name, type, quantity, supplier] = resource.split(",").map((item) => item.trim());
      if (name && type && quantity && supplier) {
        const newResource = { name, type, quantity: Number(quantity), supplier };
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, resources: [...task.resources, newResource] } : task
          )
        );
      } else {
        alert("Please provide all resource details correctly!");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Gestion des Tâches</h2>

      {/* Add Task Button */}
      <div className="flex justify-end mb-4">
        <Link
          to={`/projects/${projectId}/add-task`}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ➕ Créer une Tâche
        </Link>
      </div>

     
      <ul className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-gray-100 rounded-lg shadow flex flex-col gap-2"
            >
              <h3 className="font-semibold">{task.description}</h3>
              <p><strong>Date de début:</strong> {task.startDate}</p>
              <p><strong>Date de fin:</strong> {task.endDate}</p>
              <p><strong>Ressources:</strong></p>
              <ul className="pl-4 list-disc">
                {task.resources.map((res, index) => (
                  <li key={index}>{`${res.name} (${res.type}), Quantity: ${res.quantity}, Supplier: ${res.supplier}`}</li>
                ))}
              </ul>

              <div className="flex justify-end gap-2 mt-2">
                <Link
                  to={`/add-resource-task`}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  ➕ Ajouter une Ressource
                </Link>
                <Link
                  to="#"
                  onClick={() => handleDeleteTask(task.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  🗑️ Supprimer
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune tâche trouvée.</p>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
