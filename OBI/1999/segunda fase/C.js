Array.prototype.normalizeIndex = function(i) {
    const normalized = i % this.length;
    console.log(normalized);
    
    return normalized;
};

Array.prototype.incrementRight = function(i, x=1) {
    this[this.normalizeIndex(i)] -= x;
    this[this.normalizeIndex(i+1)] += x;
    console.log(this);
};

const players = parseInt(prompt());
const favPlayer = parseInt(prompt());

const buzios = Array(players).fill(1) || [];
buzios[favPlayer-1]++;

let turns = 0;

// [1, 2, 3, 4, 5]
const playersInGame = Array.from({ length: players }, (_, i) => i + 1);

function buziosLoop() {
    for (let i = 0; i < buzios.length; i++) {
        const playerBuzios = buzios[i];
        const nextPlayerBuzios = buzios[i+1];

        if (playerBuzios <= 0) continue;
        if (nextPlayerBuzios <= 0) continue;
        
        if ((turns+1) % 2 === 0) {
            buzios.incrementRight(i, 2);
            turns++;
            continue;
        }

        buzios.incrementRight(i);
        turns++;
    }
}

buziosLoop();

console.log(buzios);