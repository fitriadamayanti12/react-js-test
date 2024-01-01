/**
 * Soal:
 * Buatlah fungsi dengan input string
 * jika string tersebut dibalik
 * dan tetap sama dengan string
 * yang diinputkan maka return true
 * jika tidak return false
 */

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase(); // Hanya mempertahankan karakter alfabet
  const len = cleanedStr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
console.log(isPalindrome("Was it a car or a cat I saw?"));

module.exports = isPalindrome;
