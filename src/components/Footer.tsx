import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #0070f3;
  padding: 1rem;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Lacrei Saúde. Todos os direitos reservados.</p>
  </FooterWrapper>
);

export default Footer;