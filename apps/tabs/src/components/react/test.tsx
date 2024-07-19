import { describe, expect, it } from "vitest";
import { render } from "~/test-utils";
import ReactTabs from ".";

describe("component", () => {
  describe("ReactTabs", () => {
    it("should render correctly", () => {
      const { container } = render(<ReactTabs />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
