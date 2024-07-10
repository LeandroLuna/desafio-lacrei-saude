import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../../pages/contact';

describe('Contact Page', () => {
  it('submits the form and shows the popup', async () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const messageInput = screen.getByPlaceholderText('Mensagem');
    const submitButton = screen.getByText('Enviar mensagem');

    fireEvent.change(nameInput, { target: { value: 'Teste Nome' } });
    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(messageInput, { target: { value: 'Teste de mensagem' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Sua mensagem foi enviada com sucesso!')).toBeInTheDocument();
    });

    expect((nameInput as HTMLInputElement).value).toBe('');
    expect((emailInput as HTMLInputElement).value).toBe('');
    expect((messageInput as HTMLInputElement).value).toBe('');


    const closeButton = screen.getByText('Fechar');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Sua mensagem foi enviada com sucesso!')).not.toBeInTheDocument();
  });
});
