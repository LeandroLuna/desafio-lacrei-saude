import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from '../../components/ThemeToggle';
import useTheme from '../../hooks/useTheme';

jest.mock('../../hooks/useTheme');

describe('ThemeToggle component', () => {
  it('should render with light theme initially', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    });

    const { getByText } = render(<ThemeToggle />);
    expect(getByText('Modo Escuro')).toBeInTheDocument();
  });
});
