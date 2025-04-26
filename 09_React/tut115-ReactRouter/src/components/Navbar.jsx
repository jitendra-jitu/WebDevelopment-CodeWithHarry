import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 h-16 flex justify-around items-center shadow-lg">
            <h1 className="text-white text-xl font-bold">NavBar</h1>
            <div className="flex space-x-10 h-full">
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-slate-600 text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center" : "text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-slate-600 text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center" : "text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center"}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "bg-slate-600 text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center" : "text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center"}>Services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-slate-600 text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center" : "text-gray-300 hover:text-white text-sm font-medium h-full flex items-center py-4 px-6 text-center"}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;