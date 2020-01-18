import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  QuestionContainer,
  QuestionDetails,
  QuestionFooter
} from "./question.styles";

const Question = ({ question, published_at, choices, url }) => {
  return (
    <QuestionContainer>
      <QuestionDetails>
        <h2>{question}</h2>
        <h3>
          Published at : <span>{new Date(published_at).toDateString()}</span>
        </h3>
        <h3>
          Number of choices : <span>{choices.length}</span>
        </h3>
      </QuestionDetails>
      <QuestionFooter>
        <Link to={url}>
          <button>Vote Now</button>
        </Link>
      </QuestionFooter>
    </QuestionContainer>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired
};

export default Question;
