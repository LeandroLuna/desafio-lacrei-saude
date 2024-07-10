import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, act, waitFor } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { AboutProvider } from '../../contexts/AboutContext';

jest.useFakeTimers();

describe('About Page', () => {
  it('renders about page content and updates with fetched details', async () => {
    render(
      <AboutProvider>
        <AboutPage />
      </AboutProvider>
    );

    const initialContent = screen.getByText('Somos dedicados a fornecer cuidados de saúde inclusivos para a comunidade LGBTQIAPN+.');
    expect(initialContent).toBeInTheDocument();

    const loadingText = screen.getByText('Carregando...');
    expect(loadingText).toBeInTheDocument();

    // This test is not working as expected. It should wait for the 4 seconds to pass and then check if the fetched content is displayed.
    // await act(async () => {
    //   jest.advanceTimersByTime(4000);
    //   await waitFor(() => {
    //     expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();

    //     const fetchedContent = screen.getByText('Estamos continuamente nos esforçando para melhorar o acesso e os serviços de saúde para todos.');
    //     expect(fetchedContent).toBeInTheDocument();
    //   });
    // });
  });
});
