import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import ArrowRightIcon from ".";

describe("component", () => {
  describe("ArrowRightIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<ArrowRightIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
