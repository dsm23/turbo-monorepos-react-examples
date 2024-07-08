import { describe, expect, it, vi } from "vitest";
import { render } from "~/test-utils";
import App from "./App";

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

class ResizeObserver {
  callback: ResizeObserverCallback;
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

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

vi.stubGlobal("ResizeObserver", ResizeObserver);

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

describe("component", () => {
  describe("App", () => {
    it("should render correctly", () => {
      const { container } = render(<App />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
