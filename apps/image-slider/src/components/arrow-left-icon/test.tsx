import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import ArrowLeftIcon from ".";

describe("component", () => {
  describe("ArrowLeftIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<ArrowLeftIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
