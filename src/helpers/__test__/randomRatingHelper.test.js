import { startRandomRating, stopRandomRating } from "../randomRatingHelper";

describe("randomRatingHelper", () => {
  describe("startRandomRating", () => {
    it("should call 'setInterval' method", () => {
      const mockFn = jest.spyOn(window, "setInterval");

      startRandomRating();
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe("stopRandomRating", () => {
    it("should call 'clearInterval' method", () => {
      const mockFn = jest.spyOn(window, "clearInterval");

      stopRandomRating();
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
