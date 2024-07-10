import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  it('renders footer with correct text', () => {
    render(<Footer />);
    const footerElement = screen.getByText('© 2024 Lacrei Saúde. Todos os direitos reservados.');
    expect(footerElement).toBeInTheDocument();
  });
});
