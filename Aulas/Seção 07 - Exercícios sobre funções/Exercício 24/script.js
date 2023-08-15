// Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência
// Depois faça essa operação e retorne o resultado
// Por exemplo: base = 3, expoente = 2, resultado = 9

function potencia(base, expoente) {
    return Math.pow(base, expoente);
    // return base ** expoente; //Outro modo de fazer
}

console.log(potencia(3, 2));
console.log(potencia(5, 3));
console.log(potencia(2, 6));
