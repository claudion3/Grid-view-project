import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  const mockOnSearch = jest.fn();
  const mockOnAddTile = jest.fn();

  it('calls onSearch when typing in the search input', () => {
    render(<Header onSearch={mockOnSearch} onAddTile={mockOnAddTile} />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('opens the modal when "Add Tile" button is clicked', () => {
    render(<Header onSearch={mockOnSearch} onAddTile={mockOnAddTile} />);
    const addButton = screen.getByText('Add Tile');
    fireEvent.click(addButton);
    expect(screen.getByText('Add a New Tile')).toBeInTheDocument();
  });
});