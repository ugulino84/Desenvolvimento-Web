function calculadora(a,b,c) {
  switch (c) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '/':
      return a / b;
      break;
    case '*':
      return a * b;
      break;
    default:
      return 'Operador inválido!';
  }
}

console.log(calculadora(1,1,'+'));
console.log(calculadora(1,1,'-'));
console.log(calculadora(1,1,'*'));
console.log(calculadora(1,1,'/'));
