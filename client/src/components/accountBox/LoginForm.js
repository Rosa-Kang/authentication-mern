import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  InputWrapper,
  MutedLink,
  FormError
} from "./common";
import { Button } from "../Button";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
})

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("http://localhost:5000/api/v1/login", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

    if (response) {
      alert("Welcome back in. Authenticating...");
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
       <FormError>{error ? error : ""}</FormError>
      <FormContainer>
        <InputWrapper css={`margin-top:1.2em`}>
        <Input name="email" value={formik.values.email} onChange={formik.handleChange} type="email" placeholder="Email" />
        <Input name="password" value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Password" />
        </InputWrapper>
        <Button primary="true" round="true" type="submit" disabled={!formik.isValid} css={`width: 40%; margin: 0 auto; text-align: center;`}>Sign In</Button>
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