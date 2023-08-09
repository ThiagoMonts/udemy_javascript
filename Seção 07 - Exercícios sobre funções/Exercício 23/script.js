// Escreva uma função que recebe uma String
// Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
// Se conter menos, imprima "Texto dentro do limite"

function checarTamanhoDoTexto(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
    console.log(texto.length);
}

checarTamanhoDoTexto("Olá, tudo bem?");
checarTamanhoDoTexto("Olá");
checarTamanhoDoTexto("Olá, tudo bem? Como vai você?");