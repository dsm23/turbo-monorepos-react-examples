import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import StarIcon from ".";

describe("component", () => {
  describe("Star rating", () => {
    it("should render correctly", () => {
      const { container } = render(<StarIcon />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Star rating", () => {
    it("should render, filled, correctly", () => {
      const { container } = render(<StarIcon filled />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
