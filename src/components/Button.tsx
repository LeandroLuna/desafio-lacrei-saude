import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledButton = styled.button`
  background: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background: #005bb5;
  }
`;

type ButtonProps = {
  href: string;
  label: string;
};

const Button = ({ href, label }: ButtonProps) => (
  <Link href={href} passHref>
    <StyledButton>{label}</StyledButton>
  </Link>
);

export default Button;