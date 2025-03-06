import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GridView from './GridView';

const mockData = [
  { title: 'Tile 1', description: 'Description 1', imagePath: 'image1.jpg' },
  { title: 'Tile 2', description: 'Description 2', imagePath: 'image2.jpg' },
  { title: 'Tile 3', description: 'Description 3', imagePath: 'image3.jpg' },
  { title: 'Tile 4', description: 'Description 4', imagePath: 'image4.jpg' },
  { title: 'Tile 5', description: 'Description 5', imagePath: 'image5.jpg' },
  { title: 'Tile 6', description: 'Description 6', imagePath: 'image6.jpg' },
  { title: 'Tile 7', description: 'Description 7', imagePath: 'image7.jpg' },
];

describe('GridView Component', () => {
  it('renders the correct number of tiles per page', () => {
    render(<GridView data={mockData} />);
    const tiles = screen.getAllByRole('img');
    expect(tiles).toHaveLength(6); // 6 items per page
  });

  it('changes page when pagination button is clicked', () => {
    render(<GridView data={mockData} />);
    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    const tiles = screen.getAllByRole('img');
    expect(tiles).toHaveLength(1); // Only 1 item on page 2
  });
});