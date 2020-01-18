import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuestionDetailsActionTypes from "../../redux/question-details/question-details.types";

const QuestionDetails = ({ dispatch, match }) => {
  useEffect(() => {
    const { questionId } = match.params;
    dispatch({
      type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_START,
      payload: questionId
    });
  }, [dispatch, match.params]);
  return <h1>Question Details page</h1>;
};

export default connect()(QuestionDetails);
