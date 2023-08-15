// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop
// Além disso imprima somente os números pares no console

function imprimePar(numero) {
    for (let i = numero; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

imprimePar(10);
imprimePar(21);
imprimePar(17);