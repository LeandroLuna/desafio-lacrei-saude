import React from 'react';
import Button from '@/components/Button';
import styled from 'styled-components';
import Container from '@/components/Container';
import Image from 'next/image';
import peopleHoldingFlag from '../../public/people-holding-flag.png';

const Title = styled.h1`
  padding: 2rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  object-fit: fill;
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
      <ImageContainer>
        <StyledImage src={peopleHoldingFlag} alt="Pessoas segurando a bandeira LGBT" height={400} width={600} />
      </ImageContainer>
      <ButtonContainer>
        <Button href="/about" label="Sobre nós" />
        <Button href="/services" label="Nossos serviços" />
        <Button href="/contact" label="Contate-nos" />
      </ButtonContainer>
    </Container>
  );
}