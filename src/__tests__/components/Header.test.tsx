import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header Component', () => {
  it('renders header with correct text', () => {
    render(<Header />);
    const headerElement = screen.getByText('Lacrei Saúde');
    expect(headerElement).toBeInTheDocument();
  });
});