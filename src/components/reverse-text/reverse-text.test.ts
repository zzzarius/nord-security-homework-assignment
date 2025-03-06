import { expect, it, describe } from "vitest";
import { reverseText } from "./reverse-text";

describe("reverseText", () => {
  it("should reverse the input text", () => {
    const input = "Hello";
    const expectedOutput = "olleH";
    expect(reverseText(input)).toBe(expectedOutput);
  });

  it("should handle empty string", () => {
    const input = "";
    const expectedOutput = "";
    expect(reverseText(input)).toBe(expectedOutput);
  });

  it("should handle single character", () => {
    const input = "a";
    const expectedOutput = "a";
    expect(reverseText(input)).toBe(expectedOutput);
  });

  it("should handle spaces", () => {
    const input = "Hello World";
    const expectedOutput = "dlroW olleH";
    expect(reverseText(input)).toBe(expectedOutput);
  });

  it("should handle special characters", () => {
    const input = "123!@#";
    const expectedOutput = "#@!321";
    expect(reverseText(input)).toBe(expectedOutput);
  });
});
