import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaPlus, FaCalendar, FaEye, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [projects, setProjects] = useState([]);

    // Fetch projects from API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    // Handle delete project
    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#b29a6b] text-white flex flex-col items-center justify-center p-6">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-[#a9ddf4]">Project Section</h1>
            </div>

            {/* Button to Add New Project */}
            <Link
                to="/add-project"
                className="bg-[#539a77] hover:bg-[#15506f] text-white py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1 mb-6"
            >
                <FaPlus size={16} />
                Add Project
            </Link>

            {/* Project List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#15506f]">
                        <h2 className="text-xl font-semibold text-[#15506f]">{project.name}</h2>
                        <p className="text-gray-700 mt-2">{project.description}</p>

                        <div className="my-4 space-y-2">
                            <div className="flex items-center text-[#3e5669]">
                                <FaCalendar size={16} className="mr-2 text-[#539a77]" />
                                <span>Start: {project.startDate}</span>
                            </div>
                            <div className="flex items-center text-[#3e5669]">
                                <FaCalendar size={16} className="mr-2 text-[#539a77]" />
                                <span>End: {project.endDate}</span>
                            </div>
                            <div className="flex items-center text-[#3e5669]">
                                <FaMoneyBillWave size={16} className="mr-2 text-[#feb913]" />
                                <span>Budget: Dh{project.budget.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                to={`/vieu-tasks/${project.id}`}
                                className="bg-[#539a77] hover:bg-[#15506f] text-white py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1 text-sm"
                            >
                                <FaEye size={16} />
                                View Tasks
                            </Link>

                            <Link
                                to={`/edit-project/${project.id}`}
                                className="bg-[#15506f] hover:bg-[#539a77] text-white py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1 text-sm"
                            >
                                <FaEdit size={16} />
                                Edit
                            </Link>
                            <button
                                onClick={() => deleteProject(project.id)}
                                className="bg-[#dc4048] hover:bg-[#c63038] text-white py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1 text-sm"
                            >
                                <FaTrashAlt size={16} />
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
