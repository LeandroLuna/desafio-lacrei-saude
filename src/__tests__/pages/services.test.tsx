import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Services from '../../pages/services';

describe('Services Page', () => {
  it('renders services page content', () => {
    render(<Services />);
    const servicesElement = screen.getByText('Our Services');
    expect(servicesElement).toBeInTheDocument();
  });
});
