import QuestionsListActionTypes from "./questions-list.types";
const INITIAL_STATE = {
  questions: [],
  isFetching: false,
  errorMessage: undefined
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
    default:
      return state;
  }
};

export default questionsListReducer;
