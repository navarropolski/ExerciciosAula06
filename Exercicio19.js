const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let prova1 = parseFloat(prompt("Digite a nota da Prova 1: "));
let prova2 = parseFloat(prompt("Digite a nota da Prova 2: "));
let trabalho1 = parseFloat(prompt("Digite a nota do Trabalho 1: "));
let trabalho2 = parseFloat(prompt("Digite a nota do Trabalho 2: "));
let trabalho3 = parseFloat(prompt("Digite a nota do Trabalho 3: "));
let trabalho4 = parseFloat(prompt("Digite a nota do Trabalho 4: "));
// Solicita ao usuário que insira as notas das provas e dos trabalhos.

let media_provas = (prova1 + prova2) / 2;
// Calcula a média das notas das provas (50% da nota final).

let media_trabalhos = (trabalho1 + trabalho2 + trabalho3 + trabalho4) / 4;
// Calcula a média das notas dos trabalhos (50% da nota final).

let media_final = (media_provas + media_trabalhos) / 2;
// Calcula a média final das notas.

if (media_final >= 7.0) {
    console.log("Aprovado");
} else if (media_final >= 4.0) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
} // Determina a situação do aluno com base na média final.