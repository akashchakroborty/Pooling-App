import React, { useState } from "react";
import {
  ModelContainer,
  AddNewButton,
  SuccessMessage,
  ErrorMessage,
  CloseButton
} from "./new-question.styles";
import { connect } from "react-redux";

import ModelForm from "../model-form/model-form.component";

import { createStructuredSelector } from "reselect";
import { selectisNewQuestionAdded } from "../../redux/questions-list/questions-list.selector";

if (process.env.NODE_ENV !== "test") ModelContainer.setAppElement("#root");

const NewQuestion = ({ newQuestionAddedSuccess }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {newQuestionAddedSuccess && newQuestionAddedSuccess === "success" ? (
        <SuccessMessage>New question created successfully!</SuccessMessage>
      ) : null}
      {newQuestionAddedSuccess && newQuestionAddedSuccess === "failure" ? (
        <ErrorMessage>
          Error occurred while creating new question !
        </ErrorMessage>
      ) : null}
      <AddNewButton onClick={openModal}>Add New Question</AddNewButton>

      <ModelContainer isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModelForm />
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModelContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newQuestionAddedSuccess: selectisNewQuestionAdded
});

export default connect(mapStateToProps)(NewQuestion);
