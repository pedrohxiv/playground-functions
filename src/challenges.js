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
  let newPhrase = [];
  for (let index = 0; index < phrase.length; index += 1) {
    newPhrase.push(phrase[index]);
    if (phrase[index] === 'a') {
      newPhrase.pop();
      newPhrase.push('1');
    }
    if (phrase[index] === 'e') {
      newPhrase.pop();
      newPhrase.push('2');
    }
    if (phrase[index] === 'i') {
      newPhrase.pop();
      newPhrase.push('3');
    }
    if (phrase[index] === 'o') {
      newPhrase.pop();
      newPhrase.push('4');
    }
    if (phrase[index] === 'u') {
      newPhrase.pop();
      newPhrase.push('5');
    }
  }

  return newPhrase.join('');
}

function decode(phrase) {
  // seu código aqui
  let newPhrase = [];
  for (let index = 0; index < phrase.length; index += 1) {
    newPhrase.push(phrase[index]);
    if (phrase[index] === '1') {
      newPhrase.pop();
      newPhrase.push('a');
    }
    if (phrase[index] === '2') {
      newPhrase.pop();
      newPhrase.push('e');
    }
    if (phrase[index] === '3') {
      newPhrase.pop();
      newPhrase.push('i');
    }
    if (phrase[index] === '4') {
      newPhrase.pop();
      newPhrase.push('o');
    }
    if (phrase[index] === '5') {
      newPhrase.pop();
      newPhrase.push('u');
    }
  }
  return newPhrase.join('');
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
