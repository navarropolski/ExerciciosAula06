const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".
lado1 = prompt("Insira o primeiro valor: ");
lado2 = prompt("Insira o segundo valor: ");
lado3 = prompt("Insira o terceiro valor: ");
// Variáveis para representar os lados do triângulo.
if(lado1 == lado2 && lado2 == lado3){
    console.log("O triângulo é equilátero.");
    return
} // Condição para verificar se os lados são todos iguais.

if((lado1 == lado2 && lado2 != lado3) || (lado1 != lado2 && lado2 == lado3) || (lado1 == lado3 && lado2 != lado1)){
    console.log("O triângulo é isósceles.");
    return
} // Condição para verificar se dois lados são iguais.

if(lado1 != lado2 && lado2 != lado3){
    console.log("O triângulo é escaleno.");
    return
} // Condição para verificar se todos os lados são diferentes.