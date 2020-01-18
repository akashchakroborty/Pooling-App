import styled from "styled-components";

export const QuestionContainer = styled.div`
  background: #0d223f;
  border: 1px solid #888;
  border-radius: 4px;
  -webkit-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
`;

export const QuestionDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  border-bottom: 1px solid #c7c7c7;
  width: 100%;
  h3 {
    font-weight: normal;
  }
`;

export const QuestionFooter = styled.div`
  text-align: right;
  padding: 15px;
`;
