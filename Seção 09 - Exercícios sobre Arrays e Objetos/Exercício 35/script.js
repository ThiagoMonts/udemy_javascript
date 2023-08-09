// Crie um objeto calculadora
// Que tem os seguintes métodos: somar, subtrair, multiplicar, dividir
// Os métodos só devem aceitar dois parâmetros
// Utilize cada um dos métodos e imprima os valores no console

const calculadora = {
    somar: function(numero1, numero2) {
        return numero1 + numero2;
    },
    subtrair: function(numero1, numero2) {
        return numero1 - numero2;
    },
    multiplicar: function(numero1, numero2) {
        return numero1 * numero2;
    },
    dividir: function(numero1, numero2) {
        return numero1 / numero2;
    }
}

console.log(calculadora.somar(15, 8));
console.log(calculadora.subtrair(23, 17));
console.log(calculadora.multiplicar(8, 4));
console.log(calculadora.dividir(72, 4));