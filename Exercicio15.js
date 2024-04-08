const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let numeroLaranjas = parseInt(prompt("Digite o número de laranjas compradas: "));
// Solicita ao usuário que insira o número de laranjas compradas.

let precoUnitario;
if (numeroLaranjas < 12) {
    precoUnitario = 0.40;
} else {
    precoUnitario = 0.28;
} // Calcula o valor total da compra.

let valorTotal = numeroLaranjas * precoUnitario;
// Armazena na variável valor total.

console.log("Valor total da compra: R$", valorTotal.toFixed(2));
// Exibe o valor total da compra.