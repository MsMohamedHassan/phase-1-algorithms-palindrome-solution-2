function isPalindrome(word) {
  //iterate from the beginning to the middle 
  // racecar 7/2 == 3.5
  // aaaaaa 6/2 ==3
  for (let i = 0; i < word.length / 2; i++){
   //Check each letter to the corresponding  letter from the end 
   const j = word.length - 1 - i;
   //If any letters don't match,return false.
   if (word[i] !== word[j]) {
    // if the letters don't match, return false
    return false;
  }
  }
// if we reach the middle, and all the letters match, return true
return true;
}
/* 
  r a c e c a r
  0 1 2 3 4 5 6 
  i           j

  r a c e c a r
  0 1 2 3 4 5 6 
    i       j

  r a c e c a r
  0 1 2 3 4 5 6 
      i   j

 r a c e c a r
 0 1 2 3 4 5 6 
       ij



  Add your pseudocode here
  make a function that returns true if a word is a palindrome.Meaning
   if the first letter is the same as last letter, and the second letter 
   is the same as the second to last letter, etc. until we reach the middle,
   return true.

   iterate from the beginning to the middle 
   Check each letter to the corresponding  letter from the end 
    If any letters don't match,return false.

    return true.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
