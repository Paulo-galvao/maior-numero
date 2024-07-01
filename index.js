const prompt = require("prompt-sync")({ sigint: true });

const algarismos = [];
let numero = prompt("Digite um número: ");

function maiorNumero(numero) {

    numero.split('').forEach(alg => {
        algarismos.push(parseFloat(alg));
    });

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

console.log(maiorNumero(numero));