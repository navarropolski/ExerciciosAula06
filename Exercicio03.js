const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let valores = []; 
// Criei um array vazio com nome de valores para armazenar os números que serão inseridos posteriormente pelo usuário.

for (let i = 1; i <= 5; i++) { 
    // Utilizei um loop com o for para executar 5 vezes e pedir os 5 números.
    let valor = parseInt(prompt("Digite o " + i + "º valor inteiro:")); 
    // Utilizei a variavel valor para representar o valor inteiro, solicito o valor ao usuário com o prompt e o parseint converte o valor para inteiro.
    valores.push(valor); 
}   // Adiciono o valor inserido ao array valores.
let maiorValor = valores[0]; 
let posicao = 0;
// Crio variáveis para armazenar o maior valor e a posição dele.

for (let i = 1; i < valores.length; i++) { 
    // Loop criado para pegar os valores armazenados no array e encontrar o de maior valor e a posição.
    if (valores[i] > maiorValor) {  
        // Verifico se o valor atual é o maior encontrado até agora.
        maiorValor = valores[i]; 
        // Caso seja atualizo o maior valor e sua posição
        posicao = i;
    }
}
console.log("O maior valor digitado foi: " + maiorValor); 
console.log("Ele foi digitado na posição: " + (posicao + 1));
// Logs para mostar o maior valor digitado e sua posição.
