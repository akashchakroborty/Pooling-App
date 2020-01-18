import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuestionsListActionTypes from "../../redux/questions-list/questions-list.types";

const QuestionsList = ({ dispatch }) => {
  useEffect(() => {
    dispatch({
      type: QuestionsListActionTypes.FETCH_QUESTIONSLIST_START
    });
  }, [dispatch]);

  return <h1>Questions list page</h1>;
};

export default connect()(QuestionsList);
