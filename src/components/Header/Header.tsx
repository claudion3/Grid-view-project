import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import TileBuilder from '../TileBuilder/TileBuilder';
import bgImage from '../../assets/images/bg.jpg'; // Import the background image

interface HeaderProps {
  onSearch: (term: string) => void;
  onAddTile: (tile: { title: string; description: string; imagePath: string }) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onAddTile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header
      className="bg-cover bg-center h-64 flex flex-col justify-center items-center relative py-8"
      style={{
        backgroundImage: `url(${bgImage})`, // Use the imported image
      }}
    >
      {/* Header Title */}
      <h1 className="text-4xl font-bold text-white mb-8">Grid View Project</h1>

      {/* Search and Add Tile Button */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Tile
        </button>
      </div>

      {/* Modal for TileBuilder */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TileBuilder
          onAddTile={(tile) => {
            onAddTile(tile); // Add the tile to the data
            setIsModalOpen(false); // Close the modal
          }}
        />
      </Modal>
    </header>
  );
};

export default Header;