import { call, put, takeLatest, all } from "redux-saga/effects";
import QuestionListActionTypes from "./questions-list.types";
import axios from "axios";

const ROOT_URL = "https://polls.apiblueprint.org";

function poolQuestionListApi() {
  return axios.request({
    method: "get",
    url: `${ROOT_URL}/questions`
  });
}

export function* fetchQuestionsListAsync() {
  try {
    let { data } = yield call(poolQuestionListApi);
    yield put({
      type: QuestionListActionTypes.FETCH_QUESTIONSLIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: QuestionListActionTypes.FETCH_QUESTIONSLIST_FAILURE,
      payload: error.message
    });
  }
}
export function* fetchQuestionsListStart() {
  yield takeLatest(
    QuestionListActionTypes.FETCH_QUESTIONSLIST_START,
    fetchQuestionsListAsync
  );
}

export function* questionsListSagas() {
  yield all([call(fetchQuestionsListStart)]);
}
