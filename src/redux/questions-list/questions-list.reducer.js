import QuestionsListActionTypes from "./questions-list.types";
const INITIAL_STATE = {
  questions: [],
  isFetching: false,
  errorMessage: undefined,
  newQuestionAddedSuccess: false
};

const questionsListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionsListActionTypes.FETCH_QUESTIONSLIST_START:
      return {
        ...state,
        isFetching: true
      };
    case QuestionsListActionTypes.FETCH_QUESTIONSLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        questions: action.payload
      };
    case QuestionsListActionTypes.FETCH_QUESTIONSLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case QuestionsListActionTypes.ADD_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        newQuestionAddedSuccess: "success"
      };
    case QuestionsListActionTypes.ADD_NEW_QUESTION_FAILURE:
      return {
        ...state,
        newQuestionAddedSuccess: "failure"
      };
    default:
      return state;
  }
};

export default questionsListReducer;
