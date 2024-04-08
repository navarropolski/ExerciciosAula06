const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let notaProva1 = parseFloat(prompt("Digite a nota da Prova 1: "));
let notaProva2 = parseFloat(prompt("Digite a nota da Prova 2: "));
let notaTrabalho1 = parseFloat(prompt("Digite a nota do Trabalho 1: "));
let notaTrabalho2 = parseFloat(prompt("Digite a nota do Trabalho 2: "));
// Solicita as notas das provas e dos trabalhos.

let media = (notaProva1 + notaProva2 + notaTrabalho1 + notaTrabalho2) / 4;
// Calcula a média das notas.

let situacao;
if (media >= 7.0) {
    situacao = "Aprovado";
} else if (media >= 4.0) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}
// Determina a situação do aluno com base na média calculada.

console.log("Média:", media.toFixed(2));
console.log("Situação:", situacao);
// Exibe a média e a situação do aluno.