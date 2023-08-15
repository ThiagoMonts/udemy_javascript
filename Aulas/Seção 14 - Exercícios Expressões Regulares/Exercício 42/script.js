// Crie uma Regex que só aceite strings terminadas com ID
// Depois teste

// const regex = /ID$/;

// console.log(regex.test("123ID"));
// console.log(regex.test("ID123"));

const validarId = /\d+ID\b/

console.log(validarId.test("123ID"));
console.log(validarId.test("123ID123"));
console.log(validarId.test("ABCDEID"));