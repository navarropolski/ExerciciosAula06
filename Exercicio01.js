const prompt = require("prompt-sync")(); 
// Utilizei este comando para puxar a biblioteca "prompt-sync".
numero = prompt("Informe o numero: "); 
// Utilizei a variável com nome de número para armazenar o mesmo informado pelo usuário.
if(numero % 2 === 0 && numero % 10 === 0){ 
    // Instrução para verificar se o número é par e divisível por 10, utilizei três iguais para considerar os valores e tipos.
    console.log("O número é par e divisivel por 10."); 
    // Leio se é par e divisível.
}

else{
    console.log("O número não é par nem divisivel por 10."); 
    // Leio se não é par nem divisível.
}