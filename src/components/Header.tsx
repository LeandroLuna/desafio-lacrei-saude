import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  background: #0070f3;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <HeaderTitle>Lacrei Saúde</HeaderTitle>
    </Link>
  </HeaderWrapper>
);

export default Header;
