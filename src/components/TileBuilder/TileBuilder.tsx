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
    <form onSubmit={handleSubmit}>
  <h2 className="text-lg font-bold mb-4">Add a New Tile</h2>
  <label htmlFor="title" className="sr-only">Title</label>
  <input
    type="text"
    id="title"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="p-2 border rounded w-full mb-2"
    required
  />
  <label htmlFor="description" className="sr-only">Description</label>
  <input
    type="text"
    id="description"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="p-2 border rounded w-full mb-2"
    required
  />
  <label htmlFor="imagePath" className="sr-only">Image URL</label>
  <input
    type="text"
    id="imagePath"
    placeholder="Image URL"
    value={imagePath}
    onChange={(e) => setImagePath(e.target.value)}
    className="p-2 border rounded w-full mb-2"
    required
  />
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
    Add Tile
  </button>
</form>
  );
};

export default TileBuilder;