import React from 'react';
import styled from 'styled-components';

import FormComponenet from './FormComponenet';



const LoginCardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 52.80px; 
`;

function LoginCard() {

    

    return (
        <LoginCardContainer>
            <LoginTitle>Login</LoginTitle>
            <FormComponenet/>
        </LoginCardContainer>
    );
}

export default LoginCard;