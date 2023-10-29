import React, { useState }  from 'react';
import styled from 'styled-components';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

import Input from './common/Input';
import Button from './common/Button';
import CheckBox from './common/CheckBox';

const Form= styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const IconContainer= styled.div`
    color: #737B86;
    display: inline;
    font-size: 20px;
    cursor: pointer;
    margin: 0 15px;
`;
const ChangePasswordLink = styled.a`
  color: #f78719;
  text-decoration: none;
  /* text-align: end; */
`;

const PassContainer= styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #737B86;
    margin-top: 10px;
`

const TermsAndConditionsLink = styled.a`
  color: #f78719;
  margin-left: 10px;
  text-decoration: none;
`;

const TermsContainer= styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
const RegisterContainer= styled.div`
    margin: 15px;
`

const RegisterHereLink = styled.a`
  color: #f78719;
  text-decoration: none;
`;
function FormComponenet(props) {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <Form>
                <Input
                    name= 'Login ID'
                    type="text"
                    id="username"
                    placeholder="Enter Login ID"
                />
                <Input
                    name= 'Password'
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                    icon= {
                            <IconContainer onClick={togglePasswordVisibility}>
                                {showPassword? <AiFillEye/>: <AiFillEyeInvisible/> }
                            </IconContainer>
                            }
                />
                <PassContainer>
                    <CheckBox lable= 'Remember Me'/>
                    <ChangePasswordLink href="#">
                        Change password
                    </ChangePasswordLink>
                </PassContainer>
                <PassContainer>
                <TermsContainer>
                  <CheckBox/>
                    Agree To
                    <TermsAndConditionsLink href="#">
                      Terms & Conditions
                    </TermsAndConditionsLink>
                    </TermsContainer>
                </PassContainer>
                
                <Button/>
                <RegisterContainer>
                  Don’t have an account?{" "}
                  <RegisterHereLink href="#">Register Here</RegisterHereLink>
                </RegisterContainer>
            </Form>
    );
}

export default FormComponenet;