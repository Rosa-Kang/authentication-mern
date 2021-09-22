import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  InputWrapper,
  MutedLink,
} from "./common";
import { Button } from "../Button";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <InputWrapper css={`margin-top:1.2em`}>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        </InputWrapper>
        <Button primary="true" round="true" type="submit" css={`width: 40%; margin: 0 auto; text-align: center;`}>Sign In</Button>
      </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}