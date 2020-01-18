import { combineReducers } from "redux";
import questionsListReducer from "./questions-list/questions-list.reducer";
import questionDetailsReducer from "./question-details/question-details.reducer";

export default combineReducers({
  questionsList: questionsListReducer,
  questionDetails: questionDetailsReducer
});
