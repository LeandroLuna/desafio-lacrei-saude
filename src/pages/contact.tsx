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

const ContactPage = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Content>
        Get in touch with us for any inquiries or questions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Content>
      {/* Formulário de contato ou informações de contato */}
    </Container>
  );
};

export default ContactPage;
