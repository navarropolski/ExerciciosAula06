const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let ano = parseInt(prompt("Digite o ano: "));
// Solicita ao usuário que insira o ano.

if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
} // Verifica se o ano é bissexto de acordo com as condições fornecidas.