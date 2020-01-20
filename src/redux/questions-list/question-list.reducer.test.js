import QuestionsListActionTypes from "./questions-list.types";
import questionsListReducer from "./questions-list.reducer";

const initialState = {
  questions: [],
  isFetching: false,
  errorMessage: undefined,
  newQuestionAddedSuccess: false
};

describe("questionsListReducer", () => {
  it("should return initial state", () => {
    expect(questionsListReducer(undefined, {})).toEqual(initialState);
  });

  it("should set isFetching to true if FETCH_QUESTIONSLIST_START action", () => {
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.FETCH_QUESTIONSLIST_START
      }).isFetching
    ).toBe(true);
  });

  it("should set isFetching to false and questions to payload if FETCH_QUESTIONSLIST_SUCCESS", () => {
    const mockQuestions = [
      {
        question: "Favourite programming language?",
        published_at: "2014-11-11T08:40:51.620Z",
        url: "/questions/1",
        choices: [
          {
            choice: "Swift",
            url: "/questions/1/choices/1",
            votes: 2048
          },
          {
            choice: "Python",
            url: "/questions/1/choices/2",
            votes: 1024
          }
        ]
      }
    ];
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.FETCH_QUESTIONSLIST_SUCCESS,
        payload: mockQuestions
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      questions: mockQuestions
    });
  });

  it("should set isFetching to false and errorMessage to payload if FETCH_QUESTIONSLIST_FAILURE", () => {
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.FETCH_QUESTIONSLIST_FAILURE,
        payload: "error"
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: "error"
    });
  });

  it("should set newQuestionAddedSuccess to Success if ADD_NEW_QUESTION_SUCCESS", () => {
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.ADD_NEW_QUESTION_SUCCESS,
        payload: "success"
      })
    ).toEqual({
      ...initialState,
      newQuestionAddedSuccess: "success"
    });
  });

  it("should set newQuestionAddedSuccess to Failure if ADD_NEW_QUESTION_FAILURE", () => {
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.ADD_NEW_QUESTION_FAILURE,
        payload: "failure"
      })
    ).toEqual({
      ...initialState,
      newQuestionAddedSuccess: "failure"
    });
  });

  it("should set newQuestionAddedSuccess to false if MESSAGE_HIDE", () => {
    expect(
      questionsListReducer(initialState, {
        type: QuestionsListActionTypes.MESSAGE_HIDE,
        payload: false
      })
    ).toEqual({
      ...initialState,
      newQuestionAddedSuccess: false
    });
  });
});
