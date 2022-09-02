/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  // your code here...
  let uniques = [];

  while (array.length > 0) {
    let firstElem = array.shift();
    if (uniques.indexOf(firstElem) === -1) {
      uniques.push(firstElem);
    }
  }

  return uniques;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
