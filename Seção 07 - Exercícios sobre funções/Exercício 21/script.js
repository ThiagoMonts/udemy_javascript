// Escreva uma função que detecta o tipo de dado passado
// Verifique se é um: Number, boolean ou String
// E retorne uma mensagem para cada tipo
// Execute uma função para cada caso

function detectarTipoDeDado(dado) {
    if (typeof dado === "number") {
        console.log("Este dado é um número");
    } else if (typeof dado === "boolean") {
        console.log("Este dado é um boolean");
    } else if (typeof dado === "string") {
        console.log("Este dado é uma string");
    } else {
        console.log("Este dado é de outro tipo");
    }
}

detectarTipoDeDado(10);
detectarTipoDeDado(true);
detectarTipoDeDado("Olá");