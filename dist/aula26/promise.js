// function buscarNome(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Juan");
//         }, 6000);
//     });
// }
// async function executar() {
//     console.log("Início do programa de busca...");
//     const nome = await buscarNome();
//     console.log("Nome:", nome); // "Juan"
//     console.log("Fim do programa.")
// }
// executar();
// console.log(typeof Promise)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function buscarUsuario(id) {
    await delay(5000); //simula chamada de rede
    return `Usuário #${id}`;
}
console.log("Início do programa...");
const nome = await buscarUsuario(42);
console.log(nome); //Usuário #42
export {};
//# sourceMappingURL=promise.js.map