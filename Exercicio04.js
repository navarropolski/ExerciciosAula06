const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let nome = prompt("Digite seu nome:"); 
// Variáveis para inserir as informações.
let altura = parseFloat(prompt("Digite sua altura (em metros):"));
let peso = parseFloat(prompt("Digite seu peso (em Kg):"));
function calcularPesoIdeal(nome, altura, peso) {
    // Calcula o IMC.
    var imc = peso / (altura * altura);

    // Define as faixas de IMC.
    var faixa;
    if (imc < 18.5) {
        faixa = "abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        faixa = "com peso normal";
    } else if (imc >= 25 && imc < 30) {
        faixa = "com sobrepeso";
    } else {
        faixa = "com obesidade";
    }
    return nome + " está " + faixa;
    // Retorna o resultado formatado.
}
let resultado = calcularPesoIdeal(nome, altura, peso);
console.log(resultado);
// Mostra o resultado na tela.