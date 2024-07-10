import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <h1>Welcome to Lacrei Saúde</h1>
      <Button href="/about" label="About Us" />
      <Button href="/services" label="Our Services" />
      <Button href="/contact" label="Contact Us" />
    </Container>
  );
}
