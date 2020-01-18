import styled from "styled-components";

export const QuestionDetailsHeader = styled.div`
  text-align: center;
  background: #0d223f;
  max-width: 80vw;
  width: 80%;
  margin: 0 auto;
  border-top: 10px solid #ffc627;
  height: 100px;
  padding-top: 12px;
`;

export const QuestionDetailsContainer = styled.div`
  max-width: 80vw;
  width: 80%;
  margin: 0 auto;
  margin: 1rem auto;
`;

export const QuestionTitle = styled.div`
  color: #fff;
  border-radius: 5px;
  font-size: 150%;
  margin: 1rem auto;
  background-color: #0d223f;
  padding: 20px;
  color: #ffc627;
`;

export const ChoiceContainer = styled.form`
  color: #fff;
  font-size: 150%;
  grid-column: col / span 4;
  grid-row: row 2;
`;

export const ChoiceList = styled.div`
  background: #ffc627;
  height: 70px;
  color: black;
  margin-bottom: 2px;
  transition: border-radius 0.1s ease-in-out 0s,
    letter-spacing 0.1s ease-in-out 0s;
  padding: 0 0.5rem;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &.active {
    opacity: 0.7;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  progress {
    width: auto;
    background: black;
  }
`;

export const SaveButton = styled.button`
  float: right;
  margin-top: 1rem;
`;
