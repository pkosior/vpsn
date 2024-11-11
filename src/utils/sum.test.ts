import { expect, test } from "vitest";
import { sum } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("throws error if input is not a number (but pretends to be)", () => {
  expect(() => sum(1, "d" as unknown as number)).toThrow();
});
