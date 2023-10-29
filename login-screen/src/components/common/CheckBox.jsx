import React from 'react';
import styled from 'styled-components';

const Check = styled.input`
  margin-right: 5px;
    border: 0.5px solod #737B86;
    border-radius: 5px;
    font-size: 15px;

`;
const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;


function CheckBox({lable}) {
    return (
          <Label>
            <Check type="checkbox" id="rememberMe" />
            {lable}
        </Label>
    );
}

export default CheckBox;