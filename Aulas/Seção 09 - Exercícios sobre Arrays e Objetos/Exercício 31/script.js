// Crie dois arrays, um com mais de 5 elementos e outro com menos
// Faça uma função que verifica o número de elementos
// Se possuir menos de 5 elementos imprima "Poucos elementos" no console
// Se tiver mais, imprima "Muitos elementos"

let nomes = ["João", "Maria", "José", "Pedro", "Matheus", "Thiago"];

let numeros = [1, 2, 3];

function verificaElementos(array) {
    if (array.length <= 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificaElementos(nomes);
verificaElementos(numeros);