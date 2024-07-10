import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) and (max-width: 1199px) {
      max-width: 768px;
    }

    @media (min-width: 480px) and (max-width: 767px) {
       max-width: 480px;
    }

    @media (max-width: 479px) {
      max-width: 100%;
    }
`;

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;
