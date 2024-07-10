import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledButton = styled.button`
  background-color: rgb(1, 135, 98);
  color: white;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 4px;
  border-radius: 8px;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: rgb(0, 119, 86);
  }
`;

type ButtonProps = {
  href: string;
  label: string;
  target?: boolean;
};

const Button = ({ href, label, target }: ButtonProps) => (
  <Link href={href} passHref>
    {target ? (
      <StyledButton as="a" href={href} target="_blank" rel="noopener">
        {label}
      </StyledButton>
    ) : (
      <StyledButton>{label}</StyledButton>
    )}
  </Link>
);

export default Button;