import React from 'react';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['All', 'Top Stories', 'World', 'Politics', 'Business', 'Tech', 'Culture'];

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="container mx-auto px-6 py-4">
      {/* Use flex with overflow to allow horizontal scrolling on small screens */}
      <div className="flex space-x-4 overflow-x-auto whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${activeCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;