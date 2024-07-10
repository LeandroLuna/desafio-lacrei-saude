import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../../pages/index';

describe('Home Component', () => {
  it('renders welcome message and buttons', () => {
    const { getByText, getByRole } = render(<Home />);

    const welcomeMessage = getByText('Welcome to Lacrei Saúde');
    expect(welcomeMessage).toBeInTheDocument();

    const aboutButton = getByRole('button', { name: 'About Us' });
    expect(aboutButton).toBeInTheDocument();

    const servicesButton = getByRole('button', { name: 'Our Services' });
    expect(servicesButton).toBeInTheDocument();

    const contactButton = getByRole('button', { name: 'Contact Us' });
    expect(contactButton).toBeInTheDocument();
  });
});
