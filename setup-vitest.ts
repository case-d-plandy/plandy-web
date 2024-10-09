import "@testing-library/jest-dom";

import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
  vi.mock("zustand");
});
afterEach(() => {
  vi.restoreAllMocks();
});
