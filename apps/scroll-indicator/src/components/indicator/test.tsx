import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import Indicator from ".";

describe("component", () => {
  describe("Indicator", () => {
    it("should render correctly", () => {
      const { container } = render(<Indicator scrollPercentage={50} />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
