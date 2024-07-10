import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Popup from '@/components/Popup';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: white;
  color: rgb(1, 135, 98);
  padding: 10px 20px;
  border: 2px solid rgb(1, 135, 98);
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: ease all 0.2s;
  min-width: 30%;
  align-self: center;

  &:hover {
    background-color: rgb(0, 119, 86);
    color: white;
  }
`;

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowPopup(true);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Title>Contate-nos</Title>
      <Content>
        Entre em contato conosco para qualquer dúvida ou questão.
      </Content>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="E-mail" required />
        <TextArea placeholder="Mensagem" rows={5} required />
        <Button type="submit">Enviar mensagem</Button>
      </Form>
      {showPopup && <Popup message="Sua mensagem foi enviada com sucesso!" onClose={handleClosePopup} />}
    </Container>
  );
};