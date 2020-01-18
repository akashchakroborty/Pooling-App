import styled from "styled-components";

export const QuestionsHeader = styled.div`
  text-align: center;
  background: #0d223f;
  max-width: 80vw;
  width: 80%;
  margin: 0 auto;
  border-top: 10px solid #ffc627;
  height: 100px;
  padding-top: 12px;
`;

export const QuestionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  width: 80%;
  margin: 1rem auto;
  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
