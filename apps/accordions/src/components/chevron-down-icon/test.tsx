import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import ChevronDownIcon from ".";

describe("component", () => {
  describe("ChevronDownIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<ChevronDownIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
