import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../../pages/services';
import servicesData from '../../data/ServicesData';

describe('Services Page', () => {
  it('renders services page content', () => {
    render(<Services />);
    const titleElement = screen.getByText('Nossos serviços');
    expect(titleElement).toBeInTheDocument();

    const contentElement = screen.getByText(
      'Explore nossos serviços e o que oferecemos.'
    );
    expect(contentElement).toBeInTheDocument();

    servicesData.forEach((service) => {
      const serviceTitle = screen.getByText(service.title);
      expect(serviceTitle).toBeInTheDocument();

      const serviceDescription = screen.getByText(service.description);
      expect(serviceDescription).toBeInTheDocument();
    });
  });
});
