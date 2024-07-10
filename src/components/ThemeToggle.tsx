import React from 'react';
import styled from 'styled-components';
import useTheme from '../hooks/useTheme';

const ToggleButton = styled.button<{ theme: 'light' | 'dark' }>`
  background: ${(props) => (props.theme === 'light' ? '#0070f3' : '#333')};
  color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? '#005bb5' : '#555')};
  }
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} theme={theme}>
      {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    </ToggleButton>
  );
};

export default ThemeToggle;
