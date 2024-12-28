const quantity = Number(prompt('digite a quantidade de peças'));

const pieces = [];
const game = [];

for (let i = 0; i < quantity; i++) {
    const piece = prompt('digite os valores da peça ' + (i + 1) + ':');
    if (i == 0) {
        game.push(piece);
    } else {
        pieces.push(piece);
    }
}

for (let i = 0; i < quantity * 2; i++) {
    if (pieces.length == 0) {
        break;
    }
    pieces.forEach((p) => {
        if (p[1] == game[0][0]) {
            game.unshift(String(p[0] + p[1]));
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[0] == game[0][0]) {
            game.unshift(String(p[1] + p[0]));
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[0] == game[game.length - 1][1]) {
            game.push(String(p[0] + p[1]));
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[1] == game[game.length - 1][1]) {
            game.push(String(p[1] + p[0]));
            pieces.splice(pieces.indexOf(p), 1);
        }
    });
}

if (pieces.length == 0) {
    console.log("sim");
} else {
    console.log('nao');
}