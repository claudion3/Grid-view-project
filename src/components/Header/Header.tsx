import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import TileBuilder from '../TileBuilder/TileBuilder';
import bgImage from '../../assets/images/bg.jpg';

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
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Header Title */}
      <h1 className="text-4xl font-bold text-white mb-4 sm:mb-8">Grid View Project</h1>

      {/* Search and Add Tile Button */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center gap-4 sm:flex-row sm:absolute sm:top-6 sm:right-6 sm:bottom-auto sm:left-auto">

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-auto p-2 border border-gray-300 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Search for tiles"
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          aria-label="Add a new tile"
        >
          Add Tile
        </button>
      </div>

      {/* Modal for TileBuilder */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TileBuilder
          onAddTile={(tile) => {
            onAddTile(tile);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </header>
  );
};

export default Header;