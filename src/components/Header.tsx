import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

const HeaderWrapper = styled.header`
  background: rgb(1, 135, 98);
  padding: 1rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <HeaderTitle>Lacrei Saúde</HeaderTitle>
    </Link>
    {/* <ThemeToggle /> */}
  </HeaderWrapper>
);

export default Header;
