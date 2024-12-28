function promptFriendPreference() {
    const [ belovedMusic, hatedMusic ] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    return { beloved: belovedMusic, hated: hatedMusic };
}

const everyoneSatisfied = (friendsArr=[], music) => friendsArr
    .every(({ hated }) => hated !== music);

// Checa se é possível que todos fiquem agradados com a música
function infiniteCycle() {
    const hateds = [];

    friends.forEach(({ hated }) => hateds.push(hated));
    return friends.every(({ beloved }) => hateds.includes(beloved));
}

// Gerando os dados
const inputLine = prompt()
    .split(' ', 3)
    .map(e => parseInt(e));

const [ friendsQuantity, musics ] = inputLine;
let [,,selectedMusic] = inputLine; // Pula os 2 primeiros itens do array

const friends = [];

for (let i = 0; i < friendsQuantity; i++) {
    const friend = promptFriendPreference();
    friends.push(friend);
}

// Lógica do programa
let changes = 0;

while (true) {
    if (infiniteCycle()) {
        changes = -1;
        break;
    }

    for (let i in friends) {    
        const friend = friends[i];
    
        if (friend.hated === selectedMusic) {
            selectedMusic = friend.beloved;
            changes++;
    
            if (everyoneSatisfied(friends, selectedMusic)) break;
        }
    }

    if (everyoneSatisfied(friends, selectedMusic)) break;
}

console.log(changes);
