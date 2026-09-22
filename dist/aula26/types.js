function criarPessoa(nome, idade) {
    return { nome, idade };
}
const p = criarPessoa("Murillo", 19);
console.log(p);
// //CRIACAO DE PRODUTO
function criarProduto(nome, preco, estoque) {
    return { nome, preco, estoque };
}
const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);
export {};
//# sourceMappingURL=types.js.map