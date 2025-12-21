import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;
  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("ResizeObserver", ResizeObserver);

vi.stubGlobal("matchMedia", (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // Deprecated
  removeListener: vi.fn(), // Deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

vi.mock("leva", () => ({
  useControls: () => ({ debug: false }),
}));

describe("component", () => {
  describe("App", () => {
    it("should render correctly", () => {
      const { container } = render(<App />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
