import React, { useContext, useState } from "react";
import { useFormik } from 'formik';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  InputWrapper,
  MutedLink,
  FieldContainer,
  FormSuccess,
  FieldError
} from "./common";
import { Button } from "../Button";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("http://localhost:5000/api/user/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error", error);

  
  return (
    <BoxContainer>
      <FormSuccess>  {success ? success : ""} </FormSuccess>
      <FormContainer onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <FieldContainer>
          <Input name="fullName" type="text" placeholder="Full Name"
              value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}
          </FieldError>
          </FieldContainer>
          <FieldContainer>
          <Input name="email" type="email" placeholder="Email"
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
          </FieldContainer>
          <FieldContainer>
          <Input name="password" type="password" placeholder="Password"
              value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
          </FieldContainer>
          <FieldContainer>
            <Input name="confirmPassword" type="password" placeholder="Confirm Password"
                value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <FieldError>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}
              </FieldError>
            </FieldContainer>
        </InputWrapper>

        <Button type="submit" primary="true" round="true" css={`width: 40%; margin: 0 auto; text-align: center;`} disabled={!formik.isValid} >Sign Up</Button>
        
      </FormContainer>
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}