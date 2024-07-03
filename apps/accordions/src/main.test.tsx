import { describe, it, expect, vi } from "vitest";

vi.mock("./App", () => ({
  __esModule: true,
  default: () => <div>Hello, World!</div>,
}));

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

describe("react tree root, main", () => {
  it("calls document.getElementById once", async () => {
    document.getElementById = vi.fn();

    await import("./main");

    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith("root");
  });
});
