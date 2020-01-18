import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  QuestionDetailsHeader,
  QuestionDetailsContainer,
  QuestionTitle,
  ChoiceContainer,
  ChoiceList,
  SaveButton
} from "./question-details.styles";
import QuestionDetailsActionTypes from "../../redux/question-details/question-details.types";
import { createStructuredSelector } from "reselect";
import {
  selectQuestion,
  selectIsQuestionDetailsFetching
} from "../../redux/question-details/question-details.selector";

import { calculatePercent } from "./question-details.utils";

const QuestionDetails = ({ dispatch, match, selectQuestion, isFetching }) => {
  const { question, choices } = selectQuestion;

  const [selectedChoice, setSelectedChoice] = useState({
    title: "",
    url: null
  });

  useEffect(() => {
    const { questionId } = match.params;
    dispatch({
      type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_START,
      payload: questionId
    });
  }, [dispatch, match.params]);

  const handleChoiceOnClick = ({ choice, url }) => {
    setSelectedChoice({ ...selectedChoice, title: choice, url });
    console.log(selectedChoice);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Save Clicked");
  };

  return (
    <div>
      <QuestionDetailsHeader>
        <h1>Question Details</h1>
      </QuestionDetailsHeader>
      <QuestionDetailsContainer>
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <Fragment>
            <QuestionTitle>Question: {question}</QuestionTitle>
            <ChoiceContainer onSubmit={handleSubmit}>
              {choices &&
                choices.map((choice, index) => (
                  <ChoiceList
                    key={index}
                    className={`${
                      selectedChoice.title === choice.choice ? " active" : ""
                    }`}
                    onClick={event => {
                      event.preventDefault();
                      handleChoiceOnClick(choice);
                    }}
                  >
                    <span>{choice.choice}</span>
                    <span>{choice.votes}</span>
                    <span className="text-center">
                      {calculatePercent(choice.votes, choices)} %
                    </span>
                    <progress
                      value={Math.round(
                        calculatePercent(choice.votes, choices)
                      )}
                      max="100"
                    ></progress>
                  </ChoiceList>
                ))}
              <SaveButton type="submit">Save vote</SaveButton>
            </ChoiceContainer>
          </Fragment>
        )}
      </QuestionDetailsContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectQuestion: selectQuestion,
  isFetching: selectIsQuestionDetailsFetching
});

export default connect(mapStateToProps)(QuestionDetails);
