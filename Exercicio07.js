const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let valores = []; 
// Array para armazenar os cinco valores inteiros.
for (let i = 0; i < 3; i++) {
    let valor = parseInt(prompt("Digite o " + (i + 1) + "º valor inteiro: "));
        valores.push(valor);
} // Lê os três valores e joga eles no array.

for (var i = 0; i < valores.length - 1; i++) {
    for (var j = i + 1; j < valores.length; j++) {
        if (valores[i] > valores[j]) {
            var temp = valores[i];
            valores[i] = valores[j];
            valores[j] = temp;
        }
    }
} // Ordena os valores em ordem crescente.

console.log("Valores em ordem crescente:");
    for (var i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
// Mostra os valores em ordem na tela.