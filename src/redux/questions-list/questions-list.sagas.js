import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import QuestionListActionTypes from "./questions-list.types";
import axios from "axios";

const ROOT_URL = "https://polls.apiblueprint.org";

function poolQuestionListApi() {
  return axios.request({
    method: "get",
    url: `${ROOT_URL}/questions`
  });
}

function addnewQuestionApi(questionData) {
  return axios.request({
    method: "post",
    url: `${ROOT_URL}/questions?page=1`,
    data: JSON.stringify(questionData)
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

export function* addNewQuestionAsync({ payload }) {
  console.log(payload);
  try {
    yield call(addnewQuestionApi, payload.questionData);
    yield put({
      type: QuestionListActionTypes.ADD_NEW_QUESTION_SUCCESS,
      payload: "success"
    });
    yield call(payload.callback);
    yield delay(5000);
    yield put({
      type: QuestionListActionTypes.MESSAGE_HIDE,
      payload: false
    });
  } catch (error) {
    yield put({
      type: QuestionListActionTypes.ADD_NEW_QUESTION_FAILURE,
      payload: "failure"
    });
    yield delay(5000);
    yield put({
      type: QuestionListActionTypes.MESSAGE_HIDE,
      payload: false
    });
  }
}

export function* fetchQuestionsListStart() {
  yield takeLatest(
    QuestionListActionTypes.FETCH_QUESTIONSLIST_START,
    fetchQuestionsListAsync
  );
}

export function* addNewQuestionStart() {
  yield takeLatest(
    QuestionListActionTypes.ADD_NEW_QUESTION_START,
    addNewQuestionAsync
  );
}

export function* questionsListSagas() {
  yield all([call(fetchQuestionsListStart), call(addNewQuestionStart)]);
}
