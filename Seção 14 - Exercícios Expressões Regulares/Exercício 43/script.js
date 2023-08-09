// Crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca"
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics
// Depois teste

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: Ferrari"));
console.log(validarMarca.test("Marca: "));
console.log(validarMarca.test("Puma"));
console.log(validarMarca.test("12345678"));