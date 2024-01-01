const printFishBash = require("./fishBash");

let consoleLogMock = [];
beforeEach(() => {
  console.log = jest.fn((output) => {
    consoleLogMock.push(output);
  });
});

afterEach(() => {
  consoleLogMock = [];
});

test("Print Fish Bash Test: 15 numbers", () => {
  printFishBash(15);

  expect(consoleLogMock).toEqual([
    1,
    2,
    "fish",
    4,
    " bash",
    "fish",
    7,
    8,
    "fish",
    " bash",
    11,
    "fish",
    13,
    14,
    "fish bash",
  ]);
});
