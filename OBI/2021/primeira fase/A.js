let winners = 0;

for(let i = 0; i < 6; i++){
    let result = prompt('resultado do ' + (i + 1) + " jogo ").toUpperCase();
    if(result == "V") winners ++;
}

function chooseGroup(){
    if(winners >= 5) return 1
    if(winners >= 3) return 2
    return 3;
};

console.log(chooseGroup());