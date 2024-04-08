const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let angulo1 = parseFloat(prompt("Digite o valor do primeiro ângulo (em graus): "));
let angulo2 = parseFloat(prompt("Digite o valor do segundo ângulo (em graus): "));
let angulo3 = parseFloat(prompt("Digite o valor do terceiro ângulo (em graus): "));
// Solicita ao usuário que insira os valores dos três ângulos do triângulo.

let somaAngulos = angulo1 + angulo2 + angulo3; // Verifica se os ângulos formam um triângulo válido.
if (somaAngulos === 180) { 
    if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
        console.log("Triângulo Retângulo");
    } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        console.log("Triângulo Obtusângulo");
    } else {
        console.log("Triângulo Acutângulo");
    } // Verifica o tipo de triângulo com base nos ângulos.
} else {
    console.log("Os ângulos informados não correspondem a um triângulo válido.");
} // Os ângulos são inválidos.