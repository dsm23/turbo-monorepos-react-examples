import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import MinusIcon from ".";

describe("component", () => {
  describe("MinusIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<MinusIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
