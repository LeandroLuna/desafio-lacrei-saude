import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const ServicesPage = () => {
  return (
    <Container>
      <Title>Our Services</Title>
      <Content>
        Explore our services and what we offer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Content>
      {/* Conteúdo adicional sobre os serviços */}
    </Container>
  );
};

export default ServicesPage;
