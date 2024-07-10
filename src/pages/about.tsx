import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default function About() {
  return (
    <Container>
      <h1>About Lacrei Saúde</h1>
      <p>We are dedicated to providing inclusive healthcare for the LGBTQIAPN+ community.</p>
    </Container>
  );
}