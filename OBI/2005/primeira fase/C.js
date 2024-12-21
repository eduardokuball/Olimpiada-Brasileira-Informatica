let [quantity,rounds] = prompt('jogadores e rounds')
.split(' ')
.map(Number);
let players = prompt('digite a ordem dos jogadores')
.split(' ')
.map(Number);

for(let i = 0; i < rounds; i++){
    let input = prompt('jogadores, ordem, relatório')
    .split(' ')
    .map(Number);
    let player = input[0];
    let order = input[1];
    let reportplayers = input.slice(-player);
    reportplayers.forEach((r) => {
        if(r != order){
            let index = reportplayers.indexOf(r);
            players.splice(index, 1);
        }
    })
};

console.log(players.join(' '));
