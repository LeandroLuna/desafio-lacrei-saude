import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../../pages/index';

describe('Home Component', () => {
  it('renders welcome message and buttons', () => {
    const { getByText, getByRole } = render(<Home />);

    const welcomeMessage = getByText('Bem-vindo ao Lacrei Saúde');
    expect(welcomeMessage).toBeInTheDocument();

    const aboutButton = getByRole('button', { name: 'Sobre nós' });
    expect(aboutButton).toBeInTheDocument();

    const servicesButton = getByRole('button', { name: 'Nossos serviços' });
    expect(servicesButton).toBeInTheDocument();

    const contactButton = getByRole('button', { name: 'Contate-nos' });
    expect(contactButton).toBeInTheDocument();
  });
});
