/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  // your code here...
  let arrSentence = sentence.split(' ');
  let reversed = [];

  for (let i = arrSentence.length - 1; i >= 0; i--) {
    reversed.push(arrSentence[i]);
  }


  return reversed.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;



console.log(fibs(90));