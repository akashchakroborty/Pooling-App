import React from "react";
import { shallow } from "enzyme";
import { QuestionDetails } from "./question-details.component";
import { ChoiceList, ChoiceContainer } from "./question-details.styles";

describe("QuestionDetails component", () => {
  let mockDispatch;
  let mockSelectQuestion;
  let mockIsFetching;
  let mockHistory;
  let mockMatch;
  let wrapper;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockHistory = {
      push: jest.fn()
    };
    mockMatch = {
      params: {
        questionId: 1
      }
    };
    mockSelectQuestion = {
      question: "mock",
      choices: [
        {
          choice: "mock",
          votes: 1,
          url: "mock"
        }
      ]
    };
    mockIsFetching = false;

    const mockProps = {
      dispatch: mockDispatch,
      history: mockHistory,
      match: mockMatch,
      selectQuestion: mockSelectQuestion,
      isFetching: mockIsFetching
    };

    wrapper = shallow(<QuestionDetails {...mockProps} />);
  });

  it("should render QuestionDetails component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render an equal number of ChoiceList as the Selected questions choices prop", () => {
    expect(wrapper.find(ChoiceList).length).toEqual(
      mockSelectQuestion.choices.length
    );
  });

  it("should render Loading if isFetching is true", () => {
    const mockProps = {
      dispatch: mockDispatch,
      history: mockHistory,
      match: mockMatch,
      selectQuestion: {},
      isFetching: true
    };

    const newWrapper = shallow(<QuestionDetails {...mockProps} />);
    expect(newWrapper.exists(".loading")).toBe(true);
  });

  it("should call handleSubmit when ChoiceContainer is Submited", () => {
    const event = {
      preventDefault() {}
    };
    wrapper.find(ChoiceContainer).simulate("submit", event);
    expect.any(Function);
  });

  it("should call handleChoiceOnClick when ChoiceList is clicked", () => {
    const event = {
      preventDefault() {}
    };
    wrapper.find(ChoiceList).simulate("click", event);
    expect.any(Function);
  });
});
