import { createSelector } from "reselect";

const selectquestionDetails = state => state.questionDetails;

export const selectQuestion = createSelector(
  [selectquestionDetails],
  questionDetails => questionDetails.question
);

export const selectIsQuestionDetailsFetching = createSelector(
  [selectquestionDetails],
  questionDetails => questionDetails.isFetching
);
