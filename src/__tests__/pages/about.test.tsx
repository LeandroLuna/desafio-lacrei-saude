import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import About from '../../pages/about';

describe('About Page', () => {
  it('renders about page content', () => {
    render(<About />);
    const aboutElement = screen.getByText('About Lacrei Saúde');
    expect(aboutElement).toBeInTheDocument();
  });
});
