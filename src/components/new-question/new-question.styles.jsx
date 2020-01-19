import styled from "styled-components";
import Modal from "react-modal";

export const ModelContainer = styled(Modal)`
  max-width: 80vw;
  width: 80%;
  text-align: center;
  position: absolute;
  top: 43%;
  left: 10%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: #0d223f;
`;

export const AddNewButton = styled.button`
  margin: 0 auto;
  margin: 1rem auto;
  display: flex;
`;

export const SuccessMessage = styled.div`
  margin: 1rem 0;
  color: #0d223f;
  text-align: center;
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  margin: 1rem 0;
  color: red;
  text-align: center;
  font-size: 20px;
`;

export const CloseButton = styled.button`
  margin: 1rem 0;
`;
