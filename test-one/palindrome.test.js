const isPalindrome = require("./palindrome");

test('Palindrome Test: "A man a plan a canal Panama"', () => {
  const result = isPalindrome("A man a plan a canal Panama");
  expect(result).toBe(true);
});

test('Palindrome Test: "Hello, World!"', () => {
  const result = isPalindrome("Hello, World!");
  expect(result).toBe(false);
});

test('Palindrome Test: "Was it a car or a cat I saw?"', () => {
  const result = isPalindrome("Was it a car or a cat I saw?");
  expect(result).toBe(true);
});
