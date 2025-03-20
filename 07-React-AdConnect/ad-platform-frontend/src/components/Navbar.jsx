import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Browse", path: "/browse" },
    { label: "Apply", path: "/apply" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-blue-600 p-4 sticky top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          BrandBridge
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className="relative text-white font-medium group transition duration-300"
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 bg-white ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-white text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          />
          {/* <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            
          </span> */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
