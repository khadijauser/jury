import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditResource = () => {
  const { resourceId } = useParams();
  const navigate = useNavigate();

  // Sample resource data (replace with API fetch later)
  const resourceData = [
    { id: 1, name: "Concrete", type: "Material", quantity: 20, supplier: "BuildCo" },
    { id: 2, name: "Steel beams", type: "Material", quantity: 50, supplier: "SteelCorp" },
    { id: 3, name: "Cranes", type: "Equipment", quantity: 2, supplier: "HeavyLift Ltd." },
    { id: 4, name: "Workers", type: "Labor", quantity: 5, supplier: "LocalCrew" }
  ];

  const resource = resourceData.find((res) => res.id === parseInt(resourceId));

  if (!resource) {
    return <p>Resource not found</p>;
  }

  // State hooks for form data
  const [name, setName] = useState(resource.name);
  const [type, setType] = useState(resource.type);
  const [quantity, setQuantity] = useState(resource.quantity);
  const [supplier, setSupplier] = useState(resource.supplier);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create updated resource object
    const updatedResource = {
      id: resource.id,
      name,
      type,
      quantity: parseInt(quantity),
      supplier,
    };

    console.log("Updated Resource:", updatedResource);

    // Redirect to the resource list
    navigate("/resources");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Modifier la Ressource</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">Fournisseur</label>
          <input
            type="text"
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditResource;
