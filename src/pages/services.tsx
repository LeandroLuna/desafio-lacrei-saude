import React from 'react';
import styled from 'styled-components';
import servicesData from '@/data/ServicesData';
import Container from '@/components/Container';

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
`;

const ServiceItem = styled.li`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export default function Services(){
  return (
    <Container>
      <Title>Nossos serviços</Title>
      <Content>
        Explore nossos serviços e o que oferecemos.
      </Content>
      <ServiceList>
        {servicesData.map((service) => (
          <ServiceItem key={service.id}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
    </Container>
  );
};