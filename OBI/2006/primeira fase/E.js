let piles = Number(prompt('Digite a quantidade de pilhas de pedras'));
let rocks = prompt('Digite a quantidade de pedras em cada pilha').split(' ').map(Number);
let moves = 0;

function organizePiles(){
for (let i = 0; i < rocks.length * 2; i++) {
    for (let j = 0; j < rocks.length - 1; j++) {
        if (rocks[j + 1] - rocks[j] > 1) {
            rocks[j] += 1; 
            rocks[j + 1] -= 1; 
            moves++;
        }
        if(rocks[j] == rocks[j + 1]){
            rocks[j] -= 1;
            rocks[j + 1] += 1;
            moves++;
        }
        if(rocks[j] - rocks[j + 1] == 1){
            rocks[j] -= 1;
            rocks[j + 1] += 1;
            moves++;
        }
    }
}
    return rocks;
}


let ladder = organizePiles();
console.log(moves);
console.log(ladder);

// function isPerfectLadder(){
//     for(let i = 0; i < ladder.length - 1; i++){
//         if(ladder[i] - ladder[i + 1] != -1){
//             return false;
//         }
//     }
// }
