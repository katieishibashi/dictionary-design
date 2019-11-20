/**
 * Initialize your data structure here.
 */
const WordDictionary = function () {
  // Because our goal in search is to determine whether
  // a word exists, we sort words in two ways when we initially add them
  // to the dictionary - by length, in alphabetical order, and by name of the word itself
  this.wordsSorted = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.wordsSorted[word] = true;
  // Try alphabetizing
  const firstLetter = word.slice(0, 1);
  if (this.wordsSorted.hasOwnProperty(firstLetter)) {
    this.wordsSorted[firstLetter].push(word);
  } else {
    this.wordsSorted[firstLetter] = [word];
  }
  const { length } = word;
  if (this.wordsSorted.hasOwnProperty(word.length)) {
    this.wordsSorted[word.length].push(word);
  } else {
    this.wordsSorted[word.length] = [word];
  }
}
;

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (this.wordsSorted.word) {
    return true;
  }// Can we find a word with ".."
  if (word.match(/\./g) !== null) {
    // Can we find a word with ".."
    const regex = new RegExp(word, 'g');
    let isMatch = false;
    let match = [];
    // Try to search by first letter
    const firstLetter = word.slice(0, 1);
    if (firstLetter.match(/[a-z]/gmi) !== null) {
      match = this.wordsSorted[firstLetter].filter((wordKey) => regex.test(wordKey) && wordKey.length === word.length);
    }// If that doesn't work, try to search by number of characters
    else if (this.wordsSorted[word.length]) {
      match = this.wordsSorted[word.length].filter((wordKey) => regex.test(wordKey));
    }

    if (match.length > 0) {
      isMatch = true;
    }
    return isMatch;
  }
  return false;
};
