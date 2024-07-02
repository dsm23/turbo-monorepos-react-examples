import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BarebonesAccordion from ".";

describe("component", () => {
  describe("BarebonesAccordion", () => {
    it("should render correctly", () => {
      const { container } = render(<BarebonesAccordion data={[]} />);

      expect(container).toBeTruthy();
    });
  });
});
