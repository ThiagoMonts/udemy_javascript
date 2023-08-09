const pontoRegex = /./;

console.log('.')
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

console.log('------------------');

const dRegex = /\d/; // Verifica se existe um número na frase [0-9]
console.log('d')
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

console.log('------------------');

const dRegex2 = /\D/; // Verifica se existe letras, não números na frase [^0-9]
console.log('D')
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

console.log('------------------');

const sRegex = /\s/; // Verifica se existe caracteres com espaço na frase
console.log('s')
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

console.log('------------------');

const wRegex = /\w/; // Verifica se existe caracteres alfanúmericos na frase [0-9] e [a-Z]
console.log('w')
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));