// Crie uma Regex que aceite só letras maiúsculas
// Depois teste

const soMaiusculas = /[A-Z]/;

console.log(soMaiusculas.test("ABCDE"));
console.log(soMaiusculas.test("abcde"));
console.log(soMaiusculas.test("12345"));