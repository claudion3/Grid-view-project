import React, { useState } from 'react';

interface TileBuilderProps {
  onAddTile: (tile: { title: string; description: string; imagePath: string }) => void;
}

const TileBuilder: React.FC<TileBuilderProps> = ({ onAddTile }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call onAddTile with the new tile data
    onAddTile({ title, description, imagePath });

    // Reset the form fields
    setTitle('');
    setDescription('');
    setImagePath('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-bold mb-4">Add a New Tile</h2>

      <div>
        <label htmlFor="title" className="sr-only">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="Title"
        />
      </div>

      <div>
        <label htmlFor="description" className="sr-only">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="Description"
        />
      </div>

      <div>
        <label htmlFor="imagePath" className="sr-only">Image URL</label>
        <input
          type="text"
          id="imagePath"
          placeholder="Image URL"
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="Image URL"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        aria-label="Add Tile"
      >
        Add Tile
      </button>
    </form>
  );
};

export default TileBuilder;