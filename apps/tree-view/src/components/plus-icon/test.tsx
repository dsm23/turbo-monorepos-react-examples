import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import PlusIcon from ".";

describe("component", () => {
  describe("PlusIcon", () => {
    it("should render correctly", () => {
      const { container } = render(<PlusIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
