function findMaxOccurringChar(str) {
  const charCount = {};
  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    if (char !== " ") {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
  }

  return maxChar;
}

const inputString = "Online Node.js Compiler";
const maxOccurringChar = findMaxOccurringChar(inputString);

console.log(`The most frequent character is: ${maxOccurringChar}`);
