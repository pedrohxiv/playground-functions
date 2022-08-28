// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ', phrase.lenght);
}

// Desafio 4
function concatName(words) {
  // seu código aqui
  return [words.pop(), words[0]].join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (Math.max.apply('', numbers) === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzzChecking(numbers) {
  let strings = '';
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    strings = 'fizzBuzz';
  } else if (numbers % 3 === 0) {
    strings = 'fizz';
  } else if (numbers % 5 === 0) {
    strings = 'buzz';
  } else {
    strings = 'bug!';
  }
  return strings;
}
function fizzBuzz(numbers) {
  // seu código aqui
  let strings = [];
  for (let index = 0; index < numbers.length; index += 1) {
    strings.push(fizzBuzzChecking(numbers[index]));
  }
  return strings;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let newPhrase = '';
  newPhrase = phrase
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return newPhrase;
}

function decode(phrase) {
  // seu código aqui
  let newPhrase = '';
  newPhrase = phrase
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return newPhrase;
}

// Desafio 10
function techList(technologies, names) {
  // seu código aqui
  let array = [];
  if (technologies[0] === undefined) {
    return 'Vazio!';
  }
  technologies.sort();
  for (let index = 0; index < technologies.length; index += 1) {
    array.push({
      tech: technologies[index],
      name: names,
    });
  }
  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
