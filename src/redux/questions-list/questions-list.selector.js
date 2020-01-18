import { createSelector } from "reselect";

const selectquestionsList = state => state.questionsList;

export const selectQuestions = createSelector(
  [selectquestionsList],
  questionsList => questionsList.questions
);

export const selectIsQuestionsListFetching = createSelector(
  [selectquestionsList],
  questionsList => questionsList.isFetching
);
