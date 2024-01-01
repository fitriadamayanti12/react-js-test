const { sortAscending, sortDescending } = require("./sortArray");

test("Sort Ascending Test", () => {
  const inputArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortAscending([...inputArray]);
  const expectedArray = [1, 2, 5, 5, 6, 9];
  expect(sortedArray).toEqual(expectedArray);
});

test("Sort Descending Test", () => {
  const inputArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortDescending([...inputArray]);
  const expectedArray = [9, 6, 5, 5, 2, 1];
  expect(sortedArray).toEqual(expectedArray);
});
