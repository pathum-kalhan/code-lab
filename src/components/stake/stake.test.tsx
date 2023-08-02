import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import StakeInput from "./stake-input";
import { StakeProvider } from "../../context/Stake";

describe("stakeInput", () => {
  const getRenderedComponent = () => {
    render(
      <StakeProvider>
        <StakeInput fieldName="stake" data-testid="stake-input" />
      </StakeProvider>
    );
  };

  it("should render correctly", () => {
    getRenderedComponent();

    expect(screen.getByTestId("stake-input")).toBeInTheDocument();
  });

  it("When the input is on focus stayFocused should be true", () => {
    getRenderedComponent();

    const input = screen.getByTestId("stake-input");

    fireEvent.focus(input);
    expect(input).toHaveFocus();

    // check stayFocused is true
    
  });
});
