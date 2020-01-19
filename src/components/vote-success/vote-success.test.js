import React from "react";
import { shallow } from "enzyme";
import VoteSuccess from "./vote-success.component";

describe("VoteSuccess component", () => {
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      history: mockHistory
    };

    wrapper = shallow(<VoteSuccess {...mockProps} />);
  });

  it("should render VoteSuccess component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
