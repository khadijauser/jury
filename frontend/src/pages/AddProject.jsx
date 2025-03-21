import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProject() {
    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        budget: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/projects/', newProject);
            console.log('Project Added:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Failed to add project:', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#b29a6b] text-white flex flex-col items-center justify-center p-6">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-[#a9ddf4]">Add New Project</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#3e5669] mb-2">Project Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newProject.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#15506f] text-black rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#3e5669] mb-2">Description</label>
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#15506f]   text-black  rounded-md"
                        required
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#3e5669] mb-2">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={newProject.startDate}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-[#15506f]  text-black  rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#3e5669] mb-2">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            value={newProject.endDate}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-[#15506f]  text-black  rounded-md"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#3e5669] mb-2">Budget</label>
                    <input
                        type="number"
                        name="budget"
                        value={newProject.budget}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#15506f]  text-black  rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#539a77] hover:bg-[#15506f] text-white py-2 px-3 rounded-md transition-colors duration-200"
                >
                    Add Project
                </button>
            </form>
        </div>
    );
}

export default AddProject;
