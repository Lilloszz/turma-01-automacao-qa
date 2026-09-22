// // CRIACAO DE PESSOA
type Pessoa = {nome: string; idade: number}; // molde/contrato/modelo

function criarPessoa(nome: string, idade: number): Pessoa {
    return{nome, idade};
}

const p = criarPessoa("Murillo", 19);
console.log(p)

type Produto = {nome: string, preco: number; estoque: number};

// //CRIACAO DE PRODUTO
function criarProduto(nome: string, preco: number, estoque: number): Produto {
    return{nome, preco, estoque}
}

const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);