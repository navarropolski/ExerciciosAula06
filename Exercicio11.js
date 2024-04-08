const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let valorAplicado = parseFloat(prompt("Digite o valor aplicado: "));
// Solicita o valor aplicado ao usuário.

let taxaCorrecao;
if (valorAplicado <= 2000) {
    taxaCorrecao = 0.10; // 10%
} else if (valorAplicado <= 5000) {
    taxaCorrecao = 0.12; // 12%
} else {
    taxaCorrecao = 0.13; // 13%
}
// Verifica a taxa de correção com base no valor aplicado.

console.log("Taxa de correção:", (taxaCorrecao * 100) + "%");
// Mostra na tela a taxa de correção.