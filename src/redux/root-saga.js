import { all, call } from "redux-saga/effects";
import { questionsListSagas } from "../redux/questions-list/questions-list.sagas";

export default function* rootSaga() {
  yield all([call(questionsListSagas)]);
}
