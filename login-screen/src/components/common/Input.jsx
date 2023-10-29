import React from 'react';
import styled from 'styled-components';

const InputContainer= styled.div`
  width  :80% ;
`;

const InputFieldContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width  : 100%;
    padding: 15px;
    border: 1px solid #737B86;
    border-radius: 8px;
    background-color: white;
    margin:0;
    padding: 0px;
`;
const InputField = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #737B86;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 19.80px;
    word-wrap: break-word;
    padding: 17px 5px;
    border-radius: 8px;

`;
const BoldLabel = styled.label`
  font-weight: 600;
`;

function Input({name, type, id, placeholder, icon}) {
    return (
        <InputContainer>
            <BoldLabel htmlFor={id}>
                <p>{name}</p>
            </BoldLabel>
            <InputFieldContainer>
                <InputField
                    type= {type}
                    id= {id}
                    placeholder= {placeholder}
                />
                {icon}
            </InputFieldContainer>
            
        </InputContainer>
    );
}

export default Input;