import React from "react";
import { shallow } from "enzyme";
import { Question } from "./question.component";

describe("Question component", () => {
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      question: "",
      published_at: "",
      choices: [],
      url: "",
      history: mockHistory
    };

    wrapper = shallow(<Question {...mockProps} />);
  });

  it("should render Question component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
