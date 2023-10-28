import React from "react";
import styled from "styled-components";
import { useState } from "react";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  flex: 4;
`;

const RightSide = styled.div`
  flex: 6; /* Adjust the ratio to control the partition */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
const LoginContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20x;
  //   box-shadow: 0 2px 4px rgba(100, 100, 100, 0.7);
  width: 90%;
  height: 90%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const LoginCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 90%;
  //   max-width: 1000px;
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Add a shadow to the login card */
`;
const LoginTitle = styled.h2`
  text-align: center;
  font-size: 40px;
`;
const InputField = styled.input`
  width: 90%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: white;
`;

const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;
const TermsMeLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const TermsCheckbox = styled.input`
  margin-right: 5px;
`;

const TermsAndConditionsLink = styled.a`
  color: #f78719;
  margin-left: 10px;
  text-decoration: none;
`;

// const AdditionalLinks = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
// `;

const ChangePasswordLink = styled.a`
  color: #f78719;
  text-decoration: none;
  float: right;
  //   text-align: end;
`;

const RegisterHere = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const RegisterHereLink = styled.a`
  color: #f78719;
  text-decoration: none;
`;
const PasswordToggle = styled.div`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;
`;
const SubmitButton = styled.button`
  align-self: center;
  background-color: #1575a7;
  color: white;
  padding: 15px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 400;
  height: 400;
  max-width: 100px;
  padding: 100px;
`;

const BoldLabel = styled.label`
  font-weight: 600;
`;

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div>
      <LoginContainer>
        <LeftSide>
          <ImageContainer>
            <img src="login.svg" width={450} />
          </ImageContainer>
        </LeftSide>
        <RightSide>
          <LoginContents>
            <LoginCard>
              <LoginTitle>Login</LoginTitle>
              <form>
                <div>
                  <BoldLabel htmlFor="username">
                    <p>Login ID</p>
                  </BoldLabel>
                  <InputField
                    type="text"
                    id="username"
                    placeholder="Enter Login ID"
                  />
                </div>
                <div>
                  <BoldLabel htmlFor="password">
                    <p>Password</p>
                  </BoldLabel>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                  />
                  <PasswordToggle onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </PasswordToggle>
                </div>
                <ChangePasswordLink href="#">
                  Change password
                </ChangePasswordLink>
                <RememberMeLabel>
                  <RememberMeCheckbox type="checkbox" id="rememberMe" />
                  Remember me
                </RememberMeLabel>

                <div>
                  <TermsCheckbox type="checkbox" />
                  <label>
                    Agree To
                    <TermsAndConditionsLink href="#">
                      Terms & Conditions
                    </TermsAndConditionsLink>
                  </label>
                </div>

                <SubmitButton type="submit">Login</SubmitButton>
                <div>
                  Don’t have an account?{" "}
                  <RegisterHereLink href="#">Register Here</RegisterHereLink>
                </div>
              </form>
            </LoginCard>
          </LoginContents>
        </RightSide>
      </LoginContainer>
    </div>
  );
};

export default LoginScreen;
