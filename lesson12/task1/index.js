function calc(expression) {
  const [operand1, operator, operand2] = expression.split(' ');
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(operand1) + Number(operand2);
      break;
    case '-':
      result = Number(operand1) - Number(operand2);
      break;
    case '*':
      result = Number(operand1) * Number(operand2);
      break;
    case '/':
      result = Number(operand1) / Number(operand2);
      break;
  }
  return `${expression} = ${result}`;
}

console.log(calc('2 + 2'));
console.log(calc('2 * 3'));
