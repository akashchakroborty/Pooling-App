import React from "react";
import { shallow } from "enzyme";
import { ModelForm } from "./model-form.component";
import { InputText, FormContainer } from "./model-form.styles";

describe("ModelForm component", () => {
  let mockHistory;
  let mockDispatch;
  let wrapper;

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };
    mockDispatch = jest.fn();

    const mockProps = {
      dispatch: mockDispatch,
      history: mockHistory
    };

    wrapper = shallow(<ModelForm {...mockProps} />);
  });

  it("should render ModelForm component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange when value of InputText is changed", () => {
    const event = {
      preventDefault() {},
      target: {}
    };
    wrapper.find(InputText).simulate("change", event);
    expect.any(Function);
  });

  it("should call handleSubmit when FormContainer is Submited", () => {
    const event = {
      preventDefault() {}
    };
    wrapper.find(FormContainer).simulate("submit", event);
    expect.any(Function);
  });
});
