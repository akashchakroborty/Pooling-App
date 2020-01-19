import React from "react";
import { VoteSuccessContainer } from "./vote-success.styles";

const VoteSuccess = ({ history }) => {
  return (
    <VoteSuccessContainer>
      <h1>Your vote was successfully placed.</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </button>
    </VoteSuccessContainer>
  );
};

export default VoteSuccess;
