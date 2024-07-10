import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgb(1, 135, 98);
  padding: 1rem;
  color: white;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;

  p {
    margin: 0.5rem 0;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Lacrei Saúde.</p>
    <p>Todos os direitos reservados.</p>
  </FooterWrapper>
);

export default Footer;