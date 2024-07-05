import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("component", () => {
  describe("App", () => {
    it("should render correctly", () => {
      const { container } = render(<App />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
