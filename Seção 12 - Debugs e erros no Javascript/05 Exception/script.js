function saudacao(nome) {
    if (typeof nome !== 'string') {
        throw new Error('O parâmetro nome deve ser uma string');
    }
    console.log(`Olá ${nome}`);
}

saudacao("Thiago")
saudacao(1)

console.log("teste")