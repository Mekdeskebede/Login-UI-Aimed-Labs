import React from 'react';
import styled from 'styled-components';
import LoginCard from './LoginCard';

const RightContainer = styled.div`
    flex: 6; /* Adjust the ratio to control the partition */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

const LoginContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 90%;
    height: 90%;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16); 
    border-radius: 12px
`;

function RightSide(props) {
    return (
        <RightContainer>
            <LoginContents>
                <LoginCard/>
            </LoginContents>
        </RightContainer>
    );
}

export default RightSide;