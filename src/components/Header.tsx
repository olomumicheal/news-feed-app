import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}


const AVATAR_URL = "https://i.imgur.com/G34yY5W.png";
const primaryNavLinks = ['Top Stories', 'World', 'Business', 'Tech', 'Culture', 'Sports', 'Arts'];

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [secondarySearch, setSecondarySearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(secondarySearch);
  };

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-20">
      {/* 1. Top Navigation Row: Logo, Links, Icons */}
      <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center text-sm">
        
        {/* Left Section: Logo and Primary Links */}
        <div className="flex items-center space-x-10">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            News<span className="font-light">Today</span>
          </h1>
          
          <nav className="hidden lg:flex space-x-6 text-gray-600">
            {primaryNavLinks.map(link => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-blue-600 transition-colors font-medium text-sm py-1"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section: Search and User Icons */}
        <div className="flex items-center space-x-4">
          
          {/* Search Icon (for smaller screens) */}
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
          {/* Desktop Search Input (Hidden on Mobile) */}
          <div className="hidden lg:block relative">
             <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 w-40 transition-shadow bg-gray-50"
            />
            <svg className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          {/* Notifications Icon (Bell) */}
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          
          {/* User Avatar with URL Image */}
          <div className="w-8 h-8 rounded-full cursor-pointer overflow-hidden border border-gray-200">
            <img 
              src={AVATAR_URL} 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* 2. Full-Width Search Bar Row */}
      <div className="container mx-auto px-4 lg:px-6 py-1 border-t border-gray-100 hidden lg:block">
        <form onSubmit={handleSearch} className="flex items-center">
          
          {/* Search Icon */}
          <span className="text-gray-400 mr-2">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          
          <input
            type="text"
            placeholder="Search for news, topics..."
            value={secondarySearch}
            onChange={(e) => setSecondarySearch(e.target.value)}
            className="w-full py-2 text-gray-700 placeholder-gray-500 text-base focus:outline-none"
          />
          <button type="submit" className="hidden" />
        </form>
      </div>
    </header>
  );
};

export default Header;