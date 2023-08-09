const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDataNasc.test('05/05/2019'));
console.log(validarDataNasc.test('5/5/2019'));
console.log(validarDataNasc.test('05-05-2019'));
console.log(validarDataNasc.test('05/05/00'));
console.log(validarDataNasc.test('12/12/1999'));
console.log(validarDataNasc.test('99/99/9999'));
console.log(validarDataNasc.test('31/02/2010'));

console.log('------------------'); 

const validarDataNasc2 = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/

console.log(validarDataNasc2.test('05/05/2019'));
console.log(validarDataNasc2.test('5/5/2019'));
console.log(validarDataNasc2.test('05-05-2019'));
console.log(validarDataNasc2.test('05/05/00'));
console.log(validarDataNasc2.test('12/12/1999'));
console.log(validarDataNasc2.test('99/99/9999'));
console.log(validarDataNasc2.test('31/02/2010'));