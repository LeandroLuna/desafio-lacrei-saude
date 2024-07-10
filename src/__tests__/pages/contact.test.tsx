import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Contact from '../../pages/contact';

describe('Contact Page', () => {
  it('renders contact page content', () => {
    render(<Contact />);
    const contactElement = screen.getByText('Contact Us');
    expect(contactElement).toBeInTheDocument();
  });
});
