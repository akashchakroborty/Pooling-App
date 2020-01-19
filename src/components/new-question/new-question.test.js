import React from "react";
import { shallow } from "enzyme";
import { NewQuestion } from "./new-question.component";
import {
  AddNewButton,
  CloseButton,
  SuccessMessage,
  ErrorMessage
} from "./new-question.styles";

describe("NewQuestion component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      newQuestionAddedSuccess: false
    };

    wrapper = shallow(<NewQuestion {...mockProps} />);
  });

  it("should render NewQuestion component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call openModal when AddNewButton is clicked", () => {
    wrapper.find(AddNewButton).simulate("click");
    expect.any(Function);
  });

  it("should call closeModal when CloseButton is clicked", () => {
    wrapper.find(CloseButton).simulate("click");
    expect.any(Function);
  });

  it("should render SuccessMessage if newQuestionAddedSuccess is success", () => {
    const mockProps = {
      newQuestionAddedSuccess: "success"
    };

    const newWrapper = shallow(<NewQuestion {...mockProps} />);
    expect(newWrapper.exists(SuccessMessage)).toBe(true);
  });

  it("should render ErrorMessage if newQuestionAddedSuccess is failure", () => {
    const mockProps = {
      newQuestionAddedSuccess: "failure"
    };

    const newWrapper = shallow(<NewQuestion {...mockProps} />);
    expect(newWrapper.exists(ErrorMessage)).toBe(true);
  });
});
