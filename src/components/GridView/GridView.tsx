import React, { useState } from 'react';
import { Tile } from '../../data/data';

interface GridViewProps {
  data: Tile[];
}

const GridView: React.FC<GridViewProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 flex-grow">
        {currentItems.map((tile, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={tile.imagePath}
              alt={tile.title}
              className="w-full h-64 object-cover" // Adjust height as needed
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{tile.title}</h2>
              <p className="text-gray-700">{tile.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center p-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`mx-2 px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GridView;