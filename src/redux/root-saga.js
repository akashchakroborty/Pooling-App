import { all, call } from "redux-saga/effects";
import { questionsListSagas } from "../redux/questions-list/questions-list.sagas";
import { questionDetailsSagas } from "../redux/question-details/question-details.sagas";

export default function* rootSaga() {
  yield all([call(questionsListSagas), call(questionDetailsSagas)]);
}
