/*
 * Simple tests for the Table component.
 * The app uses @mui/x-data-grid for the table, which is why
 * the tests don't test any of the actual table elements.
 * Data fetching success is tested via a text that displays the
 * number of current rows that are in the table.
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Table } from "./Table";

jest.mock("../utils/fetchApiData");

describe("<Table />", () => {
  let component;

  beforeEach(() => {
    component = render(<Table type="User" />);
  });

  describe("rendering", () => {
    describe("without data", () => {
      it("renders an empty table", () => {
        expect(component.getByTestId("table")).toBeTruthy();
        expect(component.getByTestId("nr-items").innerHTML).toBe(
          "There are 0 items"
        );
      });
    });
  });

  describe("with data", () => {
    afterEach(async () => {
      // Reset click count for mocked api call
      await act(async () => {
        fireEvent.click(component.getByText("Load more"));
      });
    });

    it("renders data after loading it", async () => {
      await act(async () => {
        fireEvent.click(component.getByText("Load more"));
      });

      expect(component.getByTestId("nr-items").innerHTML).toBe(
        "There are 3 items"
      );
    });

    it("renders error message on error", async () => {
      await act(async () => {
        fireEvent.click(component.getByText("Load more"));
      });

      await act(async () => {
        fireEvent.click(component.getByText("Load more"));
      });

      expect(component.getByTestId("nr-items").innerHTML).toBe(
        "There are 3 items"
      );
      expect(component.getByTestId("error-msg")).toBeTruthy();
    });
  });
});
