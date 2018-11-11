import { getSortedList } from "../listHelper";

describe("listHelper", () => {
  describe("getSortedlist", () => {
    const list = {
      movie1: { rating: 4 },
      movie2: { rating: 8 },
      movie3: { rating: 6 }
    };

    it("should return sorted object list", () => {
      let sortedList = getSortedList(list, "rating"),
        result = ["movie2", "movie3", "movie1"];

      expect(Object.keys(list).sort(sortedList)).toEqual(result);
    });
  });
});
