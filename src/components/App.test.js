import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
  describe("render()", () => {
    it("renders the Box", () => {
      const component = render(<App />);
      expect(component.findByTestId("app-box")).toBeTruthy();
    });
  });
});
