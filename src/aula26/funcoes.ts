// //FUNCAO COM PARÂMETRO E COM RETORNO
function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 5);
console.log(resultado);

// //FUNCAO COM PARÂMETRO SEM RETORNO
function mostrarNome(nome: string): void {
    console.log(`Olá, ${nome}!`)
}

mostrarNome("Murillo");

// //FUNCAO SEM PARÂMETRO E CO RETORNO
function pegarIdade(): number {
    return 25;
}

const idade = pegarIdade();
console.log(idade);
// //FUNCAO SEM PARÂMETRO E SEM RETORNO
function mostrarMensagem(): void {
    console.log("Olá! Seja bem-vindo!");
}

mostrarMensagem();