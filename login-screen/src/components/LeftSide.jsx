import React from 'react';
import styled from 'styled-components';

const LeftSideContainer = styled.div`
  flex: 4;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;


const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  max-width: 100px;
  padding: 100px;
  margin-bottom: 40%;

`;

function LeftSide(props) {
    return (
        <LeftSideContainer>
            <ImageContainer>
                <img src="login.svg" width={450} />
            </ImageContainer>
        </LeftSideContainer>
    );
}

export default LeftSide;