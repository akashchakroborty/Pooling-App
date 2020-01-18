import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Question from "../question/question.component";

import { QuestionsHeader, QuestionsContainer } from "./questions-list.styles";

import QuestionsListActionTypes from "../../redux/questions-list/questions-list.types";
import { createStructuredSelector } from "reselect";
import {
  selectQuestions,
  selectIsQuestionsListFetching
} from "../../redux/questions-list/questions-list.selector";

const QuestionsList = ({ dispatch, questions, isFetching }) => {
  useEffect(() => {
    dispatch({
      type: QuestionsListActionTypes.FETCH_QUESTIONSLIST_START
    });
  }, [dispatch]);

  return (
    <div>
      <QuestionsHeader>
        <h1>Questions</h1>
      </QuestionsHeader>
      <QuestionsContainer>
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              published_at={question.published_at}
              choices={question.choices}
              url={question.url}
            ></Question>
          ))
        )}
      </QuestionsContainer>
    </div>
  );
};

QuestionsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestions,
  isFetching: selectIsQuestionsListFetching
});

export default connect(mapStateToProps)(QuestionsList);
