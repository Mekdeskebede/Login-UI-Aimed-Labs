import React from 'react';
import styled from 'styled-components';
import RightSide from '../components/RightSide';
import LeftSide from '../components/LeftSide';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

function LoginPage(props) {
    return (
        <LoginContainer>
            <LeftSide/>
            <RightSide/>
        </LoginContainer>
    );
}

export default LoginPage;