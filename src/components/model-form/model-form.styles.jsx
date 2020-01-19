import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;
`;

export const InputTextArea = styled.input`
  padding: 20px;
  margin: 1rem 0;
  resize: both;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const InputText = styled.input`
  padding: 20px;
  margin: 1rem 0;
  font-size: 16px;
`;
