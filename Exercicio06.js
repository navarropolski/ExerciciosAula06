const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let salarioAtual = prompt("Digite o seu salário: ");
let salarioNovo = calcularNovoSalario(salarioAtual);
    console.log("O seu novo salário é: " +salarioNovo);
// Variáveis para o salário atual e o novo.

function calcularNovoSalario(salarioAtual) { 
// Função para calcular o salário atual de acordo com a faixa de valor inserido e aumento previsto.
    if(salarioAtual <= 1320){
        salarioAtual = salarioAtual * 1.11;
    return salarioAtual;
}// Return para mostrar o resultado da condição.
    if(salarioAtual <= 3000){
        salarioAtual = salarioAtual * 1.09;
    return salarioAtual;
}
    if(salarioAtual <=7000){
        salarioAtual = salarioAtual * 1.06;
    return salarioAtual;
}
    else{
        salarioAtual = salarioAtual * 1.01;
    return salarioAtual;
}
}