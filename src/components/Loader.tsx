import React from 'react';

const Loader: React.FC = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <p className="ml-4 text-gray-600">Loading headlines...</p>
  </div>
);

export default Loader;