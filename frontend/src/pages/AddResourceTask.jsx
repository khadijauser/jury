import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddResourceTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

 
  const [resource, setResource] = useState({
    name: "",
    type: "",
    quantity: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResource({ ...resource, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/tasks/${taskId}/resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
      });
      if (response.ok) {
        navigate(-1); 
      } else {
        alert("Failed to add resource.");
      }
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-[#e4e0da] shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[#3e5669]">Add Resource to Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Resource Name</label>
          <input
            type="text"
            name="name"
            value={resource.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539a77]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Type</label>
          <input
            type="text"
            name="type"
            value={resource.type}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539a77]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={resource.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#539a77]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#539a77] text-white py-2 px-4 rounded-lg hover:bg-[#15506f]"
        >
          Add Resource
        </button>
      </form>
    </div>
  );
};

export default AddResourceTask;