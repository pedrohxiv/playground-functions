// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let count = 0;
  let element = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
    element = arrayNumbers[i];
    for (let j = 0; j < arrayNumbers.length; j += 1) {
      if (element === arrayNumbers[j]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numbers = `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
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
