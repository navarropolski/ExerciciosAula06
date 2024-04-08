const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let numeroLados = parseInt(prompt("Digite o número de lados do polígono regular: "));
let medidaLado = parseFloat(prompt("Digite a medida do lado (em cm): "));
// Solicita o número de lados e a medida do lado ao usuário

if (numeroLados === 3) { // Verifica o tipo de polígono e calcula a área, se aplicável
    // Triângulo
    let areaTriangulo = (Math.sqrt(3) / 4) * Math.pow(medidaLado, 2);
    console.log("TRIÂNGULO - Área:", areaTriangulo.toFixed(2) + " cm²");
} else if (numeroLados === 4) {
    // Quadrado
    let areaQuadrado = Math.pow(medidaLado, 2);
    console.log("QUADRADO - Área:", areaQuadrado.toFixed(2) + " cm²");
} else if (numeroLados === 5) {
    // Pentágono
    console.log("PENTÁGONO");
} else if (numeroLados < 3) {
    console.log("NÃO É UM POLÍGONO");
} else {
    console.log("POLÍGONO NÃO IDENTIFICADO");
} // Exibe o resultado da forma na tela.