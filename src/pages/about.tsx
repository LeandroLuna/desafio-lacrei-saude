import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAbout, AboutProvider } from '@/contexts/AboutContext';
import Button from '@/components/Button';
import Container from '@/components/Container';

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: inherit;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 1.6;

  a {
    display: block;
    align-self: center;
  }
`;

const AboutContent = () => {
  const { details } = useAbout();
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedDetails, setFetchedDetails] = useState<string>('');

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await new Promise<{ data: string }>((resolve) => {
        setTimeout(() => resolve({ data: 'Estamos continuamente nos esforçando para melhorar o acesso e os serviços de saúde para todos.' }), 4000);
      });
      setFetchedDetails(response.data);
      setLoading(false);
    };

    fetchDetails();
  }, []);

  return (
    <Container>
      <Title>Sobre Lacrei Saúde</Title>
      <Content>
        <p>{details}</p>
        {loading ? <p>Carregando...</p> : <p>{fetchedDetails}</p>}
        <Button href="https://lacreisaude.com.br" label="Conheça mais sobre a ONG" target />
      </Content>
    </Container>
  );
};

const AboutPage = () => (
  <AboutProvider>
    <AboutContent />
  </AboutProvider>
);

export default AboutPage;