const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let lado1 = parseFloat(prompt("Digite a medida do primeiro lado: "));
let lado2 = parseFloat(prompt("Digite a medida do segundo lado: "));
let lado3 = parseFloat(prompt("Digite a medida do terceiro lado: "));
// Solicita as medidas dos lados do triângulo ao usuário

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) { // Verifica se os lados formam um triângulo
    // Verifica a classificação do triângulo
    if (lado1 === lado2 && lado1 === lado3) {
        console.log("O triângulo é Equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é Isósceles.");
    } else {
        console.log("O triângulo é Escaleno.");
    } 
} else {
    console.log("As medidas fornecidas não formam um triângulo.");
} // Informa o tipo do triângulo ou se não forma um.