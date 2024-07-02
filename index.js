const prompt = require("prompt-sync")({ sigint: true });

const algarismos = [];
let numero = prompt("Digite um número: ");

function ehNumero(num) {
    return !isNaN(Number(num));
}

function maiorNumero(num) {

    if(ehNumero(num)) {
        const algarismos = num.split("");
        for(let i = 0; i < algarismos.length; i++) {
            for(let j = i + 1; j < algarismos.length; j++) {
                if(algarismos[i] < algarismos[j]) {
                    let aux = algarismos[j];
                    algarismos[j] = algarismos[i];
                    algarismos[i] = aux;
                } 
            }
        }
        return algarismos.join('');
    }

    console.log("O valor digitado não é um número!");
    return false   
    
}

console.log(maiorNumero(numero));