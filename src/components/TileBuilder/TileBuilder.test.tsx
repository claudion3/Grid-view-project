import { render, screen, fireEvent } from '@testing-library/react';
import TileBuilder from './TileBuilder';

describe('TileBuilder Component', () => {
  const mockOnAddTile = jest.fn();

  it('updates input fields and calls onAddTile on form submission', () => {
    render(<TileBuilder onAddTile={mockOnAddTile} />);

    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const imagePathInput = screen.getByPlaceholderText('Image URL');
    const submitButton = screen.getByText('Add Tile');

    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
    fireEvent.change(imagePathInput, { target: { value: 'new-image.jpg' } });
    fireEvent.click(submitButton);

    expect(mockOnAddTile).toHaveBeenCalledWith({
      title: 'New Title',
      description: 'New Description',
      imagePath: 'new-image.jpg',
    });
  });
});