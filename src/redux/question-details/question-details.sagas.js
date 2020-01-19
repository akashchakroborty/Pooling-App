import { call, put, takeLatest, all } from "redux-saga/effects";
import QuestionDetailsActionTypes from "./question-details.types";
import axios from "axios";

const ROOT_URL = "https://polls.apiblueprint.org";

function poolQuestionDetailsApi(id) {
  return axios.request({
    method: "get",
    url: `${ROOT_URL}/questions/${id}`
  });
}

function placeVoteApi(choice) {
  return axios.request({
    method: "post",
    url: `${ROOT_URL}${choice}`
  });
}

export function* fetchQuestionDetailsAsync(action) {
  try {
    let { data } = yield call(poolQuestionDetailsApi, action.payload);
    yield put({
      type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_FAILURE,
      payload: error.message
    });
  }
}

export function* placeVoteAsync({ payload }) {
  try {
    yield call(placeVoteApi, payload.url);
    yield call(payload.callback);
    yield put({
      type: QuestionDetailsActionTypes.PLACE_VOTE_SUCCESS
    });
  } catch (error) {
    yield put({
      type: QuestionDetailsActionTypes.PLACE_VOTE_FAILURE
    });
  }
}

export function* fetchQuestionDetailsStart() {
  yield takeLatest(
    QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_START,
    fetchQuestionDetailsAsync
  );
}

export function* placeVoteStart() {
  yield takeLatest(QuestionDetailsActionTypes.PLACE_VOTE_START, placeVoteAsync);
}

export function* questionDetailsSagas() {
  yield all([call(fetchQuestionDetailsStart), call(placeVoteStart)]);
}
