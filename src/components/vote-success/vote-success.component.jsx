import React from "react";
import { Link } from "react-router-dom";
import { VoteSuccessContainer } from "./vote-success.styles";

const VoteSuccess = () => {
  return (
    <VoteSuccessContainer>
      <h1>Your vote was successfully placed.</h1>
      <Link to={`/`}>
        <button>Go Back</button>
      </Link>
    </VoteSuccessContainer>
  );
};

export default VoteSuccess;
