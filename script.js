import { prompt } from "./helper.js";

// 🦁 Crée une fonction `validateNumber`
// 🦁 Elle prendra en paramètre `number`
// 🦁 Si `number` n'est pas un nombre ou est trop grand / trop petit (max: 100000000000000)
// 🦁 Alors affiche "Error : number is not a number or is too big / too small (max: 100000000000000)" et quitte le programme
// 💡 function validateNumber(number) {

console.log("ADDITION-MASTER ™️");

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

let operator = 0;

while (operator === 0) {
  const tempOperator = Number(prompt("Enter the operator : "));

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    console.log("\nError : operator is not 1, 2, 3 or 4 ! Retry.");
  } else {
    operator = tempOperator;
  }
}

const firstNumber = Number(prompt("Enter the first number : "));

// 🦁 Déplace la validation du nombre dans la fonction `validateNumber`
// 🦁 Utilise la fonction `validateNumber` pour valider `firstNumber`
if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > 100000000000000) {
  console.log(
    "Error : firstNumber is not a number or is too big / too small (max: 100000000000000)"
  );
  process.exit(1);
}

const secondNumber = Number(prompt("Enter the second number : "));

// 🦁 Déplace la validation du nombre dans la fonction `validateNumber`
// 🦁 Utilise la fonction `validateNumber` pour valider `secondNumber`
if (Number.isNaN(secondNumber) || Math.abs(secondNumber) > 100000000000000) {
  console.log(
    "Error : secondNumber is not a number or is too big / too small (max: 100000000000000)"
  );
  process.exit(1);
}

if (operator === 4 && secondNumber === 0) {
  console.log("Error : division by 0");
  process.exit(1);
}

switch (operator) {
  case 1:
    console.log("The result of addition is : ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of soustraction is : ", firstNumber - secondNumber);
    break;
  case 3:
    console.log(
      "The result of multiplication is : ",
      firstNumber * secondNumber
    );
    break;
  case 4:
    console.log("The result of division is : ", firstNumber / secondNumber);
    break;
}
