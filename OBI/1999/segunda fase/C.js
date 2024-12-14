let numberPlayers = Number(prompt('Digite a quantidade de jogadores'));
let favouredPlayer = Number(prompt('Digite o jogador que começará com dois búzios'));

let buziosPlayers = Array(numberPlayers).fill(1); 
buziosPlayers[favouredPlayer - 1] = 2; 

let turn = 1;
let rounds = 0;
let condition = true;

while (condition) {
    for (let i = 0; i < buziosPlayers.length; i++) {
        if (buziosPlayers[i] <= 0) continue; 

        let nextPlayer = (i + 1) % buziosPlayers.length; 

        if (turn % 2 !== 0) {
            buziosPlayers[i] -= 1;
            buziosPlayers[nextPlayer] += 1;
        } else { 
            if (buziosPlayers[i] > 1) {
                buziosPlayers[i] -= 2;
                buziosPlayers[nextPlayer] += 2;
            } else {
                buziosPlayers[i] -= 1;
                buziosPlayers[nextPlayer] += 1;
            }
        }
        turn++;
        rounds++;

        let activePlayers = buziosPlayers.filter(b => b > 0).length;
        if (activePlayers === 1) {
            condition = false;
            break;
        }
    }
}

let winner = buziosPlayers.findIndex(b => b > 0) + 1;


console.log(`turnos: ${rounds}`);
console.log(`vencedor: ${winner}`);

