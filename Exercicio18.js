const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let anoAtual = new Date().getFullYear();
// Obtém o ano atual

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
// Solicita ao usuário que insira o ano de nascimento.

let idade = anoAtual - anoNascimento;
// Calcula a idade do usuário.

if (idade >= 16) {
    console.log("Você poderá votar este ano.");
} else {
    console.log("Você não poderá votar este ano.");
} // Verifica se a pessoa pode votar este ano