import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import QuestionsListActionTypes from "../../redux/questions-list/questions-list.types";

import { FormContainer, InputTextArea, InputText } from "./model-form.styles";

const ModelForm = ({ dispatch, history }) => {
  const [question, setQuestion] = useState({
    questionTitle: "",
    choices: ""
  });

  const { questionTitle, choices } = question;

  const getChoicesArray = textchoises => textchoises.trim().split(/\s*,\s*/);

  const handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: QuestionsListActionTypes.ADD_NEW_QUESTION_START,
      payload: {
        callback: () => {
          history.push(`/`);
        },
        questionData: {
          question: questionTitle,
          choices: getChoicesArray(choices)
        }
      }
    });
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="questionTitle"
          placeholder="Type new question"
          value={questionTitle}
          onChange={handleChange}
          required
        />
        <InputTextArea
          type="textarea"
          name="choices"
          placeholder="List the choices followed by a coma. Example: A, B, C, D"
          value={choices}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </FormContainer>
    </div>
  );
};

ModelForm.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect()(ModelForm));
