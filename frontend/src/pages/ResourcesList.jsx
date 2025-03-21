import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResourceList = () => {
  const [resources, setResources] = useState([
    { name: "Concrete", type: "Material", quantity: 20, supplier: "BuildCo" },
    { name: "Steel beams", type: "Material", quantity: 50, supplier: "SteelCorp" },
    { name: "Cranes", type: "Equipment", quantity: 2, supplier: "HeavyLift Ltd." },
    { name: "Workers", type: "Labor", quantity: 5, supplier: "LocalCrew" }
  ]);

  const handleDeleteResource = (index) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      setResources(resources.filter((_, i) => i !== index));
    }
  };

  const handleAddResourceToTask = () => {
    const name = prompt("Enter resource name:");
    const type = prompt("Enter resource type:");
    const quantity = prompt("Enter resource quantity:");
    const supplier = prompt("Enter resource supplier:");

    if (name && type && quantity && supplier) {
      const newResource = { name, type, quantity: Number(quantity), supplier };
      setResources([...resources, newResource]);
    } else {
      alert("Please provide all resource details correctly!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Liste des Ressources</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddResourceToTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ➕ Ajouter une Ressource
        </button>
      </div>

      <ul className="space-y-3">
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow flex flex-col gap-2"
            >
              <p><strong>Nom:</strong> {resource.name}</p>
              <p><strong>Type:</strong> {resource.type}</p>
              <p><strong>Quantité:</strong> {resource.quantity}</p>
              <p><strong>Fournisseur:</strong> {resource.supplier}</p>
              <div className="flex gap-2 mt-2">
                <Link
                  to={`/edit-resource${resource.name}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex items-center gap-1 text-sm"
                >
                  ✏️ Modifier
                </Link>
                <button
                  onClick={() => handleDeleteResource(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1 text-sm"
                >
                  🗑️ Supprimer
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune ressource trouvée.</p>
        )}
      </ul>
    </div>
  );
};

export default ResourceList;
