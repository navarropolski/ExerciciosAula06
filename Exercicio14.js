const prompt = require("prompt-sync")();
// Utilizei este comando para puxar a biblioteca "prompt-sync".

let dia = parseInt(prompt("Digite o dia: "));
let mes = parseInt(prompt("Digite o mês: "));
let ano = parseInt(prompt("Digite o ano: "));
// Solicita ao usuário que insira o dia, mês e ano da data

let bissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
// Verifica se o ano é bissexto

let dataValida = false;
if (mes >= 1 && mes <= 12) {
    if (mes === 2) {
        if (bissexto && dia >= 1 && dia <= 29) {
            dataValida = true;
        } else if (!bissexto && dia >= 1 && dia <= 28) {
            dataValida = true;
        }
    } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia >= 1 && dia <= 30) {
        dataValida = true;
    } else if (dia >= 1 && dia <= 31) {
        dataValida = true;
    } // Verifica a validade da data
}

if (dataValida) {
    console.log("A data", dia + "/" + mes + "/" + ano, "é válida.");
} else {
    console.log("A data", dia + "/" + mes + "/" + ano, "não é válida.");
} // Exibe se a data é válida ou não