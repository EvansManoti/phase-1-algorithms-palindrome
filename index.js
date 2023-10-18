function isPalindrome(word) {
  // Write your algorithm here
  
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("robot")); 
  console.log(isPalindrome("A man, a plan, a canal, Panama"));
  console.log(isPalindrome("Was it a car or a cat I saw?")); 

}

/* 
  Add your pseudocode here

  Function isPalindrome(word):
  1. Initialize a variable `cleanedWord` to an empty string.
  2. Remove non-letter characters from `word` and convert it to lowercase, then store the result in `cleanedWord`.
  3. Initialize a variable `reversedWord` to an empty string.
  4. Split `cleanedWord` into an array of characters, reverse the array, and join it back into a string, then store the result in `reversedWord`.
  5. If `cleanedWord` is equal to `reversedWord`, return true (indicating that `Word` is a palindrome).
  6. Otherwise, return false (indicating that `Word` is not a palindrome).

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
