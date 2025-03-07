import { describe, expect, it } from "vitest";
import { getFlagImageSrcFromText } from "./getFlagImageSrcFromText";

describe("getFlagImageSrcFromText", () => {
  it("Return empty country name and /flags/notFound.svg image if no country flag is found", () => {
    expect(getFlagImageSrcFromText("Narnia")).toStrictEqual([
      "/flags/notFound.svg",
      "",
    ]);
  });
  it('Should find Lithuania in the text and return ["/flags/lt.svg", "Lithuania"]', () => {
    expect(
      getFlagImageSrcFromText("It's good to live in Lithuania")
    ).toStrictEqual(["/flags/lt.svg", "Lithuania"]);
  });

  it("Return not found if empty text is given", () => {
    expect(getFlagImageSrcFromText("")).toStrictEqual([
      "/flags/notFound.svg",
      "",
    ]);
  });
});
