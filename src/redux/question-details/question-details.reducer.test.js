import QuestionDetailsActionTypes from "./question-details.types";
import questionDetailsReducer from "./question-details.reducer";

const initialState = {
  question: {},
  isFetching: false,
  errorMessage: undefined
};

describe("questionDetailsReducer", () => {
  it("should return initial state", () => {
    expect(questionDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should set isFetching to true if FETCH_QUESTIONDETAILS_START action", () => {
    expect(
      questionDetailsReducer(initialState, {
        type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_START
      }).isFetching
    ).toBe(true);
  });

  it("should set isFetching to false and question to payload if FETCH_QUESTIONDETAILS_SUCCESS", () => {
    const mockQuestion = {
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
    };
    expect(
      questionDetailsReducer(initialState, {
        type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_SUCCESS,
        payload: mockQuestion
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      question: mockQuestion
    });
  });

  it("should set isFetching to false and errorMessage to payload if FETCH_QUESTIONDETAILS_FAILURE", () => {
    expect(
      questionDetailsReducer(initialState, {
        type: QuestionDetailsActionTypes.FETCH_QUESTIONDETAILS_FAILURE,
        payload: "error"
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: "error"
    });
  });
});
