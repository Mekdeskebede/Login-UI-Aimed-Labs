import React from 'react';
import styled from 'styled-components';
const SubmitButton = styled.button`
  align-self: center;
  background-color: #1575a7;
  color: white;
  padding: 15px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

function Button(props) {
    return (
        <SubmitButton type="submit">Login</SubmitButton>
    );
}

export default Button;