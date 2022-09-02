function isInside(array, ele) {
  let result = array.indexOf(ele);

  return result !== -1;
}

//
console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false


console.log('//////')
function reverseStr(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Examples:
//
console.log(reverseStr('bootcamp')); //=> 'pmactoob'
console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'

console.log('////////')
function luckySevens(max) {
  let result = [];
  for (let i = 7; i <= max; i++) {
    if (i % 7 === 0) {
      result.push(i);
    }
  }

  return result;
}

// Examples:
//
console.log(luckySevens(25)); // => [ 7, 14, 21 ]
console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

console.log('////////');

function copyMachine(element, num) {
  let filledWithElem = [];
  let i = 0;
  while (i < num) {
    filledWithElem.push(element)
    i++;
  }

  return filledWithElem;
}

// Examples:
//
console.log(copyMachine('candy', 0)); // => []
console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]


console.log('////');
function everyOtherWords(sentence) {
 let arrSentence = sentence.split(' ');
 let everyOtherWord = [];
  for (let i = 0; i < sentence.length; i += 2) {
    everyOtherWord.push(arrSentence[i])
  }

  return everyOtherWord;
}

// Examples:
//
console.log(everyOtherWords('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
console.log(everyOtherWords('the weather is wonderful')); // => [ 'the', 'is' ]

console.log('////////');
function wordYeller(sentence) {
  let punctuations = ['.', ',', '!', '?', ';', ':'];
  let arrSentence = sentence.split(' ');
  let resultSentence = [];

  for (let i = 0; i < arrSentence.length; i++) {
    let wordInSentence = arrSentence[i]

    if (punctuations.includes(wordInSentence[wordInSentence.length - 1])) {
      resultSentence.push(arrSentence[i]);
    } else {
      resultSentence.push(arrSentence[i] + '!');
    }
  }

  return resultSentence.join(' '); 
}

// Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
console.log(yelledWords === "Stop! it! now! Please, wont! you! stop?"); // => true

// Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"); // => true