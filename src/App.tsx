import React, { useState } from 'react';
import Header from './components/Header/Header';
import GridView from './components/GridView/GridView';
import { data as initialData, Tile } from './data/data';

const App: React.FC = () => {
  const [data, setData] = useState<Tile[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search term
  const filteredData = data.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a new tile
  const handleAddTile = (tile: Tile) => {
    setData([...data, tile]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={setSearchTerm} onAddTile={handleAddTile} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <GridView data={filteredData} />
      </div>
    </div>
  );
};

export default App;