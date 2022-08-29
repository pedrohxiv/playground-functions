// Desafio 11
function sizeCheck(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 1;
  }
}
function numberCheck(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return 1;
    }
  }
}
function equalityCheck(arrayNumbers, element, count) {
  for (let j = 0; j < arrayNumbers.length; j += 1) {
    if (element === arrayNumbers[j]) {
      count += 1;
    }
  }
  return count;
}
function repeteadCheck(arrayNumbers, element, count) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    count = 0;
    element = arrayNumbers[i];
    if (equalityCheck(arrayNumbers, element, count) >= 3) {
      return 1;
    }
  }
}
function generatePhoneNumber(arrayNumbers, element, count) {
  // seu código aqui
  if (sizeCheck(arrayNumbers) === 1) {
    return 'Array com tamanho incorreto.';
  }
  if (numberCheck(arrayNumbers) === 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (repeteadCheck(arrayNumbers, element, count) === 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let part1 = `(${arrayNumbers[0]}${arrayNumbers[1]}) `;
  let part2 = `${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}`;
  let part3 = `${arrayNumbers[5]}${arrayNumbers[6]}-`;
  let part4 = `${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
  let numbers = part1 + part2 + part3 + part4;
  return numbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drink) {
  // seu código aqui
  let results = drink.match(/\d+/g);
  let sumNumber = 0;
  for (let index = 0; index < results.length; index += 1) {
    sumNumber += parseInt(results[index], 10);
  }
  if (sumNumber === 1) {
    return `${sumNumber} copo de água`;
  }
  return `${sumNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
