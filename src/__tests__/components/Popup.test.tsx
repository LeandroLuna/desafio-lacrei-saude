import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Popup from '../../components/Popup';

describe('Popup', () => {
  it('renders the popup with a message and closes when button is clicked', () => {
    const handleClose = jest.fn();
    render(<Popup message="Teste de mensagem" onClose={handleClose} />);

    expect(screen.getByText('Teste de mensagem')).toBeInTheDocument();

    const closeButton = screen.getByText('Fechar');
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});