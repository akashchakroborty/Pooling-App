import QuestionDetailsActionTypes from "./question-details.types";
const INITIAL_STATE = {
  question: {},
  isFetching: false,
  errorMessage: undefined
};

const questionDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_START:
      return {
        ...state,
        isFetching: true
      };
    case QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        question: action.payload
      };
    case QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default questionDetailsReducer;
