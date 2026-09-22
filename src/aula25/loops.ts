const testes = ["login", "carrinho", "checkout"];
for (let i = 0; i < testes.length; i++) {
    console.log( `${i+1}. ${testes[i]}`);
}

for (const teste of testes) {
    console.log(`executando ${teste}`);
}
let tentativas = 0;
while (tentativas < 3){
    tentativas++;
}
console.log(`tentativas: ${tentativas}`);