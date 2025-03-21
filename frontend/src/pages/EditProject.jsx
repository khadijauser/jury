import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams(); // Assuming project ID is in URL
  const navigate = useNavigate();

  // State to store project data
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  // Fetch project data when the component is mounted
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProjectData(data); // Assuming the response returns the project data
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT", // PUT request to update the project
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      if (response.ok) {
        navigate("/projects"); // Redirect to the projects list page
      } else {
        alert("Failed to update project.");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#b29a6b] text-white flex flex-col items-center justify-center p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#a9ddf4]">Edit Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Project Name</label>
          <input
            type="text"
            name="name"
            value={projectData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Description</label>
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-md"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#3e5669] mb-2">Start Date</label>
            <input
              type="date"
              placeholder="JJ/MM/YYYY"
              name="startDate"
              value={projectData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-[#15506f] rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3e5669] mb-2">End Date</label>
            <input
              type="date"
              placeholder="JJ/MM/YYYY"
              name="endDate"
              value={projectData.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-[#15506f] rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#3e5669] mb-2">Budget</label>
          <input
            type="number"
            name="budget"
            value={projectData.budget}
            onChange={handleChange}
            className="w-full p-2 border border-[#15506f] rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#539a77] hover:bg-[#15506f] text-white py-2 px-3 rounded-md transition-colors duration-200"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default EditProject;
