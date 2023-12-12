/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let length = 0;
  
  if (str1.length > str2.length) {
    length = str1.length;
  } else if (str2.length > str1.length) {
    length = str2.length;
  } else {
    length = str1.length;
  }

  for (let i = 0; i < length; i++) {
    if (!str1.toLowerCase().includes(str2.toLowerCase()[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
