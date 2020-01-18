import { combineReducers } from "redux";
import questionsListReducer from "./questions-list/questions-list.reducer";

export default combineReducers({
  questionsList: questionsListReducer
});
