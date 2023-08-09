const reg1 = /[12345]/

console.log(reg1.test('Temos o número 6'));
console.log(reg1.test('Temos o número 2'));
console.log(reg1.test('Temos o número 23'));
console.log(reg1.test('Temos o número 25'));
console.log(reg1.test('Temos o número 26'));
console.log(reg1.test('Temos o número 60'));

console.log('------------------');

const reg2 = /[0-9]/ // Verifica se existe um número na frase

console.log(reg2.test('Temos o número 65'));
console.log(reg2.test('Temos o número'));