import React from "react";
import { shallow } from "enzyme";
import { QuestionsList } from "./questions-list.component";
import Question from "../question/question.component";

describe("QuestionsList component", () => {
  let mockDispatch;
  let mockQuestions;
  let mockIsFetching;
  let wrapper;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockQuestions = [
      {
        question: "mock",
        published_at: "mock",
        choices: [],
        url: "mock"
      }
    ];
    mockIsFetching = false;

    const mockProps = {
      dispatch: mockDispatch,
      questions: mockQuestions,
      isFetching: mockIsFetching
    };

    wrapper = shallow(<QuestionsList {...mockProps} />);
  });

  it("should render QuestionsList component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render an equal number of Question components as the questions prop", () => {
    expect(wrapper.find(Question).length).toEqual(mockQuestions.length);
  });

  it("should render Loading if isFetching is true", () => {
    const mockProps = {
      questions: [],
      isFetching: true,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<QuestionsList {...mockProps} />);
    expect(newWrapper.exists(".loading")).toBe(true);
  });
});
