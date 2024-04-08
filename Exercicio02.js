const prompt = require("prompt-sync")(); 
    // Utilizei este comando para puxar a biblioteca "prompt-sync".
numero = prompt("Informe o numero: "); 
    // Utilizei a variável com nome de número para armazenar o mesmo informado pelo usuário.
if(numero % 7 == 0 && numero %23 ==0){ 
    // Utilizei a fórmula de divisão com resto e dois iguais que sinalizam a comparação de duas variáveis de qualquer tipo.
    console.log("O número é divisivel por 7 e 23.");
}
if(numero % 7 == 0 && numero %23 !=0){ 
    //..... e o sinal de diferente no 23 para que o resultado seja apenas divisivel por 7.
    console.log("O número é divisivel apenas por 7.");
} 
if(numero % 7 != 0 && numero %23 ==0){ 
    // ..... e o sinal de diferente no 7 para que o resultado seja apenas divisivel por 23.
    console.log("O número é divisivel apenas por 23.");
}
if(numero % 7 != 0 && numero %23 !=0){ 
    // ..... e o sinal de diferente nos dois números para que o resultado seja não divisivel por nenhum.
    console.log("O número não é divisivel por nenhum dos números.");
}