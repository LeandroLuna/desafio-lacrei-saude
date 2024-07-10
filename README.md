# Desafio Lacrei Saúde

Olá! Este projeto foi desenvolvido como parte do desafio de voluntariado em Tech Lead da Lacrei Saúde. O objetivo é revolucionar o acesso à saúde para a comunidade LGBTQIAPN+ por meio de uma experiência web acolhedora e interativa.

## Desafio

O desafio consistia em desenvolver duas páginas web interativas com roteamento entre elas, refletindo a essência da Lacrei Saúde. Aqui estão os elementos que implementei:

- **Header e footer:** elementos de design que refletem a natureza acolhedora da Lacrei Saúde.
- **Três botões:** cada um com uma funcionalidade única, adicionando interatividade e fazendo link com páginas da Lacrei Saúde.
- **Conformidade com o guia de estilo:** segui rigorosamente o guia de estilo para garantir a coesão visual e o alinhamento com a marca.
- **Teste e responsividade:** realizei testes para garantir a responsividade e documentei todo o processo no README.
- **Deploy:** fiz o deploy da aplicação no Vercel.

## Especificações Técnicas

- **Framework:** Next.js
- **Linguagem:** TypeScript
- **Estilização:** Styled-Components
- **Testes Unitários:** Jest
- **Testes End-to-End:** Cypress
- **Responsividade:** garanti que as páginas são visualizáveis em dispositivos móveis e desktops.

## Documentação do Projeto

### Páginas Desenvolvidas

#### Página Inicial

- **Header:** reflete a natureza acolhedora da Lacrei Saúde.
- **Conteúdo principal:** introdução à Lacrei Saúde e botões de navegação, incluindo uma imagem ilustrativa.
- **Footer:** informações de direitos autorais.

#### Página Sobre

- **Header:** consistente com a página inicial.
- **Conteúdo principal:** link com as informações sobre a missão e os valores da Lacrei Saúde.
- **Footer:** consistente com a página inicial.

#### Página de Serviços

- **Header:** consistente com a página inicial.
- **Conteúdo principal:** informações sobre os serviços oferecidos pela Lacrei Saúde, incluindo uma lista de serviços.
- **Footer:** consistente com a página inicial.

#### Página de Contato

- **Header:** consistente com a página inicial.
- **Conteúdo principal:** informações para contato, incluindo um formulário com popup ao enviar a mensagem.
- **Footer:** consistente com a página inicial.

### Botões e interatividade

1. **Botão 1:** link para a página de sobre.
2. **Botão 2:** link para a página de serviços.
3. **Botão 3:** link para a página de contato.

### Implementações adicionais

- **Hook de tema:** implementei um hook personalizado para alternar entre os temas claro e escuro, com persistência usando localStorage.
- **State Management:** gerenciei o estado da aplicação utilizando hooks e context API.
- **Container Global:** criei um componente Container reutilizável para padronizar o layout em todas as páginas.

### Testes

- Realizei testes unitários utilizando Jest para garantir a funcionalidade dos botões e a navegação entre as páginas.
- Realizei testes end-to-end utilizando Cypress para verificar a funcionalidade geral da aplicação.
- Verifiquei a responsividade em vários dispositivos usando as ferramentas de desenvolvimento do Chrome.

### Deploy

A aplicação foi implantada na plataforma Vercel. Você pode visualizá-la [aqui](https://desafio-lacrei-saude-smoky.vercel.app).

## Instruções para Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-lacrei-saude.git
   cd desafio-lacrei-saude
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

5. Para executar os testes unitários:
   ```bash
   npm run test
   ```

6. Para executar os testes end-to-end com Cypress:
   ```bash
   npm run e2e
   ```

## Conclusão

Este projeto demonstra minha capacidade de desenvolver uma aplicação web responsiva e interativa, seguindo diretrizes de estilo rigorosas e incorporando feedback para criar uma experiência amigável ao usuário. Estou animado com a oportunidade de contribuir para a Lacrei Saúde e apoiar sua missão.