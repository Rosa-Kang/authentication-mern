import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

`;
export const InputWrapper = styled.div`
    margin-bottom: 1.2em;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin: 1.4em 0 0;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #F26A2E;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  padding: 0 0.5em;
  padding: 0px 10px;
  transition: all, 200ms ease-in-out;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(241, 196, 15, 1);
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  `;

export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
  min-height: 18px;
`;

export const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;
