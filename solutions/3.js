import { prompt } from '../helper.js';

function validateNumber(number) {
  if (Number.isNaN(number) && Math.abs(firstNumber) > 100000000000000) {
    console.log(
      'Error : number is not a number or is too big / too small (max: 100000000000000)'
    );
    process.exit(1);
  }
}

function promptNumber(message) {
  const number = Number(prompt(message));

  validateNumber(number);

  return number;
}

function askOperator() {
  const tempOperator = promptNumber('Enter the operator : ');

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    askOperator();
  } else {
    return tempOperator;
  }
}

console.log('ADDITION-MASTER ™️');

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

const operator = askOperator();

const firstNumber = promptNumber('Enter the first number : ');

const secondNumber = promptNumber('Enter the second number : ');

switch (operator) {
  case 1:
    console.log('The result of addition is : ', firstNumber + secondNumber);
    break;
  case 2:
    console.log('The result of soustraction is : ', firstNumber - secondNumber);
    break;
  case 3:
    console.log('The result of multiplication is : ', firstNumber * secondNumber);
    break;
  case 4:
    console.log('The result of division is : ', firstNumber / secondNumber);
    break;
}
