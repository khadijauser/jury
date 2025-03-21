import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-100 hover:text-white';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="p-4 bg-[#15506f] text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-[#4babdc] rounded flex items-center justify-center">
                        <span className="text-[#15506f] font-bold">CX</span>
                    </div>
                    <h1 className="text-xl font-bold text-[#a9ddf4]">ConstructionXpert</h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className={`transition-colors duration-200 py-1 px-2 ${isActive('/')}`}>
                        Dashboard
                    </Link>
                   
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-[#3e5669] rounded-md shadow-inner py-2">
                    <div className="flex flex-col space-y-2 px-4">
                        <Link 
                            to="/" 
                            className={`py-2 px-3 rounded ${location.pathname === '/' ? 'bg-[#539a77] text-white' : 'text-gray-100 hover:bg-[#539a77]/30'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                        <Link 
                            to="/projects" 
                            className={`py-2 px-3 rounded ${location.pathname === '/projects' ? 'bg-[#539a77] text-white' : 'text-gray-100 hover:bg-[#539a77]/30'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/tasks" 
                            className={`py-2 px-3 rounded ${location.pathname === '/tasks' ? 'bg-[#539a77] text-white' : 'text-gray-100 hover:bg-[#539a77]/30'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tasks
                        </Link>
                        <Link 
                            to="/resources" 
                            className={`py-2 px-3 rounded ${location.pathname === '/resources' ? 'bg-[#539a77] text-white' : 'text-gray-100 hover:bg-[#539a77]/30'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resources
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;