import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

it('closes when clicking outside the modal', async () => {
  render(
    <Modal isOpen={true} onClose={mockOnClose}>
      <div>Modal Content</div>
    </Modal>
  );

  const overlay = await screen.findByTestId('modal-overlay');
  fireEvent.mouseDown(overlay);
  expect(mockOnClose).toHaveBeenCalled();
});

  it('closes when pressing the Escape key', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('closes when the close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('cleans up event listeners when unmounted', () => {
    const { unmount } = render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Spy on window.removeEventListener
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const removeDocumentListenerSpy = jest.spyOn(document, 'removeEventListener');

    // Unmount the modal
    unmount();

    // Ensure event listeners are removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(removeDocumentListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    // Clean up the spies
    removeEventListenerSpy.mockRestore();
    removeDocumentListenerSpy.mockRestore();
  });
});