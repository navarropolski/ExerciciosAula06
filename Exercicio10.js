const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let senha = prompt("Digite a senha: ");
// Solicita a senha ao usuário.

if (senha === "5479") {
    console.log("ACESSO PERMITIDO");
} else {
    console.log("ACESSO NEGADO");
}
// Verifica se a senha fornecida está correta ou não.