import React from 'react';
import Button from '@/components/Button';
import styled from 'styled-components';
import Container from '@/components/Container';
import peopleHoldingFlag from '../../public/people-holding-flag.png';

const Title = styled.h1`
  padding: 2rem;
  text-align: center;
`;

const Image = styled.img`
  max-width: 50%;
  margin: 0 auto 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>Bem-vindo ao Lacrei Saúde</Title>
      <Image src={peopleHoldingFlag.src} alt="Pessoas segurando a bandeira LGBT" />
      <ButtonContainer>
        <Button href="/about" label="Sobre nós" />
        <Button href="/services" label="Nossos serviços" />
        <Button href="/contact" label="Contate-nos" />
      </ButtonContainer>
    </Container>
  );
}
