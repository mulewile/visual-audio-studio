import styled from "styled-components";
import { useEffect, useRef } from "react";

export const StyledFormContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 7rem;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: none;

    box-sizing: border-box;
    background-color: #f4f4f4;
    border-bottom: 1px solid grey;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  fieldset {
    padding: 15px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export default function Form({ onSubmit, children }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, []);

  return (
    <StyledForm ref={formRef} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}
