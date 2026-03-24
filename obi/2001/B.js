export default function canFormGame(pieces, game) {

    console.log(pieces)
    console.log(game);

    function placePieceInGame(p, game, pieces) {
        if (p[1] === game[0][0]) {
            game.unshift(p[0] + p[1]);
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[0] === game[0][0]) {
            game.unshift(p[1] + p[0]);
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[0] === game[game.length - 1][1]) {
            game.push(p[0] + p[1]);
            pieces.splice(pieces.indexOf(p), 1);
        } else if (p[1] === game[game.length - 1][1]) {
            game.push(p[1] + p[0]);
            pieces.splice(pieces.indexOf(p), 1);
        }
    }

    for (let i = 0; i < (pieces.length + game.length) * 2; i++) {
        if (pieces.length === 0) break;

        [...pieces].forEach((p) => {
            placePieceInGame(p, game, pieces);
        });
    }

    return pieces.length === 0 ? "sim" : "nao";
}