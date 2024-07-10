import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../../components/Button';

describe('Button Component', () => {
  it('renders button with label', () => {
    render(<Button label="Test Button" href="/" />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders as anchor when href is provided', () => {
    render(<Button label="About Us" href="/about" />);
    const buttonElement = screen.getByRole('link', { name: 'About Us' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/about');
  });
});
