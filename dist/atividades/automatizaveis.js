import PromptSync from "prompt-sync";
const prompt = PromptSync();
let automatizaveis = 0;
let naoAutomatizaveis = 0;
for (let i = 1; i <= 5; i++) {
    const cenario = prompt(`Digite o ${i}º cenário: `);
    const resposta = prompt(`É automatizável? (Sim/Não)`);
    resposta.toLowerCase();
    if (resposta === "sim") {
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++;
    }
    else if (resposta === "não" || resposta == "nao") {
        console.log(`${cenario} -> Não-Automatizar`);
        naoAutomatizaveis++;
    }
    else {
        console.log("Ocorreu um erro!");
    }
}
console.log(`Total de cenários automatizaveis: ${automatizaveis}`);
console.log(`Total de cenários não automatizaveis: ${naoAutomatizaveis}`);
//# sourceMappingURL=automatizaveis.js.map