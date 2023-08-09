// Crie uma Regex que valide nome de usuários no sistema
// Aceita letras de a-z, _e-, números de 0-9, mínimo de 3 caracteres e máximo de 16
// Depois teste

const validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validarUsuario.test("matheus_123"))
console.log(validarUsuario.test("as"))
console.log(validarUsuario.test("111111111111111111"))