import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChevronDownIcon from ".";

describe("component", () => {
  describe("ChevronDownIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<ChevronDownIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
